import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../../types/post';

const AllPostsSlice = createSlice({
  name: 'AllPosts',
  initialState: {
    posts: null,
    isLoading: false,
  } as {
    posts: Post[] | null;
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
    getAllPostsFailure: (state, action) => {
      state.isLoading = false;
      console.error('RegisterFailure', action.payload);
    },
  },
});

export const { getAllPostsFetch, getAllPostsSuccess, getAllPostsFailure } =
  AllPostsSlice.actions;
export default AllPostsSlice.reducer;
