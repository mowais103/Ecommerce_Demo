import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  errorMessage: '' || undefined,
};

const errorSlice = createSlice({
  name: 'error',
  initialState: initialState,
  reducers: {
    setErrorMessage: (state, {payload}) => {
      state.errorMessage = payload;
    },
    resetErrorMessage: state => {
      state.errorMessage = undefined;
    },
  },
});

const errorReducer = errorSlice.reducer;

export const {setErrorMessage, resetErrorMessage} = errorSlice.actions;
export default errorReducer;
