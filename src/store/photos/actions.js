import {
  GET_PHOTOS,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL,
  GET_MORE_PHOTOS,
  GET_MORE_PHOTOS_SUCCESS,
  GET_MORE_PHOTOS_FAIL,
  GET_PHOTO_DETAILS,
  GET_PHOTO_DETAILS_SUCCESS,
  GET_PHOTO_DETAILS_FAIL,
  SET_CURRENT_PAGE,
  SET_CURRENT_SEARCH_KEYWORD,
} from "./actionTypes";

export const getPhotos = (page, keyword = "") => {
  return {
    type: GET_PHOTOS,
    payload: {
      page,
      keyword
    },
  };
};

export const getPhotosSuccess = (posts) => {
  return {
    type: GET_PHOTOS_SUCCESS,
    payload: posts,
  };
};

export const getPhotosFail = (error) => {
  return {
    type: GET_PHOTOS_FAIL,
    payload: error,
  };
};

export const getMorePhotos = (page, keyword = "") => {
  return {
    type: GET_MORE_PHOTOS,
    payload: {
      page,
      keyword
    },
  };
};

export const getMorePhotosSuccess = (posts) => {
  return {
    type: GET_MORE_PHOTOS_SUCCESS,
    payload: posts,
  };
};

export const getMorePhotosFail = (error) => {
  return {
    type: GET_MORE_PHOTOS_FAIL,
    payload: error,
  };
};

export const getPhotoDetails = (id) => {
  return {
    type: GET_PHOTO_DETAILS,
    payload: id,
  };
};

export const getPhotoDetailsSuccess = (post) => {
  return {
    type: GET_PHOTO_DETAILS_SUCCESS,
    payload: post,
  };
};

export const getPhotoDetailsFail = (error) => {
  return {
    type: GET_PHOTO_DETAILS_FAIL,
    payload: error,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};

export const setCurrentSearchKeyword = (keyword) => {
  return {
    type: SET_CURRENT_SEARCH_KEYWORD,
    payload: keyword,
  };
};
