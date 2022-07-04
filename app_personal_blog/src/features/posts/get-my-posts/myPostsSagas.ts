import { call, put, takeLatest } from 'typed-redux-saga';
import { actions } from './myPostsPageSlice';
import { MyPostsApi } from './api';

export function* myPostsSaga() {
  yield takeLatest(actions.getMyPostsFetch, function* () {
    const accessToken = yield* call([localStorage, 'getItem'], 'access-token');
    if (accessToken) {
      try {
        const response = yield* call(MyPostsApi.MyPostsFetch, { accessToken });
        yield* put(actions.getMyPostsSuccess(response));
      } catch (e) {
        if (e instanceof Error) {
          yield* put(actions.getMyPostsFailure(e.message));
        }
      }
    }
  });
}
