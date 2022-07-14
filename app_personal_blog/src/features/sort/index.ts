import { all } from '@redux-saga/core/effects';
import { sortSaga } from './sortSagas';
import { actions } from './sortSlice';

export { SortBar } from './sort-bar/SortBar';
export { default } from './sortSlice';
export const { getSortFetch, getSortSuccess, getSortFailure } = actions;
export function* sortPostsSaga() {
  yield all([sortSaga()]);
}
