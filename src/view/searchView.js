import { API_KEY, options, optionsForGeoCoding } from "../js/config.js";
class SearchView {
  _parentEl = document.querySelector(".search");

  getQuery() {
    const result = this._parentEl.elements;
    //check input field empty

    //city empty
    if (!result[0].value) {
      alert("Input city cannot be empty");
      return;
    }
    //check total guest>0 && room number > 0
    if (!+result[2].value && !+result[3].value) {
      alert("Total number of guest should be greater than 0");
      return;
    }
    if (!result[4].value) {
      alert("Total number of room should be greater than 0");
      return;
    }
    //checkin date empty || checkout date empty
    if (!result[5].value || !result[6].value) {
      alert("Checkin date and checkout date cannot be empty");
      return;
    }

    //checkout date < checkin date
    if (
      +result[6].value.replaceAll("-", "") <
      +result[5].value.replaceAll("-", "")
    ) {
      alert("Checkout date cannot be earlier than checkin date");
      return;
    }

    return {
      location: result[0].value.toLowerCase(),
      order_by: result[1].value,
      adult_num: +result[2].value,
      kid_num: +result[3].value,
      room_num: +result[4].value,
      checkin_date: result[5].value,
      checkout_date: result[6].value,
    };
  }

  addHandler(handler) {
    this._parentEl.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
