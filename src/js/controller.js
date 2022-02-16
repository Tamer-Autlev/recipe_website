import * as model from './model.js';
import viewRecipe from './viewRecipe.js';
import viewSearch from './viewSearch.js';
import viewResaults from './viewResaults';
import { render } from 'sass';
import pagination from './pagination.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    viewRecipe.renderSpinner();
    await model.loadRecipe(id);
    viewRecipe.render(model.modelRecipe.recipe);
    controlServing();
  } catch (err) {
    alert(err);
    throw err;
  }
};
const renderSearch = async function () {
  try {
    viewResaults.renderSpinner();
    const searchV = viewSearch.getqury();
    if (!searchV) return;
    await model.loadSearch(searchV);
    viewResaults.render(model.getnumberpage());
    pagination.render(model.modelRecipe);
  } catch (err) {}
};
const paginationSetUp = function (selectPage) {
  viewResaults.render(model.getnumberpage(selectPage));
  pagination.render(model.modelRecipe);
};
const controlServing = function (newServing = 1) {
  model.ChangeServing(newServing);
  viewRecipe.render(model.modelRecipe.recipe);
};

const init = function () {
  viewRecipe.listner(showRecipe);
  viewRecipe.handelServing(controlServing);
  viewSearch.SearchHandler(renderSearch);
  pagination.pageClickHandler(paginationSetUp);
};
init();
