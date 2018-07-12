import client from "./../client";
import {
  BUSINESSES_FETCHED,
  BUSINESS_CREATED,
  BUSINESS_FETCHED,
  MY_BUSINESSES_FETCHED,
  BUSINESS_DELETED,
  BUSINESS_UPDATED,
  MESSAGE_CLEARED,
  REVIEWS_FETCHED,
  REVIEW_CREATED
} from "../types";
import { requestStarted, requestFailed } from "./api.actions";

export const businessesFetched = businesses => ({
  type: BUSINESSES_FETCHED,
  businesses
});

export const reviewsFetched = reviews => ({
  type: REVIEWS_FETCHED,
  reviews
});

export const mybusinessesFetched = businesses => ({
  type: MY_BUSINESSES_FETCHED,
  businesses
});

export const businessCreated = data => ({
  type: BUSINESS_CREATED,
  data
});

export const reviewCreated = data => ({
  type: REVIEW_CREATED,
  data
});

export const businessFetched = business => ({
  type: BUSINESS_FETCHED,
  business
});

export const businessDeleted = () => ({
  type: BUSINESS_DELETED
});

export const businessEdited = data => ({
  type: BUSINESS_UPDATED,
  data
});

export const messageCleared = () => ({
  type: MESSAGE_CLEARED
});

// export const clearMessage = () => dispatch => {
//     dispatch(requestStarted());
// };

export const fetchBusiness = businessId => dispatch => {
  dispatch(requestStarted());
  return client
    .get(`/api/v2/business/${businessId}`)
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

export const fetchReviews = businessID => dispatch => {
  dispatch(requestStarted());
  return client
    .get(`/api/v2/${businessID}/reviews`)
    .then(res => {
      console.log("gfdsjdhf", res.data.reviews);
      dispatch(reviewsFetched(res.data.reviews));
    })
    .catch(error => dispatch(requestFailed("something went wrong")));
};

export const fetchmyBusinesses = userId => dispatch => {
  dispatch(requestStarted());
  return client
    .get(`/api/v2/${userId}/businesses`)
    .then(res => {
      dispatch(mybusinessesFetched(res.data.businesses));
    })
    .catch(error => dispatch(requestFailed("something went wrong")));
};

export const createBusiness = business => dispatch => {
  dispatch(requestStarted());
  return client.post("/api/v2/business", { business }).then(res => {
    console.log("business data", business);
    dispatch(businessCreated(res.data.business));
    return res.data.business;
  });
};

//export function createBusiness(business) {
//  return dispatch =>
//   client
//    .post("/api/v2/business", { business })
//   .then(res => dispatch(businessCreated));
//}

export const deleteBusiness = businessId => dispatch => {
  dispatch(requestStarted());
  return client
    .delete(`/api/v2/business/${businessId}`)
    .then(res => {
      dispatch(businessDeleted());
    })
    .catch(error => dispatch(requestFailed("something went wrong")));
};

export const editBusiness = (businessId, data) => dispatch => {
  dispatch(requestStarted());
  return client
    .put(`/api/v2/business/${businessId}`, data)
    .then(res => {
      dispatch(businessEdited(data));
    })
    .catch(error => dispatch(requestFailed("something went wrong")));
};

export const createReview = (businessID, data) => dispatch => {
  dispatch(requestStarted());
  return client
    .post(`/api/v2/${businessID}/review`, data)
    .then(res => {
      dispatch(reviewCreated(data));
    })
    .catch(error => dispatch(requestFailed("something went wrong")));
};
