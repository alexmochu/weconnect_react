import {
  BUSINESS_CREATED,
  BUSINESS_FETCHED,
  BUSINESS_UPDATED,
  BUSINESS_DELETED,
  MESSAGE_CLEARED
} from "../types";

const initialState = {
  created: true,
  deleted: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUSINESS_CREATED:
      return { ...state, created: true };
    case BUSINESS_FETCHED:
      return { ...state, ...action.business };
    case BUSINESS_UPDATED:
      return action.data;
    case BUSINESS_DELETED:
      return { ...state, deleted: true };
    case MESSAGE_CLEARED:
      return { ...state, message: "" };
    default:
      return state;
  }
};
