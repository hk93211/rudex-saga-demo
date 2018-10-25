import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../contants';

const initState = {
    users: [],
    isLoading: false,
    error: null
};

const user = (state = initState, action = {}) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                users: [],
                isLoading: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return {
                users: action.users,
                isLoading: false,
                error: null
            }
        case FETCH_USERS_FAILURE:
            return {
                users: [],
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default user;