import { all } from 'redux-saga/effects';
import { myPostsSaga } from './myPostsSagas';
export { default } from './myPostsPageSlice';

export function* myPostsSagas() {
  yield all([myPostsSaga()]);
}
