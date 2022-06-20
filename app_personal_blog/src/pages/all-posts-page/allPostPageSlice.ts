import { createSlice } from '@reduxjs/toolkit';

const AllPostSlice = createSlice({
  name: 'AllPost',
  initialState: {
    posts: [],
    isLoading: false,
  },
  reducers: {
    AllPostFetch: (state) => {
      state.isLoading = true;
    },
    AllPostSuccess: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    AllPostFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { AllPostFetch, AllPostSuccess, AllPostFailure } =
  AllPostSlice.actions;
export default AllPostSlice.reducer;
