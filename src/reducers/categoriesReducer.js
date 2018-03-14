import initialState from "./initialState";
import {
  RECEIVE_CATEGORIES,
  FAILED_RECIEVE_CATEGORIES
} from "../actions/allActions";

export default function categories(state = initialState.categories, action) {
  let newState;
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      newState = action.categories;
      return newState;

    case FAILED_RECIEVE_CATEGORIES:
      return newState;

    default:
      return state;
  }
}
