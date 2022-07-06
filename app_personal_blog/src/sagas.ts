import { all } from 'redux-saga/effects';
import { authSagas } from './features/auth';
import { logSetState } from './features/posts/like-dislike/likeDislikeSagas';
import { userSagas } from './features/user';
import { allPostsPageSaga } from './features/posts/all-posts/allPostsPageSaga';
import { searchSagas } from './features/search';
import { postSaga } from './features/posts/post/postSagas';
import { addPostSagas } from './features/posts/add-post';
import { sortSaga } from './features/sort/sortSagas';

export function* rootSaga() {
  yield all([
    logSetState(),
    authSagas(),
    allPostsPageSaga(),
    userSagas(),
    searchSagas(),
    postSaga(),
    addPostSagas(),
    sortSaga(),
  ]);
}
