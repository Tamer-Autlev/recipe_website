import icons from 'url:../img/icons.svg';
import view from './view.js';
class viewpage extends view {
  _parentEl = document.querySelector(`.pagination`);
  _generateRecipe() {
    const numPage = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currPage = this._data.page;
    const rightButton = `<button data-goto="${
      currPage + 1
    }" class="btn--inline pagination__btn--next">
      <span>page ${currPage + 1}</span>
      <svg class="search__icon">
        <use href=" ${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    const leftButton = `  
    <button data-goto="${
      currPage - 1
    }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span> page ${currPage - 1}</span>
  </button>`;
    if (currPage === numPage && numPage > 1) {
      return leftButton;
    }
    if (currPage < numPage && currPage > 1) {
      return leftButton + rightButton;
    }
    if (currPage === 1 && numPage > 1) {
      return rightButton;
    }
  }
  pageClickHandler(handler) {
    this._parentEl.addEventListener(`click`, e => {
      const target = e.target.closest(`.btn--inline`);
      if (!target) return;
      const selectPage = +target.dataset.goto;

      handler(selectPage);
    });
  }
}
export default new viewpage();
