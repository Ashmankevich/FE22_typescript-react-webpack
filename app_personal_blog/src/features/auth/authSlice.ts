import { createSlice } from '@reduxjs/toolkit';
import {
  ActivatePayload,
  LoginPayload,
  LoginResponse,
  RefreshResponse,
  RegisterPayload,
  RegisterResponce,
} from './types';

const authSlice = createSlice({
  name: 'auth',
  initialState: {} as { tokens?: LoginResponse },
  reducers: {
    register(state, action: { payload: RegisterPayload }) {},
    registerSuccess(state, action: { payload: RegisterResponce }) {},
    registerFailure(state, action: { payload: string }) {
      console.error(registerFailure, action.payload);
    },
    activate(state, action: { payload: ActivatePayload }) {},
    activateSuccess() {},
    activateFailure() {},
    login(state, action: { payload: LoginPayload }) {},
    loginSuccess(state, action: { payload: LoginResponse }) {
      state.tokens = action.payload;
    },
    loginFailure(state, action: { payload: string }) {
      console.error('loginFailure', action.payload);
    },
    refresh() {},
    refreshSuccess(state, action: { payload: RefreshResponse }) {},
    refreshFailure(state, action: { payload: string }) {},
  },
});

export const {
  register,
  registerSuccess,
  registerFailure,
  activate,
  activateSuccess,
  activateFailure,
  login,
  loginSuccess,
  loginFailure,
  refresh,
  refreshSuccess,
  refreshFailure,
} = authSlice.actions;
export default authSlice.reducer;
