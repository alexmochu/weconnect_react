import * as actions from "./auth.actions";
import * as types from "../types";

describe("actions", () => {
  it("logs in a user", () => {
    const user = { auth_token: "bb5defda-c696-4427-9f21-375aa1f91efe" };
    const expectedAction = {
      type: types.USER_LOGGED_IN,
      user
    };
    expect(actions.userLoggedIn(user)).toEqual(expectedAction);
  });
  it("logs out a user", () => {
    const expectedAction = {
      type: types.USER_LOGGED_OUT
    };
    expect(actions.userLoggedOut()).toEqual(expectedAction);
  });

  it("sets the current user", () => {
    const expectedAction = {
      type: types.SET_CURRENT_USER
    };
    expect(actions.setCurrentUser()).toEqual(expectedAction);
  });
  it("registers a user", () => {
    const data = {};
    const expectedAction = {
      type: types.USER_REGISTERED,
      data
    };
    expect(actions.userRegistered(data)).toEqual(expectedAction);
  });
});
