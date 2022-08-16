import { API_KEY, options } from "./config.js";
import * as model from "./model.js";
import searchView from "../view/searchView.js";
import previewView from "../view/previewView.js";
import resultView from "../view/resultView.js";
import paginationView from "../view/paginationView.js";

const controlSearch = async function () {
  try {
    //render spinner
    previewView.renderSpinner();
    await model.getSearchResult();

    //render preview
    previewView._render(model.getResultPerPage(model.state.page));
    //pagination
    paginationView._render(model.state.page, model.state);
  } catch (err) {
    alert(err);
    console.log(err);
  }
};

const controlResult = async function () {
  resultView.renderSpinner();

  model.findCurHotel();
  await model.loadCurHotelFeatures();
  resultView._render(model.state.curHotel);
};

const controlPagination = (goTo) => {
  //update preview list
  previewView._render(model.getResultPerPage(goTo));
  //update button
  paginationView._render(goTo, model.state);
};

const init = () => {
  searchView.addHandler(controlSearch);
  previewView._addHandler(controlResult);
  paginationView._addHandler(controlPagination);
};
init();
