import View from "./view";
class ResultView extends View {
  _parentEl = document.querySelector(".details");
  _data;
  _generateMarkup(data) {
    return `
        <img src="" alt="">
        <h2 class="details__hotel-name">${data.hotel_name}</h2>
        <span class="details__distance-to-cc">${data.hotel_distance_to_city_center}</span>

        <span class="details__checkin-time">Checkin time ${data.checkin_time}</span>
        <span class="details__checkout-time">Checkout time${data.checkout_time}</span>
        <span class="details__review">
            <svg>
                <use use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
        <span class="details__review-score">${data.review[0]}</span>
        <span class="details__review-description">${data.review[1]}</span>
        </span>
            <a href="${data.url}"></a>
       
        
    `;
  }
  _render(data) {
    this._data = data;
    const markup = this._generateMarkup(data);
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new ResultView();
