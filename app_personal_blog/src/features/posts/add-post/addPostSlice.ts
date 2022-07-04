import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../../types/post';
import { AddPostData } from './types';

const addPostSlice = createSlice({
  name: 'addPost',
  initialState: {} as { post?: Post },
  reducers: {
    addPost(state, action: { payload: AddPostData }) {},
    addPostSuccess(state, action: { payload: Post }) {
      state.post = action.payload;
    },
    addPostFailure(state, action: { payload: string }) {},
  },
});

export const { actions } = addPostSlice;
export default addPostSlice.reducer;
