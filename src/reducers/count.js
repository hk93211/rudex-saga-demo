import { INCREMENT, DECREMENT,  } from '../contants';

const initState = 10;

const counter = (state = initState, action = {}) => {
    switch(action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        default:
            return state;
    }
}

export default counter;