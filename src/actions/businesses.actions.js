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

export const businessEdited = data => ({
  type: BUSINESS_UPDATED,
  data
});

export const messageCleared = () => ({
  type: MESSAGE_CLEARED
});

export const fetchBusinesses = () => dispatch => {
  dispatch(requestStarted());
  return client
    .get("/api/v2/business/all")
    .then(res => {
      console.log(res);
      dispatch(businessesFetched(res.data.businesses));
    })
    .catch(error => dispatch(requestFailed("something went wrong")));
};
