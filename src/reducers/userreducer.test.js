import user from "./user";

describe("user reducer", () => {
  it("should return the initial state", () => {
    expect(user(undefined, {})).toEqual({});
  });
});
