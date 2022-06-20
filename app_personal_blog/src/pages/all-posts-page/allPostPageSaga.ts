import { call, put, takeEvery } from 'redux-saga/effects';
import {
  AllPostFetch,
  AllPostSuccess,
  AllPostFailure,
} from './AllPostPageSlice';
import { getPostsFetch } from './api';

export function* allPostPageSaga() {
  yield takeEvery(getPostsFetch, function* () {
    try {
      const result = yield* call(AllPostFetch);
      yield* put(AllPostSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(AllPostFailure(e.message));
      }
    }
  });
}
