import { all } from 'redux-saga/effects'
import { logSetState } from './features/posts/like-dislike/likeDislikeSagas'

export function* rootSaga() {
   yield all([logSetState()])
} 