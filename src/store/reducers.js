import { combineReducers } from "redux";

import PhotoReducer from "./photos/reducer";

const rootReducer = combineReducers({
  PhotoReducer,
});

export default rootReducer;
