import { all } from 'redux-saga/effects';
import { authSagas } from './features/auth';
import { logSetState } from './features/posts/like-dislike/likeDislikeSagas';
import { userSagas } from './features/user';
import { allPostsPageSaga } from './features/posts/all-posts/allPostsPageSaga';
import { searchSagas } from './features/search';
import { postSaga } from './features/posts/post/postSagas';

export function* rootSaga() {
  yield all([
    logSetState(),
    authSagas(),
    allPostsPageSaga(),
    userSagas(),
    searchSagas(),
    postSaga(),
  ]);
}
