import { combineReducers } from 'redux';

import todosReducers from './todosReducers';

const reducer = combineReducers({
  todo: todosReducers,
});

export default reducer;
