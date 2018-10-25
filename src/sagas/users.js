import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../contants';
import axios from 'axios';

const fetchUser = function*() {
    try {
        let userInfos = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
        let users = userInfos.data;
        yield put({ type: FETCH_USERS_SUCCESS, users });
    } catch (error) {
        yield put({ type: FETCH_USERS_FAILURE, error });
    }
};

export const watchFetchUser = function*() {
    yield takeEvery(FETCH_USERS_REQUEST, fetchUser);
};
