import Search from "./models/Search";
import { elements, renderLoader, clearLoader } from "./views/base";
import * as searchView from "./views/searchView";

// Global state of the app
// - Search object
// - Curent recipe object
// - Liked recipes
const state = {};

const controlSearch = async () => {
  // 1) Get the query from the view
  const query = searchView.getInput();

  if (query) {
    // 2) Create new search object and add it to the state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    // 4) Search for recipes
    await state.search.getResults();

    // 5) Render results on UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

// https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min.js

// https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min.js
