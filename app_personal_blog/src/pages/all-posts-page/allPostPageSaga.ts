import { call, put, takeEvery } from 'typed-redux-saga/dist';
import {
  AllPostFetch,
  AllPostSuccess,
  AllPostFailure,
} from './allPostPageSlice';
import { PostsFetch } from './api';

export function* allPostPageSaga() {
  yield takeEvery(AllPostFetch, function* () {
    try {
      const result = yield* call(PostsFetch);
      yield* put(AllPostSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(AllPostFailure());
      }
    }
  });
}
