import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../../types/post';

const MyPostsSlice = createSlice({
  name: 'MyPosts',
  initialState: {
    myPosts: [],
    isLoading: false,
  } as {
    myPosts: Post[];
    isLoading: boolean;
  },
  reducers: {
    getMyPostsFetch: (state) => {
      state.isLoading = true;
    },
    getMyPostsSuccess: (state, action) => {
      state.myPosts = action.payload;
      state.isLoading = false;
    },
    getMyPostsFailure: (state, action) => {
      state.isLoading = false;
      console.error('RegisterFailure', action.payload);
    },
  },
});

export const { actions } = MyPostsSlice;
export default MyPostsSlice.reducer;
