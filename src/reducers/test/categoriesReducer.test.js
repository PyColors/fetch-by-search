import reducer from "../productsReducer";
import * as types from "../../actions/allActions";

describe("Categories reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
});
