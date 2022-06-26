import { call, put, takeEvery } from 'typed-redux-saga';
import {
  getAllPostsFetch,
  getAllPostsSuccess,
  getAllPostsFailure,
} from './allPostPageSlice';
import { postsFetch } from './api';

export function* allPostPageSaga() {
  yield takeEvery(getAllPostsFetch, function* () {
    try {
      const resultPosts = yield* call(postsFetch);
      yield* put(getAllPostsSuccess(resultPosts));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getAllPostsFailure());
      }
    }
  });
}
