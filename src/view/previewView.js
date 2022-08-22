import * as model from "../js/model.js";
import { NUM_PER_PAGE } from "../js/config.js";
import View from "./view.js";
import "../img/icons.svg";
class PreviewView extends View {
  _parentEl = document.querySelector(".results");
  _data;

  _renderSkeleton() {
    const skeleton = document.createElement("div");
    skeleton.classList.add("skeleton");
    const html = `
    <div class="skeleton-item skeleton-img"></div>
    <div class="skeleton-text">
      <div class="skeleton-item skeleton-text-item"></div>
      <div class="skeleton-item skeleton-text-item"></div>
    </div>
  `;
    skeleton.insertAdjacentHTML("afterbegin", html);
    this.clear();

    for (let i = 0; i < NUM_PER_PAGE; i++) {
      const skeletons = skeleton.cloneNode(true);
      this._parentEl.insertAdjacentElement("afterbegin", skeletons);
    }
  }
  _generateMarkUp(results) {
    return results
      .map((data) => {
        return `
    <li class="preview" id="${data.hotel_id}">
            <div class="preview__link preview__link--active" >
              <figure class="preview__fig">
                <img src="${data.photo}" alt="hotel photo" />
              </figure>
              <h4 class="preview__title">${
                data.hotel_name.length > 25
                  ? data.hotel_name.slice(0, 25) + "..."
                  : data.hotel_name
              }</h4>
              <p class="preview__address">
              <svg xmlns="http://www.w3.org/2000/svg" class="preview__address-icon icon" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
              ${data.hotel_address}</p>
              <div class="preview__score">
              <svg xmlns="http://www.w3.org/2000/svg" class="preview__score-icon icon" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>
                <div class="preview__score-num">${data.review[0]}</div>
              </div>
            </div>  
          </li>`;
      })
      .join("");
  }
  _render(data) {
    document.querySelector(".pagination").innerHTML = "";
    this._data = data;
    const markup = this._generateMarkUp(this._data);
    this.clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _addHandler(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const targetPreview = e.target.closest(".preview");
      const id = targetPreview.getAttribute("id");
      model.state.curId = id;
      handler();
    });
  }
}

export default new PreviewView();
