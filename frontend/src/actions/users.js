import { push } from 'react-router-redux';

import * as actions from './actions';

const resourcesURI = '/users';

const signup = (email, name, password) => async (dispatch, getState, api) => {
  try {
    api.post(`${resourcesURI}`, { email, name, password }).then((data) => {
      dispatch({
        type: actions.SIGNUP_SUCCESS,
        payload: data,
      });
      dispatch(push('/invites'));
    });
  } catch (error) {
    dispatch({
      type: actions.SIGNUP_SUCCESS,
      payload: error,
    });
  }
};

const login = (email, password) => async (dispatch, getState, api) => {
  try {
    api.post(`${resourcesURI}/authenticate`, { email, password }).then((data) => {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: data,
      });
      dispatch(push('/invites'));
    });
  } catch (error) {
    throw new Error(error);
  }
};

export {
  signup,
  login,
};
