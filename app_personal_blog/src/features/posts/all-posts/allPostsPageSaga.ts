import { call, put, takeLatest } from 'typed-redux-saga';
import {
  getAllPostsFetch,
  getAllPostsSuccess,
  getAllPostsFailure,
} from './allPostsPageSlice';
import { postsFetch } from './api';

export function* allPostsPageSaga() {
  yield takeLatest(getAllPostsFetch, function* () {
    try {
      const result12J2 = yield* call(postsFetch);
      console.log(result12J2);
      yield* put(getAllPostsSuccess(result12J2));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getAllPostsFailure(e.message));
      }
    }
  });
}
