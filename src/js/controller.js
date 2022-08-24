import { API_KEY, options } from "./config.js";
import * as model from "./model.js";
import searchView from "../view/searchView.js";
import previewView from "../view/previewView.js";
import resultView from "../view/resultView.js";
import paginationView from "../view/paginationView.js";
import { now } from "./helper.js";
const controlSearch = async function () {
  try {
    //skeleton loading
    previewView._renderSkeleton();
    await model.getSearchResult();

    //render preview
    previewView._render(model.getResultPerPage(model.state.page));

    //pagination
    if (!model.state.search.results[0]) return;
    paginationView._render(model.state.page, model.state);
  } catch (err) {
    alert(err);
    console.log(err);
  }
};

const controlResult = async function () {
  try {
    resultView.renderSpinner();
    //find current hotel when user click preview
    model.findCurHotel();
    //load hotel details using on hotel id
    await model.loadCurHotelPhotos();
    await model.loadCurHotelFacAndReviews();
    await model.loadCurHotelNearbyandQA();
    //display data
    resultView.render(model.state.curHotel);
    resultView._toggleModal();
    // document
    //   .querySelector(".details__FAQ__item--Q")
    //   .addEventListener("click", (e) => {
    //     e.preventDefault();
    //   });
  } catch (error) {
    alert(error);
  }
};

const controlPagination = (goTo) => {
  //update preview list
  previewView.render(model.getResultPerPage(goTo));
  //update button
  paginationView.render(goTo, model.state);
};

const init = () => {
  searchView.addHandler(controlSearch);
  previewView._addHandler(controlResult);
  paginationView._addHandler(controlPagination);
};
init();
