import { takeLatest, call, put } from 'typed-redux-saga';
import { UserApi } from './api';
import { getUserFailure, getUserSuccess, getUser } from './userSlice';

export function* getUserSaga() {
  yield takeLatest(getUser, function* () {
    const accessToken = yield* call([localStorage, 'getItem'], 'access-token');
    if (accessToken) {
      try {
        const responce = yield* call(UserApi.getInfo, { accessToken });
        yield* put(getUserSuccess(responce));
      } catch (e) {
        if (e instanceof Error) {
          yield* put(getUserFailure(e.message));
        }
      }
    }
  });
}
