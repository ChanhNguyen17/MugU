import * as actions from '../actions/actions';

const defaultState = {
  user: JSON.parse(localStorage.getItem('user')),
  error: '',
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state };
    }
    case actions.LOGIN_FAILURE: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
