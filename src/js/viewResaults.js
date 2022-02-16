import icons from 'url:../img/icons.svg';
import view from './view.js';
class viewResaults extends view {
  _parentEl = document.querySelector(`.results`);
  _generateRecipe() {
    return this._data.map(this.renderpreview).join(``);
  }
  renderpreview(resaults) {
    return `<li class="preview">
            <a class="preview__link preview__link" href="#${resaults.id}">
              <figure class="preview__fig">
                <img src="${resaults.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${resaults.title}</h4>
                <p class="preview__publisher">${resaults.publisher}</p>
    
              </div>
            </a>
          </li>`;
  }
}
export default new viewResaults();
