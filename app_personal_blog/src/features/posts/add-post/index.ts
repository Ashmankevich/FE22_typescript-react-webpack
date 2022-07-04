import { actions } from './addPostSlice';
import { all } from 'redux-saga/effects';
import { addPostSaga } from './addPostSagas';

export { default } from './addPostSlice';
export { Form as AddPostForm } from './Form';

export const { addPost } = actions;

export function* addPostSagas() {
  yield all([addPostSaga()]);
}
