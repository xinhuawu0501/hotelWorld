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
        <a class="preview__link preview__link--active" href="#${data.hotel_id}">
          <figure class="preview__fig">
            <img src="${data.photo}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${data.hotel_name}</h4>
            <p class="preview__publisher">The Pioneer Woman</p>
            <div class="preview__user-generated">
              <svg>
                <use href="src/img/icons.svg#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
      })
      .join("");
  }
  _render(results) {
    this._data = results;
    const markup = this._generateMarkUp(results);
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _addHandler(handler) {
    window.addEventListener("hashchange", (e) => {
      const id = window.location.hash.slice(1);
      console.log(id);
      model.state.curId = id;
      handler();
    });
  }
}

export default new PreviewView();
