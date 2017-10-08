import * as actions from './actions';

const resourcesURI = 'users';

const login = (username, password) => async (dispatch, getState, api) => {
  try {
    console.log("login");
    api.post(`${resourcesURI}/authenticate`, { username, password }).then(data => {
      console.log(data);
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: data,
      })
    })
  } catch (error) {
    throw new Error(error);
  }
};

export {
  login,
};
