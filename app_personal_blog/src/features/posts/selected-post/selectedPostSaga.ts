import { call, put, takeEvery } from 'typed-redux-saga';
import {
  getPostFetch,
  getPostSuccess,
  getPostFailure,
} from './SelectedPostSlice';
import { selectedPostFetch } from './api';

export function* selectedPostSaga() {
  yield takeEvery(getPostFetch, function* () {
    try {
      const result1 = yield* call(selectedPostFetch);
      console.log(result1);
      yield* put(getPostSuccess(result1));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getPostFailure());
      }
    }
  });
}
