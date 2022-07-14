import { createSlice } from '@reduxjs/toolkit';
import { UserResponse } from './types';

const userSlice = createSlice({
  name: 'user',
  initialState: { userName: 'UserName' } as { userName: string },
  reducers: {
    getUser() {},
    getUserSuccess(state, action: { payload: UserResponse }) {
      state.userName = action.payload.username;
    },
    getUserFailure(state, action: { payload: string }) {},
  },
});

export const { getUser, getUserSuccess, getUserFailure } = userSlice.actions;
export default userSlice.reducer;
