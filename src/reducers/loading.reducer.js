import {
  REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCESS,
  BUSINESSES_FETCHED,
  BUSINESS_FETCHED,
  REVIEWS_FETCHED,
  MY_BUSINESSES_FETCHED
} from "../types";

export default (loading = false, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return true;
    case REQUEST_FAILED:
    case REQUEST_SUCCESS:
    case REVIEWS_FETCHED:
    case BUSINESSES_FETCHED:
    case MY_BUSINESSES_FETCHED:
      return false;
    case BUSINESS_FETCHED:
      return false;
    default:
      return loading;
  }
};
