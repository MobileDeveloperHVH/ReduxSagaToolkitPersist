import {put, call, takeEvery, takeLatest, all, fork} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {setValue} from './reducer';
import {getValue} from './actions';

function* watchSetCounter() {
  yield takeLatest(getValue.type, function* (action: PayloadAction<any>) {
    // LOGIC handle
    const {value} = action.payload;
    yield put(setValue(value));
  });
}

export default function* counterSaga() {
  yield all([
    fork(watchSetCounter),
    // TODO add more saga watcher
  ]);
}
