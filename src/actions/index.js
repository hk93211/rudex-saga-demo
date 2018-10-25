import { INCREMENT, DECREMENT, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from '../contants';
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
    return dispatch => {
        setTimeout(() => {
            dispatch({type: INCREMENT});
        }, 2000);
    }
}

export const get_users = () => {
    return dispatch => {
        dispatch({type: FETCH_USERS_REQUEST})
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            const users = res.data;
            dispatch(get_users_success(users))
        })
    }
}

export const get_users_success = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        users
    }
}