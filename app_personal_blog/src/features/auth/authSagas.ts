import { put, call, takeLatest } from 'typed-redux-saga';
import { AuthApi } from './api';
import {
  activate,
  activateFailure,
  activateSuccess,
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess,
} from './authSlice';

export function* registerSaga() {
  yield takeLatest(register, function* (action) {
    try {
      const result = yield* call(AuthApi.register, action.payload);
      yield* put(registerSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(registerFailure(e.message));
      }
    }
  });
}

export function* activateSaga() {
  yield takeLatest(activate, function* (action) {
    try {
      const isActivated = yield* call(AuthApi.isActivated);
      if (!isActivated) {
        const result = yield* call(AuthApi.activate, action.payload);
        console.log(result);
      }
      yield* put(activateSuccess());
    } catch (e) {
      yield* put(activateFailure());
    }
  });
}

export function* loginSaga() {
  yield takeLatest(login, function* (action) {
    try {
      const result = yield* call(AuthApi.login, action.payload);
      yield* put(loginSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(loginFailure(e.message));
      }
    }
  });
}

export function* loginSuccessSaga() {
  yield takeLatest(loginSuccess, function* (action) {
    yield* call(
      [localStorage, 'setItem'],
      'access-token',
      action.payload.access
    );
    yield* call(
      [localStorage, 'setItem'],
      'refresh-token',
      action.payload.refresh
    );
  });
}
