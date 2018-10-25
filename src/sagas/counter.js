import { put, takeEvery, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { INCREMENT, INCREMENT_ASYNC } from '../contants';

const incrementAsync = function*() {
    yield call(delay, 1000);
    yield put({type: INCREMENT});
}

export const watchIncrementAsync = function*() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}