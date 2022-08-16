import icons from "url:../img/icons.svg";

console.log(icons);
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
    console.log(this._parentEl);
    console.log(`${this._parentEl} is rendering spinner`);
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this._parentEl.innerHTML = "";
  }
}
