import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {CartItem} from '../../../types/reducerTypes';

const initialState: CartItem = {
  items: [],
  totalQty: 0,
};

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
      state.totalQty = state.items.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
    },
  },
});

const cartReducer = cartSlice.reducer;

export const selectAllItems = (state: RootState) => state.cart.items;

export const {itemAdded} = cartSlice.actions;
export default cartReducer;
