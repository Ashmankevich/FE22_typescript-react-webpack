import { all } from 'redux-saga/effects';
import { postSaga } from './postSagas';

export function* postSagas() {
  yield all([postSaga()]);
}
