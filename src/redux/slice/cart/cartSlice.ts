import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {CartItem} from '../../../types/reducerTypes';
import {Product} from '../../../types/apiDataTypes';

const initialState: CartItem = {
  items: [],
  totalQty: 0,
  totalPrice: 0,
};

const calculateTotalQty = (items: Product[]) =>
  items.reduce((acc, item) => acc + item.qty, 0);

const calculateTotalPrice = (items: Product[]) =>
  items.reduce((acc, item) => acc + item.price * item.qty, 0.0);

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    itemAdded: (state, {payload}) => {
      const index = state.items.findIndex(item => item.id === payload.id);
      if (index === -1) {
        state.items.unshift({...payload, qty: 1});
      } else {
        state.items[index].qty += 1;
      }

      state.totalQty = calculateTotalQty(state.items);
      state.totalPrice = calculateTotalPrice(state.items);
    },

    itemRemoved: (state, {payload}) => {
      const index = state.items.findIndex(item => item.id === payload.id);
      const itemQty = state.items[index].qty;
      if (itemQty === 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].qty -= 1;
      }

      state.totalQty = calculateTotalQty(state.items);
      state.totalPrice = calculateTotalPrice(state.items);
    },
  },
});

export const selectAllItems = (state: RootState) => state.cart.items;

const cartReducer = cartSlice.reducer;

export const {itemAdded, itemRemoved} = cartSlice.actions;
export default cartReducer;
