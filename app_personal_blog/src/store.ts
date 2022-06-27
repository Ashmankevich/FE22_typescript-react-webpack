import { configureStore } from '@reduxjs/toolkit';
import selectedPostReducer from './features/posts/selected-post/selectedPostSlice';
import likeDislikeReducer from './features/posts/like-dislike/likeDislikeSlice';
import markPostReducer from './features/posts/mark-post/markPostSlice';
import authReducer from './features/auth/authSlice';
import allPostReducer from './features/posts/all-post/allPostPageSlice';
import createSagaMiddleware from 'redux-saga';
import userReducer from './features/user/userSlice';
import { rootSaga } from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    selectedPost: selectedPostReducer, //поле в сторе, где хранятся данные
    likeDislike: likeDislikeReducer,
    markPost: markPostReducer,
    auth: authReducer,
    allPost: allPostReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
