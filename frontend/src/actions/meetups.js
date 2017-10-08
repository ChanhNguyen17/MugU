const resourcesURI = '/meetups';

const createNewInvite = (description, location, time) => async (dispatch, getState, api) => {
  try {
    return api.post(resourcesURI, { description, location, time });
  } catch (error) {
    throw new Error(error);
  }
};

export {
  createNewInvite,
};
