import { createSlice } from '@reduxjs/toolkit';
import { UserResponse } from './types';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    getUser() {},
    getUserSuccess(state, action: { payload: UserResponse }) {},
    getUserFailure(state, action: { payload: string }) {},
  },
});

export const { getUser, getUserSuccess, getUserFailure } = userSlice.actions;
export default userSlice.reducer;
