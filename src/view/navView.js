import View from "./view";
class navView extends View {
  _parentEl = document.querySelector(".nav__item__modal-bookmark");

  _generateModalMarkup(data) {
    return data[0]
      ? `
    ${data
      .map((bookmarkedHotel) => {
        return `
        <li class="nav__item__modal-list nav__item__modal-bookmark-list" id="${bookmarkedHotel.hotel_id}">
            <img src="${bookmarkedHotel.photo}" alt="hotel-photo">
            ${bookmarkedHotel.hotel_name}
            <div class="score">${bookmarkedHotel.review[0]}</div>
        </li>`;
      })
      .join("")}
        `
      : `<div class="fallback-message">No favorite hotel yet !</div>`;
  }
  _renderModal(data) {
    this.clear();
    this._data = data;
    const markup = this._generateModalMarkup(data);
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _addHandler(handler) {
    this._parentEl.addEventListener("click", (e) => {
      if (!e.target.closest(".nav__item__modal-bookmark-list")) return;
      const id = e.target
        .closest(".nav__item__modal-bookmark-list")
        .getAttribute("id");

      const targetHotel = this._data.find((hotel) => {
        return hotel.hotel_id === +id;
      });

      handler(targetHotel);
    });
  }
}

export default new navView();
