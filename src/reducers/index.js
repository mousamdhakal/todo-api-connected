import { combineReducers } from 'redux';

import todosReducers from './todosReducers';
import userReducers from './userReducers';
import signReducers from './signReducers';

const reducer = combineReducers({
  todo: todosReducers,
  user: userReducers,
  sign: signReducers,
});

export default reducer;
