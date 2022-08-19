import { API_KEY, options } from "./config.js";
import * as model from "./model.js";
import searchView from "../view/searchView.js";
import previewView from "../view/previewView.js";
import resultView from "../view/resultView.js";
import paginationView from "../view/paginationView.js";
const controlSearch = async function () {
  try {
    //skeleton loading
    previewView._renderSkeleton();
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
  //find current hotel when user click preview
  model.findCurHotel();
  //load hotel details using on hotel id
  await model.loadCurHotelFacAndReviews();
  await model.loadCurHotelNearbyandQA();
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
  document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    return false;
  });
};
init();
