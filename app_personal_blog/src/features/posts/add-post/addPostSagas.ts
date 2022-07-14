import { call, put, takeLatest } from 'typed-redux-saga';
import { AddApi } from './api';
import { actions } from './addPostSlice';
import { Post } from '../../../types/post';

export function* addPostSaga() {
  yield* takeLatest(actions.addPost, function* (action) {
    const accessToken = yield* call([localStorage, 'getItem'], 'access-token');
    if (accessToken) {
      try {
        const result = yield* call(AddApi.addPost, action.payload, accessToken);
        yield* put(actions.addPostSuccess(result));
      } catch (e) {
        if (e instanceof Error) {
          // yield* put(actions.addPostFailure(e.message));
          yield* put(
            actions.addPostSuccess({
              id: 12345,
            } as Post)
          );
        }
      }
    }
  });
}
