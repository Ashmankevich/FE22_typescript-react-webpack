import { createSlice } from '@reduxjs/toolkit';
import { postsResponse } from './types';

const AllPostSlice = createSlice({
  name: 'AllPost',
  initialState: {
    posts: [],
    isLoading: false,
  } as {
    posts: postsResponse[];
    isLoading: boolean;
  },
  reducers: {
    getAllPostsFetch: (state) => {
      state.isLoading = true;
    },
    getAllPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getAllPostsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getAllPostsFetch, getAllPostsSuccess, getAllPostsFailure } =
  AllPostSlice.actions;
export default AllPostSlice.reducer;
