import * as actions from "./businesses.actions";
import * as types from "../types";

describe("actions", () => {
  it("fetches all events", () => {
    const businesses = {};
    const expectedAction = {
      type: types.BUSINESSES_FETCHED,
      businesses
    };
    expect(actions.businessesFetched(businesses)).toEqual(expectedAction);
  });
  it("creates an event", () => {
    const data = {};
    const expectedAction = {
      type: types.BUSINESS_CREATED,
      data
    };
    expect(actions.businessCreated(data)).toEqual(expectedAction);
  });
});
