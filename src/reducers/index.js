import { combineReducers } from 'redux';

import counter from './count';
import user from './users';

export default combineReducers({
    counter,
    user
});
