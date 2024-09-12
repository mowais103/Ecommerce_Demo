import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {FavItem} from '../../../types';

const initialState: FavItem = {
  favItems: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    toggleFavItem: (state, {payload}) => {
      const index = state.favItems.findIndex(item => item?.id === payload.id);
      if (index === -1) {
        state.favItems.push({...payload});
      } else {
        state.favItems.splice(index, 1);
      }
    },
  },
});

export const selectAllFavItems = (state: RootState) => state.product.favItems;

const productReducer = productSlice.reducer;

export const {toggleFavItem} = productSlice.actions;
export default productReducer;
