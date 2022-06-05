import { configureStore } from '@reduxjs/toolkit';
import selectedPostReducer from './features/posts/SelectedPostSlice';

export const store = configureStore({
   reducer: {
      selectedPost: selectedPostReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch