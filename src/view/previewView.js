import * as model from "../js/model.js";
import View from "./view.js";
import "../img/icons.svg";
class PreviewView extends View {
  _parentEl = document.querySelector(".results");
  _data;

  _generateMarkUp(results) {
    return results
      .map((data) => {
        return `
    <li class="preview">
            <a class="preview__link preview__link--active" href="#${
              data.hotel_id
            }">
              <figure class="preview__fig">
                <img src="${data.photo}" alt="hotel photo" />
              </figure>
              <h4 class="preview__title">${
                data.hotel_name.length > 25
                  ? data.hotel_name.slice(0, 25) + "..."
                  : data.hotel_name
              }</h4>
              <p class="preview__address">${data.hotel_address}</p>
              <div class="preview__score">
                <div class="preview__score-num">${data.review[0]}</div>
              </div>
            </a>  
          </li>`;
      })
      .join("");
  }
  _render(data) {
    document.querySelector(".pagination").innerHTML = "";
    this._data = data;
    const markup = this._generateMarkUp(this._data);
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _addHandler(handler) {
    window.addEventListener("hashchange", (e) => {
      const id = window.location.hash.slice(1);
      model.state.curId = id;
      handler();
    });
  }
}

export default new PreviewView();
