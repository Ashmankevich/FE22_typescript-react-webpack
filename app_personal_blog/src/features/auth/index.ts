import { all } from 'typed-redux-saga';
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
