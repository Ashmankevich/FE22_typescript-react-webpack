import { call, put, takeEvery } from 'typed-redux-saga';
import {
  AllPostFetch,
  AllPostSuccess,
  AllPostFailure,
} from './allPostPageSlice';
import { postsFetch } from './api';

export function* allPostPageSaga() {
  yield takeEvery(AllPostFetch, function* () {
    try {
      const result = yield* call(postsFetch);
      yield* put(AllPostSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(AllPostFailure());
      }
    }
  });
}
