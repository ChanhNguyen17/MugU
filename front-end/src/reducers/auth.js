import * as actions from '../actions/actions';

const defaultState = {
  user: JSON.parse(localStorage.getItem('user')),
  message: '',
  error: '',
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      return { ...state, user: action.payload, error: '' };
    }
    case actions.LOGIN_FAILURE: {
      return { ...state, user: null, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
