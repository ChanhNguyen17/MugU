import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import users from './users';

const rootReducer = combineReducers({
  users,
  router: routerReducer,
  form: reduxFormReducer,
});

export default rootReducer;
