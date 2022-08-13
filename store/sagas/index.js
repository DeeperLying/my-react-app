import { all } from 'redux-saga/effects'
import msg from '../sagas/msg/index'

export default function* rootSaga() {
  yield all([msg()])
}
