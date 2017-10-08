import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import users from './users';

const rootReducer = combineReducers({
  users,
  form: reduxFormReducer,
});

export default rootReducer;
