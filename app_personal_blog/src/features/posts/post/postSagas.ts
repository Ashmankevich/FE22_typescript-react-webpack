import { call, put, takeEvery } from 'typed-redux-saga';
import { getPost, getPostSuccess, getPostFailure } from './postSlice';
import { PostApi } from './api';

export function* postSaga() {
  yield takeEvery(getPost, function* (action) {
    try {
      const result = yield* call(PostApi.getPost, action.payload);
      yield* put(getPostSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getPostFailure());
      }
    }
  });
}
