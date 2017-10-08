const resourcesURI = 'meetups';

const createNewInvite = (user, description, location, time) => async (dispatch, getState, api) => {
  try {
    return api.post(resourcesURI, { user, description, location, time });
  } catch (error) {
    throw new Error(error);
  }
};

const getInviteList = () => async (dispatch, getState, api) => {
  try {
    return api.get(resourcesURI);
  } catch (error) {
    throw new Error(error);
  }
};

export {
  createNewInvite,
  getInviteList,
};
