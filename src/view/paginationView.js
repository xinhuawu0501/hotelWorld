import View from "./view";
import { NUM_PER_PAGE } from "../js/config.js";
import icons from "url:../img/icons.svg";
class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");
  _data;

  _generateMarkup(page, state) {
    let html;
    //first page && no other page
    if (page === 1 && state.totalPage === 1) {
      html = `
        <button class="btn btn--inline pagination__btn--next" data-goto="${page}">
            <span>Page ${page}</span>
        </button>`;
    }
    //first page && have other page
    else if (page === 1 && state.totalPage > 1) {
      html = `
        <button class="btn btn--inline pagination__btn--next" data-goto="${
          page + 1
        }">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>`;
    }
    //last page
    else if (page === state.totalPage) {
      html = `
        <button class="btn btn--inline pagination__btn--prev" data-goto="${
          page - 1
        }">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
        </button>`;
    }
    //others
    else {
      html = `
      <button class="btn btn--inline pagination__btn--next"  data-goto="${
        page + 1
      }">
            <span>Page ${page + 1}</span>
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        <button class="btn btn--inline pagination__btn--prev"  data-goto="${
          page - 1
        }">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${page - 1}</span>
        </button>`;
    }
    return html;
  }
  _render(page, state) {
    const markup = this._generateMarkup(page, state);
    this.clear();
    this._parentEl.insertAdjacentHTML("beforeend", markup);
  }
  _addHandler(handler) {
    this._parentEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn--inline");

      if (!btn) return;
      console.log(btn);

      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    });
  }
}
export default new PaginationView();
