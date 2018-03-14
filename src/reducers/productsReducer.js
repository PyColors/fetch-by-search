import initialState from "./initialState";
import {
  RECEIVE_PRODUCTS,
  FAILED_RECIEVE_PRODUCTS
} from "../actions/allActions";

export default function categories(state = initialState.categories, action) {
  let newState;
  switch (action.type) {
    
    case RECEIVE_PRODUCTS:
      newState = action.products;
      return newState;

    case FAILED_RECIEVE_PRODUCTS:
      return newState;

    default:
      return state;
  }
}
