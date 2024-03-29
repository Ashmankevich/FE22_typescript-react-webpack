import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './sagas';
import selectedPostReducer from './features/posts/selected-post/selectedPostSlice';
import likeDislikeReducer from './features/posts/like-dislike/likeDislikeSlice';
import markPostReducer from './features/posts/mark-post/markPostSlice';
import authReducer from './features/auth/authSlice';
import allPostsReducer from './features/posts/all-posts/allPostsPageSlice';
import createSagaMiddleware from 'redux-saga';
import userReducer from './features/user/userSlice';
import searchReducer from './features/search';
import postReducer from './features/posts/post/postSlice';
import addPostReducer from './features/posts/add-post/addPostSlice';
import myPostsReducer from './features/posts/get-my-posts/myPostsPageSlice';
import sortReducer from './features/sort/sortSlice';
import bookSlice from './pages/home-page/bookSlice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    selectedPost: selectedPostReducer, //поле в сторе, где хранятся данные
    likeDislike: likeDislikeReducer,
    markPost: markPostReducer,
    auth: authReducer,
    allPosts: allPostsReducer,
    user: userReducer,
    search: searchReducer,
    post: postReducer,
    addPost: addPostReducer,
    myPosts: myPostsReducer,
    sort: sortReducer,
    books: bookSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
