import { all, fork } from "redux-saga/effects";

import PhotosSaga from "./photos/saga";

export default function* rootSaga() {
  yield all([fork(PhotosSaga)]);
}
