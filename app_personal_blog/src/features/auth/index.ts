import {
  activateSaga,
  loginSaga,
  loginSuccessSaga,
  registerSaga,
} from './authSagas';

export function* authSagas() {
  yield [registerSaga(), activateSaga(), loginSuccessSaga(), loginSaga()];
}
