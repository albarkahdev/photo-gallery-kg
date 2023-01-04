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

const initialState = {
  photos: [],
  photo: {},
  currentPage: 1,
  currentSearchKeyword: '',
  loadingPhotos: false,
  loadingMorePhotos: false,
  loadingPhotoDetails: false,
  error: {
    message: "",
  },
};

const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        loadingPhotos: true
      };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        loadingPhotos: false,
        photos: action.payload,
      };
    case GET_PHOTOS_FAIL:
      return {
        ...state,
        loadingPhotos: false,
        error: {
          message: "Error get list of photo",
        },
      };
    case GET_MORE_PHOTOS:
      return {
        ...state,
        loadingMorePhotos: true
      };
    case GET_MORE_PHOTOS_SUCCESS:
      return {
        ...state,
        loadingMorePhotos: false,
        photos: [...state.photos, ...action.payload], 
      };
    case GET_MORE_PHOTOS_FAIL:
      return {
        ...state,
        loadingMorePhotos: false,
        error: {
          message: "Error get more list of photo",
        },
      };
    case GET_PHOTO_DETAILS:
      return {
        ...state,
        loadingPhotoDetails: true
      };
    case GET_PHOTO_DETAILS_SUCCESS:
      return {
        ...state,
        loadingPhotoDetails: false,
        photo: action.payload, 
      };
    case GET_PHOTO_DETAILS_FAIL:
      return {
        ...state,
        loadingPhotoDetails: false,
        error: {
          message: "Error get detail of photo",
        },
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_CURRENT_SEARCH_KEYWORD:
      return {
        ...state,
        currentSearchKeyword: action.payload,
      };

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PhotoReducer;