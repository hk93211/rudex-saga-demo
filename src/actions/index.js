import { INCREMENT, DECREMENT, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, INCREMENT_ASYNC } from '../contants';
import axios from 'axios';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const increment_async = () => {
    return {
        type: INCREMENT_ASYNC
    }
}

export const get_users = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}