import View from "./view";
class ResultView extends View {
  _parentEl = document.querySelector(".details");
  _data;
  _generateMarkup(data) {
    return `
        <img class="details__img" src="${data.max_photo}" alt="Hotel photo">
        <div class="details__header details__section">
          <div class="details__header-main">
          ${
            data.free_cancellable === 1
              ? '<div class="details__header-main__isFreeCancellable">Free cancellable</div>'
              : ""
          }
          ${
            data.include_breakfast === 1
              ? '<div class="details__header-main__hasBreakfast">Breakfast included</div>'
              : ""
          }
          <h2 class="details__header-main__hotel-name">${data.hotel_name}</h2>
        </div>

        <div class="details__header__hotel-address">
          ${data.hotel_address}
        </div>
        <span class="details__review">
          <span class="details__review-score">${data.review[0]}</span>
          <span class="details__review-description">${data.review[1]}</span>
        </span>
      </div>
      <div class="details__info details__section">
        <h3 class="details__info__title main-title">Information</h3>
        <div class="details__info__price">
          <div class="details__info__price-total">Total price: ${
            data.currency
          }${Math.round(data.totalPrice)}</div>
          <div class="details__info__price-one-night">${data.currency} ${
      data.pricePerNight
    } per night</div>
        </div>
        <div class="details__info__item details__distance-to-cc">
          <b>Distance from city center &nbsp</b>
          ${data.distance_to_city_center}
        </div>
        <div class="details__info__item details__checkin-time">
          <b>Checkin time &nbsp</b> ${data.checkin_time.from}
        </div>
        <div class="details__info__item details__checkout-time">
          <b>Checkout time &nbsp</b> ${data.checkout_time.until}
        </div>
      </div>
        ${
          data.landmark || data.nearByStation
            ? `<div class="details__nearBy details__section">
        <h3 class="details__nearBy-title main-title">Location Highlights</h3>
        ${
          data.landmark
            ? `<div class="details__nearBy-landmark">
        <h4 class="details__nearBy-landmark-title sub-title">Nearby Landmark</h4>
        ${data.landmark
          .map((l) => {
            return `<div class="details__nearBy-landmark-item">${l}</div>`;
          })
          .join(" ")}
      </div>`
            : ""
        }
        ${
          data.nearByStation
            ? `<div class="details__nearBy-station ">
        <h4 class="details__nearBy-station-title sub-title">Nearby Station</h4>
        ${data.nearByStation
          .map((s) => {
            return `
            <div class="details__nearBy-station-item">
              <div class="details__nearBy-station-name">${s.station_name}</div>
              <div class="details__nearBy-station-distance">${s.distance_localized}</div>
            </div>`;
          })
          .join(" ")}  
      </div>`
            : ""
        }
        
      </div>`
            : ""
        }
        
        <a href="${data.url}" class="details__link">Visit Booking.com</a>
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
