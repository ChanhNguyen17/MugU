import * as actions from '../actions/actions';

const defaultState = {
  user: JSON.parse(localStorage.getItem('user')),
  message: '',
  error: '',
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      console.log('reducer')
      console.log(action.payload)
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state };
    }
    case actions.LOGIN_FAILURE: {
      return { ...state, user: null, message: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
