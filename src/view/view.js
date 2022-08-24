import icons from "url:../img/icons.svg";

export default class View {
  _parentEl;
  _data;

  clear() {
    this._parentEl.innerHTML = "";
  }

  renderSpinner() {
    this.clear();
    const markup = `
        <div class="spinner">
            <svg>
            <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
        `;
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  render(data) {
    this.clear();
    this._data = data;
    const markup = this._generateMarkup(data);
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
