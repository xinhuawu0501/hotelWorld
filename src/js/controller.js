import * as model from "./model.js";
import searchView from "../view/searchView.js";
import previewView from "../view/previewView.js";
import resultView from "../view/resultView.js";
import paginationView from "../view/paginationView.js";
import navView from "../view/navView.js";
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
  } catch (error) {
    alert(error);
  }
};

const controlPagination = (goTo) => {
  //update preview list
  previewView._render(model.getResultPerPage(goTo));
  //update button
  paginationView._render(goTo, model.state);
};

const controlBookMark = (target) => {
  if (!target) return;
  //bookmark hotel
  if (target.classList.contains("btn-bookmark-fill")) {
    model.state.curHotel.isBookmarked = true;
    model.state.bookmark.push(model.state.curHotel);
    model.setLocalStorage(model.state.bookmark);
  }
  //unbookmark
  else if (target.classList.contains("btn-bookmark-empty")) {
    model.state.curHotel.isBookmarked = false;
    model.state.bookmark = model.state.bookmark.filter((data) => {
      return data.hotel_id != model.state.curId;
    });
    model.setLocalStorage(model.state.bookmark);
  }
  //update bookmark modal
  navView._renderModal(model.state.bookmark);
};

const controlRenderBookmark = (targetHotel) => {
  resultView.render(targetHotel);
  model.state.curId = targetHotel.hotel_id;
};

const init = () => {
  searchView.addHandler(controlSearch);
  previewView._addHandler(controlResult);
  paginationView._addHandler(controlPagination);
  resultView._addBookmarkHandler(controlBookMark);
  //get bookmarked hotel from local storage
  model.getLocalStorage();
  navView._renderModal(model.state.bookmark);
  resultView._toggleModal();

  if (!model.state.bookmark) return;
  navView._addHandler(controlRenderBookmark);
};
init();
