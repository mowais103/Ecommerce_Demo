import {combineReducers} from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import productReducer from './product/productSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;
