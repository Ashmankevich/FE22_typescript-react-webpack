import { all } from 'typed-redux-saga';
import { getUserSaga } from './userSagas';

export function* userSagas() {
  yield all([getUserSaga()]);
}
