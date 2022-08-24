import { options, optionsForGeoCoding, NUM_PER_PAGE } from "./config";
import searchView from "../view/searchView";
import { getJSON, timeOut } from "./helper.js";
export const state = {
  test_id: 1377073,
  filters: {},
  page: 1,
  totalPage: 1,
  curId: "",
  curHotel: {},
  locale: "en-gb",
  search: {
    query: {
      location: "",
      order_by: "",
      adult_num: 0,
      kid_num: 0,
      room_num: 0,
      checkin_date: "",
      checkout_date: "",
    },
    results: [],
  },
};

// export let getLocale = document.documentElement.lang;
// console.log(getLocale);
// getLocale = locale;
// console.log(getLocale);

export const getGeo = async function (address) {
  try {
    const locale = state.locale;
    const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${address}&language=${locale}`;
    const data = await getJSON(url, optionsForGeoCoding);
    const { lat, lng } = data.results[0].location;
    state.search.location = [lat, lng];
  } catch (err) {
    console.error(err);
    alert("Please enter valid location!");
  }
};

export const getSearchResult = async function () {
  try {
    const locale = state.locale;

    //get search query
    const query = searchView.getQuery();
    if (!query) return;
    state.search.query = query;
    console.log(query);
    //search location
    await getGeo(query.location);

    //fetch data
    const url = `https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by=${query.order_by}&adults_number=${query.adult_num}&units=metric&room_number=${query.room_num}&checkout_date=${query.checkout_date}&filter_by_currency=AED&locale=${locale}&checkin_date=${query.checkin_date}&latitude=${state.search.location[0]}&longitude=${state.search.location[1]}&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`;
    const data = await getJSON(url, options);

    console.log(data);
    state.search.results = data.result.map((data) => {
      return {
        hotel_name: data.hotel_name,
        hotel_id: data.hotel_id,
        hotel_address: data.address,
        checkin_time: data.checkin,
        checkout_time: data.checkout,
        distance_to_city_center: data.distance_to_cc,
        include_breakfast: data.hotel_include_breakfast,
        free_cancellable: data.is_free_cancellable,
        photo: data.main_photo_url,
        max_photo: data.max_1440_photo_url,
        review: [data.review_score, data.review_score_word, data.review_nr],
        url: data.url,
        unit_config: data.unit_configuration_label,
        totalPrice: data.composite_price_breakdown.all_inclusive_amount.value,
        currency: data.currency_code,
        bookmarked: "false",
      };
    });
    //update total page
    state.totalPage = Math.ceil(state.search.results.length / NUM_PER_PAGE);
    console.log(state);
  } catch (err) {
    console.error(err);
  }
};

export const findCurHotel = () => {
  const curHotel = state.search.results.find((result) => {
    return result.hotel_id == state.curId;
  });
  state.curHotel = curHotel;
};

export const loadCurHotelPhotos = async function () {
  try {
    const locale = state.locale;
    console.log(locale);
    const id = state.curId;
    // const id = state.test_id;

    const url = `https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=${locale}&hotel_id=${id}`;

    //fetch data
    const data = await getJSON(url, options);
    //set state
    state.curHotel.allPhotos = data.map((data) => {
      return {
        photo_1440: data.url_1440,
        photo_1280: data.url_max,
        photo_square_60: data.url_square60,
        tags: data.tags, //[{tag: '', id: 123}, {...}]
      };
    });
    console.log(state);
  } catch (error) {
    console.log(error);
  }
};

// loadCurHotelPhotos();

export const loadCurHotelNearbyandQA = async function () {
  try {
    const locale = state.locale;

    const id = state.curId;
    // const id = state.test_id;
    const hightlightPromise = fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/location-highlights?hotel_id=${id}&locale=${locale}`,
      options
    );

    const questionsPromise = fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/questions?locale=${locale}&hotel_id=${id}`,
      options
    );

    const res = await Promise.allSettled([hightlightPromise, questionsPromise]);
    console.log(res);
    //error handling
    if (!res[0].value.ok)
      throw new Error(`Fail to load location highlight data`);
    if (!res[1].value.ok) throw new Error(`Fail to load QA data`);

    //convert to json data
    const data = await Promise.allSettled([
      res[0].value.json(),
      res[1].value.json(),
    ]);

    //location highlight data
    const landmark = data[0].value.location_highlights.popular_landmarks;
    const nearByStation = data[0].value.location_highlights.nearby_stations;
    state.curHotel.landmark = landmark;
    state.curHotel.nearByStation = nearByStation;

    // //question data
    const questions = data[1].value;
    console.log(questions);

    questions.q_and_a_pairs = data[1].value.q_and_a_pairs.filter((qa) => {
      return qa.answer;
    });
    console.log(questions);

    state.curHotel.FAQ = questions;
  } catch (err) {
    alert(err);
    console.log(err);
  }
};
// loadCurHotelNearbyandQA();
export const loadCurHotelFacAndReviews = async function () {
  try {
    const locale = state.locale;
    const id = state.curId;

    const facilitiesPromise = fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/facilities?locale=${locale}&hotel_id=${id}`,
      options
    );

    const reviewsPromise = fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/reviews?sort_type=SORT_MOST_RELEVANT&locale=${locale}&hotel_id=${id}&language_filter=${locale}%2Cde%2Cfr&customer_type=solo_traveller%2Creview_category_group_of_friends`,
      options
    );

    const res = await Promise.allSettled([facilitiesPromise, reviewsPromise]);
    //error handling

    if (!res[0].value.ok) throw new Error(`Fail to load facility data`);
    if (!res[1].value.ok) throw new Error(`Fail to load review data`);

    //convert to json data

    const data = await Promise.allSettled([
      res[0].value.json(),
      res[1].value.json(),
    ]);

    //facilities
    state.curHotel.facilities = data[0].value;

    //reviews
    state.curHotel.customerReviews = data[1].value.result.map((r) => {
      return {
        title: r.title,
        travel_purpose: r.travel_purpose,
        author_type: r.author.type_string,
        author_name: r.author.name,
        author_country: r.author.countrycode,
        average_score: r.average_score.toFixed(1),
        pros: r.pros,
        cons: r.cons,
        date: r.date,
        id: r.review_id,
      };
    });
  } catch (err) {
    alert(err);
    console.log(err);
  }
};
// loadCurHotelFeatures(state.test_id);

export const getResultPerPage = (page) => {
  state.page = page;
  const start = (page - 1) * NUM_PER_PAGE;
  const end = page * NUM_PER_PAGE;
  return state.search.results.slice(start, end);
};
