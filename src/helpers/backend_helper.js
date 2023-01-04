import { get } from "./api_helper";
import * as url from "./url_helper";

//List of Photo
export const getPhotos = ({ page = 1, keyword = "" }) =>
  keyword !== ""
  ? get(`${url.GET_PHOTOS_BY_KEYWORD}?order_by=popular&per_page=10&page=${page}&query=${keyword}`)
  : get(`${url.GET_PHOTOS}?order_by=popular&per_page=10&page=${page}&query=${keyword}`);

//Photo Details
export const getPhotoDetails = ({ photoId }) =>
  get(`${url.GET_PHOTOS}/${photoId}/`);
