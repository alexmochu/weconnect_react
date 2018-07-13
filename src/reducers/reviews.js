import { REVIEWS_FETCHED } from "../types";

const initialState = {
  reviews: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REVIEWS_FETCHED:
      return {
        state,
        reviews: action.reviews
      };
    default:
      return state;
  }
};
