import { BUSINESSES_FETCHED, MY_BUSINESSES_FETCHED } from "../types";

export default (businessess = [], action) => {
  switch (action.type) {
    case BUSINESSES_FETCHED:
      return action.businessess;
    case MY_BUSINESSES_FETCHED:
      return action.businessess;
    default:
      return businessess;
  }
};
