export const API_KEY = "8212341a06msh116c63045407b15p1bffecjsn3f8fe6a12567";
export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8212341a06msh116c63045407b15p1bffecjsn3f8fe6a12567",
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};

// fetch(
//   `https://${options.headers["X-RapidAPI-Host"]}/v1/hotels/search-by-coordinates?order_by=popularity&adults_number=2&units=metric&room_number=1&checkout_date=2022-10-01&filter_by_currency=AED&locale=en-gb&checkin_date=2022-09-30&latitude=65.9667&longitude=-18.5333&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`,
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const optionsForGeoCoding = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8212341a06msh116c63045407b15p1bffecjsn3f8fe6a12567",
    "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
  },
};
