import { API_KEY, options } from "./config.js";
import * as model from "./model.js";
import searchView from "../view/searchView.js";
import previewView from "../view/previewView.js";
import resultView from "../view/resultView.js";
console.log(model.state);

const controlSearch = async function () {
  //render spinner
  previewView.renderSpinner();
  await model.getSearchResult();

  //render preview
  previewView._render(model.state.search.results);
};

const controlResult = function (id) {
  model.findCurHotel();
  console.log(model.state);
  resultView._render(model.state.curHotel);
};

const init = () => {
  searchView.addHandler(controlSearch);
  previewView._addHandler(controlResult);
};
init();
