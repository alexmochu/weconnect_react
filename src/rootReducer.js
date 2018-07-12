import { combineReducers } from "redux";

import user from "./reducers/user";
import auth from "./reducers/auth";
import loading from "./reducers/loading.reducer";
import error from "./reducers/error.reducer";
import businesses from "./reducers/businesses";
import business from "./reducers/business.reducer";
import reviews from "./reducers/reviews";

export default combineReducers({
  user,
  auth,
  error,
  loading,
  businesses,
  business,
  reviews
});
