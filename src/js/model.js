import { API_KEY, options, optionsForGeoCoding, NUM_PER_PAGE } from "./config";
import searchView from "../view/searchView";
export const state = {
  test_id: 1377073,
  filters: {},
  page: 1,
  totalPage: 1,
  curId: "",
  curHotel: {},
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
    // language: "en",
  },
};

export const getGeo = async function (address) {
  try {
    const res = await fetch(
      "https://trueway-geocoding.p.rapidapi.com/Geocode?address=taipei&language=en",
      optionsForGeoCoding
    );
    const data = await res.json();
    const { lat, lng } = data.results[0].location;
    state.search.location = [lat, lng];
  } catch (err) {
    console.error(err);
  }
};

export const getSearchResult = async function () {
  try {
    //search location
    await getGeo();

    //get search query
    const query = searchView.getQuery();
    if (!query) return;
    state.search.query = query;
    console.log(query);

    //fetch data
    const res = await fetch(
      `https://${options.headers["X-RapidAPI-Host"]}/v1/hotels/search-by-coordinates?order_by=${query.order_by}&adults_number=${query.adult_num}&units=metric&room_number=${query.room_num}&checkout_date=${query.checkout_date}&filter_by_currency=AED&locale=en-gb&checkin_date=${query.checkin_date}&latitude=${state.search.location[0]}&longitude=${state.search.location[1]}&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`,
      options
    );
    if (!res.ok) throw new Error(`Something went wrong:( Please try again!`);
    const data = await res.json();
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
        totalPrice: data.composite_price_breakdown.gross_amount.value,
        facilities: data.hotel_facilities,
        currency: data.currency_code,
        pricePerNight:
          data.composite_price_breakdown.gross_amount_per_night.value,
        bookmarked: "false",
      };
    });
    //update total page
    state.totalPage = Math.ceil(state.search.results.length / NUM_PER_PAGE);
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

export const loadCurHotelFeatures = async function () {
  try {
    const id = state.curId;
    console.log(id);
    const res = await fetch(
      `https://booking-com.p.rapidapi.com/v1/hotels/location-highlights?hotel_id=${id}&locale=en-gb`,
      options
    );
    if (!res.ok) throw new Error("Something went wrong:( Please try again!");
    const data = await res.json();
    const landmark = data.location_highlights.popular_landmarks;
    const nearByStation = data.location_highlights.nearby_stations;
    console.log(landmark, nearByStation);
    state.curHotel.landmark = landmark;
    state.curHotel.nearByStation = nearByStation;
    console.log(state.curHotel);
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
