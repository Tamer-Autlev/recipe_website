import { API_URL } from './config.js';
import { getJson } from './helper.js';
import { RESULTS_PER_PAGE } from './config.js';
export const modelRecipe = {
  recipe: {},
  results: [],
  resultsPerPage: RESULTS_PER_PAGE,
  page: 1,
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJson(`${API_URL}${id}`);

    const { recipe } = data.data;
    modelRecipe.recipe = {
      id: recipe.id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      cookingTime: recipe.cooking_time,
      servings: recipe.servings,
      sorceUrl: recipe.sorce_url,
      title: recipe.title,
    };
  } catch (err) {
    console.log(err);
  }
};

export const loadSearch = async function (recipe) {
  try {
    const data = await getJson(`${API_URL}?search=${recipe}`);
    modelRecipe.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
      };
    });
    document.querySelector(`.search`).value = recipe;
  } catch (err) {
    console.log(err);
  }
};
export const getnumberpage = function (page = 1) {
  modelRecipe.page = page;
  const start = (page - 1) * modelRecipe.resultsPerPage;
  const end = page * modelRecipe.resultsPerPage;
  return modelRecipe.results.slice(start, end);
};

export const ChangeServing = function (newServing) {
  modelRecipe.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServing) / modelRecipe.recipe.servings;
  });
  modelRecipe.recipe.servings = newServing;
};
