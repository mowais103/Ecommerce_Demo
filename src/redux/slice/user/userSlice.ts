import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../../types';

const initialState: User = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, {payload}) => {
      const {id, email, firstName, lastName, phoneNumber} = payload;
      state.id = id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.phoneNumber = phoneNumber;
    },
  },
});

const userReducer = userSlice.reducer;

export const {setCurrentUser} = userSlice.actions;
export default userReducer;
