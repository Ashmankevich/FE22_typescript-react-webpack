import { configureStore } from '@reduxjs/toolkit';
import selectedPostReducer from './features/posts/SelectedPostSlice';
import likeDislikeReducer from './features/posts/like-dislike/likeDislikeSlice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
   reducer: {
      selectedPost: selectedPostReducer,
      likeDislike: likeDislikeReducer,
   },
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;