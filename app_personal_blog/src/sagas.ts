import { all } from 'redux-saga/effects';
import { authSagas } from './features/auth';
import { logSetState } from './features/posts/like-dislike/likeDislikeSagas';
import { userSagas } from './features/user';
import { allPostPageSaga } from './features/posts/all-post/allPostPageSaga';
import { selectedPostSaga } from './features/posts/selected-post/selectedPostSaga';

export function* rootSaga() {
  yield all([
    logSetState(),
    authSagas(),
    allPostPageSaga(),
    userSagas(),
    selectedPostSaga(),
  ]);
}
