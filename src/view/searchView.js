import { now } from "../js/helper.js";
class SearchView {
  _parentEl = document.querySelector(".search");

  getQuery() {
    const result = this._parentEl.elements;
    const checkInDate = new Date(result[5].value).toLocaleDateString();
    const checkOutDate = new Date(result[6].value).toLocaleDateString();
    //check total guest>0 && room number > 0
    if (!+result[2].value && !+result[3].value) {
      alert("Total number of guest should be greater than 0");
      return;
    }
    if (!result[4].value) {
      alert("Total number of room should be greater than 0");
      return;
    }

    if (checkInDate > checkOutDate) {
      alert("Checkout date cannot be earlier than check-in date");
      return;
    }
    if (checkInDate < now) {
      alert("Check-in cannot be earlier than current date");
      return;
    }
    return {
      location: result[0].value.toLowerCase(),
      order_by: result[1].value.toLowerCase(),
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
