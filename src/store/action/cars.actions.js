import {CreateApiService} from "../../api/api-service";
import {API_TYPES} from "../../constants/constants";
import {removeLoaderAction, setLoaderAction} from "./loader.action";

export const carsActionTypes = {
  load: 'LOAD_CARS',
  remove: 'REMOVE_CAR',
  modify: 'MODIFY_CAR',
  add: 'ADD_NEW_CAR',
};

const carApi = new CreateApiService(API_TYPES.cars);

export const initCarsAction = (queryParams) => dispatch => {
  dispatch(setLoaderAction());
  carApi
    .get(queryParams)
    .then(cars => dispatch({type: carsActionTypes.load, payload: cars}))
    .then(() => dispatch(removeLoaderAction()))
    .catch(error => {
      dispatch(removeLoaderAction());
      console.error(error);
    });
};

export const removeCarAction = (id) => dispatch => {
  dispatch(setLoaderAction());
  carApi
    .delete(id)
    .then(() => dispatch({type: carsActionTypes.remove, payload: id}))
    .then(() => dispatch(removeLoaderAction()))
    .catch(error => {
      dispatch(removeLoaderAction());
      console.error(error);
    });
};

export const modifyCarAction = (car) => dispatch => {
  dispatch(setLoaderAction());
  carApi
    .put(car.id, car)
    .then(newCar => dispatch({type: carsActionTypes.modify, payload: newCar}))
    .then(() => dispatch(removeLoaderAction()))
    .catch(error => {
      dispatch(removeLoaderAction());
      console.error(error);
    });
};

export const addNewCarAction = (car) => dispatch => {
  dispatch(setLoaderAction());
  carApi
    .post(car)
    .then(newCar => dispatch({type: carsActionTypes.add, payload: newCar}))
    .then(() => dispatch(removeLoaderAction()))
    .catch(error => {
      dispatch(removeLoaderAction());
      console.error(error);
    });
};
