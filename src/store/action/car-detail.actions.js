export const carDetailActionTypes = {
  set: 'SET_CAR',
  remove: 'REMOVE_CAR',
};

export const initCarAction = (car) => dispatch => dispatch({type: carDetailActionTypes.set, payload: car});

