import icons from 'url:../img/icons.svg';

export default class view {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateRecipe();
    this._parentEl.innerHTML = ``;
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `<div class="spinner">
    <svg>
      <use href="${icons}"></use>
    </svg>
  </div> `;
    this._parentEl.innerHTML = ``;
    this._parentEl.insertAdjacentHTML(`afterbegin`, markup);
  }
}
