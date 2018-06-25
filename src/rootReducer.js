import { combineReducers } from "redux";

import user from "./reducers/user";
import auth from "./reducers/auth";
import loading from "./reducers/loading.reducer";
import error from "./reducers/error.reducer";
import businesses from "./reducers/businesses";

export default combineReducers({
  user,
  auth,
  error,
  loading,
  businesses
});
