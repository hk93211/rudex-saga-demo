import { all, fork } from 'redux-saga/effects';
import * as counterSaga from './counter';
import * as userSaga from './users';

export default function* rootSaga() {
    yield all([
        ...Object.values(counterSaga),
        ...Object.values(userSaga)
    ].map(fork));
}