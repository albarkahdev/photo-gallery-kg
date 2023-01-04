import { takeLatest, put, call } from "redux-saga/effects";

import { GET_MORE_PHOTOS, GET_PHOTOS, GET_PHOTO_DETAILS } from "./actionTypes";

import {
  getPhotosSuccess,
  getPhotosFail,
  getMorePhotosSuccess,
  getMorePhotosFail,
  getPhotoDetailsSuccess,
  getPhotoDetailsFail,
  setCurrentPage,
  setCurrentSearchKeyword,
} from "./actions";

import { getPhotos, getPhotoDetails } from "../../helpers/backend_helper";

function* onGetPhotos({ payload: { page, keyword } }) {
  try {
    const response = yield call(getPhotos, { page, keyword });
    yield put(getPhotosSuccess(response.data.results || response.data));
    yield put(setCurrentPage(page));
    yield put(setCurrentSearchKeyword(keyword));
  } catch (error) {
    yield put(getPhotosFail(error.response));
  }
};

function* onGetMorePhotos({ payload: { page, keyword } }) {
  try {
    const response = yield call(getPhotos, { page, keyword });
    yield put(getMorePhotosSuccess(response.data.results || response.data));
    yield put(setCurrentPage(page));
    yield put(setCurrentSearchKeyword(keyword));
  } catch (error) {
    yield put(getMorePhotosFail(error.response));
  }
};

function* onGetPhotoDetails({ payload: photoId }) {
  try {
    const response = yield call(getPhotoDetails, { photoId });
    yield put(getPhotoDetailsSuccess(response.data));
  } catch (error) {
    yield put(getPhotoDetailsFail(error.response));
  }
};

function* CartSaga() {
  yield takeLatest(GET_PHOTOS, onGetPhotos);
  yield takeLatest(GET_MORE_PHOTOS, onGetMorePhotos);
  yield takeLatest(GET_PHOTO_DETAILS, onGetPhotoDetails);
};

export default CartSaga;
