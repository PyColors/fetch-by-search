import reducer from "../productsReducer";
import * as types from "../../actions/allActions";

describe("Products reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
});
