import {combineReducers} from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import productReducer from './product/productSlice';
import userReducer from './user/userSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  user: userReducer,
});

export default rootReducer;
