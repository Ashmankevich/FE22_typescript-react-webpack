import { createSlice } from '@reduxjs/toolkit';
import { SortPayload, SortResponse } from './types';

export const sortSlice = createSlice({
  name: 'sort',
  initialState: { response: null } as { response: SortResponse | null },
  reducers: {
    getSortFetch(state, action: { payload: SortPayload }) {},
    getSortSuccess(state, action: { payload: SortResponse }) {
      state.response = action.payload;
    },
    getSortFailure(state, action: { payload: string }) {
      console.error('sortFailure', action.payload);
    },
  },
});

export const { actions } = sortSlice;
export default sortSlice.reducer;
