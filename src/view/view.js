import icons from "url:../img/icons.svg";

export default class View {
  _parentEl;

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

  clear() {
    this._parentEl.innerHTML = "";
    console.log(this._parentEl);
  }
}
