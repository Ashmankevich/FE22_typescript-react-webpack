import { createSlice } from '@reduxjs/toolkit';
import { postsResponse } from '../all-post/types';

const SelectedPostSlice = createSlice({
  name: 'SelectedPost',
  initialState: { id: null, isLoading: false, allPosts: [] } as {
    id: string | null | number;
    isLoading: boolean;
    allPosts: postsResponse[];
  },
  reducers: {
    setSelectedPost(state, action: { payload: string | number }) {
      state.id = action.payload;
    },
    getPostFetch: (state) => {
      state.isLoading = true;
    },
    getPostSuccess: (state, action) => {
      state.id = action.payload;
      state.isLoading = false;
    },
    getPostFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setSelectedPost, getPostFetch, getPostSuccess, getPostFailure } =
  SelectedPostSlice.actions;
export default SelectedPostSlice.reducer;
