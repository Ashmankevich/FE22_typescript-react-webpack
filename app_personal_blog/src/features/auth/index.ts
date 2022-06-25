import { all } from 'redux-saga/effects';
import {
  activateSaga,
  loginSaga,
  loginSuccessSaga,
  refreshSaga,
  refreshSuccessSaga,
  registerSaga,
} from './authSagas';

export function* authSagas() {
  yield all([
    registerSaga(),
    activateSaga(),
    loginSuccessSaga(),
    loginSaga(),
    refreshSaga(),
    refreshSuccessSaga(),
  ]);
}
