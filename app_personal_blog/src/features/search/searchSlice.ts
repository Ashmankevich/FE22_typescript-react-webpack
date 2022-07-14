import { createSlice } from '@reduxjs/toolkit';
import { SearchPayload, SearchResponse } from './types';

const searchSlice = createSlice({
  name: 'search',
  initialState: { response: null } as { response: SearchResponse | null },
  reducers: {
    search(state, action: { payload: SearchPayload }) {},
    searchSuccess(state, action: { payload: SearchResponse }) {
      state.response = action.payload;
    },
    searchFailure(state, action: { payload: string }) {},
    reset(state) {
      state.response = null;
    },
  },
});

export const { actions } = searchSlice;
export default searchSlice.reducer;
