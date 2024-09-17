import {combineReducers} from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import productReducer from './product/productSlice';
import errorReducer from './error/errorSlice';
import userReducer from './user/userSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  error: errorReducer,
  user: userReducer,
});

export default rootReducer;
