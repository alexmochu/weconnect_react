import jwt from "jsonwebtoken";

import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  SET_CURRENT_USER,
  USER_REGISTERED
} from "../types";
import api from "../api";
import setAuthToken from "../utilities/setAuthToken";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export const userRegistered = data => ({
  type: USER_REGISTERED,
  data
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    const token = user.header_access_token;
    localStorage.JWT = token;
    setAuthToken(token);
    dispatch(setCurrentUser(jwt.decode(token)));
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  api.user.logout().then(user => {
    localStorage.removeItem("JWT");
    dispatch(userLoggedOut());
    window.location = "/login";
  });
};

export const signup = data => dispatch =>
  api.user.signup(data).then(user => dispatch(userRegistered(user)));
