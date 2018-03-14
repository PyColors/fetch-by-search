import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import products from './productsReducer';

const rootReducer = combineReducers({
  categories,
  products
});

export default rootReducer;
