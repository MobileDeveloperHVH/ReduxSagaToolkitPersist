import {put, call, takeEvery, takeLatest, all, fork} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {SET_COUNTER} from './action';

function* watchSetCounter() {
  yield takeLatest(SET_COUNTER, function* (action: PayloadAction<any>) {
    // LOGIC handle
    const {value} = action.payload;
    yield put({
      type: 'counterReducer/setValue',
      payload: {value},
    });
  });
}

export default function* counterSaga() {
  yield all([
    fork(watchSetCounter),
    // TODO add more saga watcher
  ]);
}
