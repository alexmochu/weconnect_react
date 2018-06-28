import client from "./../client";
import {
  BUSINESSES_FETCHED,
  BUSINESS_CREATED,
  BUSINESS_FETCHED,
  MY_BUSINESSES_FETCHED,
  BUSINESS_DELETED,
  BUSINESS_UPDATED,
  MESSAGE_CLEARED
} from "../types";
import { requestStarted, requestFailed } from "./api.actions";

export const businessesFetched = businesses => ({
  type: BUSINESSES_FETCHED,
  businesses
});

export const mybusinessesFetched = businesses => ({
  type: MY_BUSINESSES_FETCHED,
  businesses
});

export const businessCreated = data => ({
  type: BUSINESS_CREATED,
  data
});

export const businessFetched = business => ({
  type: BUSINESS_FETCHED,
  business
});

export const businessDeleted = () => ({
  type: BUSINESS_DELETED
});

export const businessEdited = business_item => ({
  type: BUSINESS_UPDATED,
  business_item
});

export const messageCleared = () => ({
  type: MESSAGE_CLEARED
});

// export const clearMessage = () => dispatch => {
//     dispatch(requestStarted());
// };

export const fetchBusiness = business_id => dispatch => {
  dispatch(requestStarted());
  return client
    .get(`/api/v2/business/${business_id}`)
    .then(res => {
      dispatch(businessFetched(res.data.business));
    })
    .catch(error => dispatch(requestFailed("something went wrong")));
};

export const fetchBusinesses = () => dispatch => {
  dispatch(requestStarted());
  return client
    .get("/api/v2/business/all")
    .then(res => {
      dispatch(businessesFetched(res.data.businesses));
    })
    .catch(error => dispatch(requestFailed("something went wrong")));
};

// export const createBusiness = business => dispatch => {
//   dispatch(requestStarted());
//   return client.post("/api/v2/business", { business }).then(res => {
//     console.log("business data", business);
//     dispatch(businessCreated(res.data.business));
//     return res.data.business_item;
//   });
// };

export function createBusiness(business) {
  return dispatch =>
    client
      .post("/api/v2/business", { business })
      .then(res => dispatch(businessCreated));
}
