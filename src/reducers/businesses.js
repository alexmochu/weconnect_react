import { BUSINESSES_FETCHED, MY_BUSINESSES_FETCHED } from "../types";

export default (businesses = [], action) => {
  switch (action.type) {
    case BUSINESSES_FETCHED:
      return action.businesses;
    case MY_BUSINESSES_FETCHED:
      return action.businesses;
    default:
      return businesses;
  }
};
