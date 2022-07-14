import { put, call, takeLatest } from 'typed-redux-saga';
import { SortApi } from './api';
import { actions } from './sortSlice';

export function* sortSaga() {
  yield takeLatest(actions.getSortFetch, function* (action) {
    try {
      const result = yield* call(SortApi.getSortPosts, action.payload);
      console.log(result);
      yield* put(actions.getSortSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.getSortFailure(e.message));
      }
    }
  });
}
