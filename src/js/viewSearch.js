class viewSearch {
  _parentEl = document.querySelector(`.search`);

  getqury() {
    const query = this._parentEl.querySelector(`.search__field`).value;
    this.clearInput();
    return query;
  }
  clearInput() {
    this._parentEl.querySelector(`.search__field`).value = ``;
  }
  SearchHandler(handler) {
    this._parentEl.addEventListener(`submit`, function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new viewSearch();
