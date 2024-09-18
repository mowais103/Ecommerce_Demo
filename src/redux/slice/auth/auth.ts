import {createSlice} from '@reduxjs/toolkit';
import {Auth} from '../../../types';

const initialState: Auth = {
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, {payload}) => {
      const [accessToken] = payload;
      state.accessToken = accessToken;
    },
  },
});

const authReducer = authSlice.reducer;

export const {setAccessToken} = authSlice.actions;
export default authReducer;
