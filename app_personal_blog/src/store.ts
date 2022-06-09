import { configureStore } from '@reduxjs/toolkit';
import selectedPostReducer from './features/posts/SelectedPostSlice';
import likeDislikeReducer from './features/posts/like-dislike/likeDislikeSlice';

export const store = configureStore({
   reducer: {
      selectedPost: selectedPostReducer,
      likeDislike: likeDislikeReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch