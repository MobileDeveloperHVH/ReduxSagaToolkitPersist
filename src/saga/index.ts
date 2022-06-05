import {all} from 'redux-saga/effects';
import counterSaga from '../redux/counter/saga';

export default function* rootSaga() {
  yield all([
    counterSaga(),
    // TODO  add more saga
  ]);
}
