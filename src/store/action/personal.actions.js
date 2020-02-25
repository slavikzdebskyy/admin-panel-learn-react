import {CreateApiService} from "../../api/api-service";
import {API_TYPES} from "../../constants/constants";
import {removeLoaderAction, setLoaderAction} from "./loader.action";
import {carsActionTypes} from "./cars.actions";

export const personalActionTypes = {
  add: 'ADD_NEW_PERSONAL',
  remove: 'REMOVE_PERSONAL',
  modify: 'MODIFY_PERSONAL',
  load: 'LOAD_PERSONAL',
};

const personalApi = new CreateApiService(API_TYPES.personal);

export const initPersonalAction = (queryParams) => dispatch => {
  dispatch(setLoaderAction());
  personalApi
      .get(queryParams)
      .then(personal => dispatch({type: personalActionTypes.load, payload: personal}))
      .then(() => dispatch(removeLoaderAction()))
      .catch(error => {
          dispatch(removeLoaderAction());
          console.error(error);
      });
};

export const modifyPersonalAction = (person) => dispatch => {
    dispatch(setLoaderAction());
    personalApi
        .put(person.id, person)
        .then(newPerson => dispatch({type: personalActionTypes.load, payload: newPerson}))
        .then(() => dispatch(removeLoaderAction()))
        .catch( error => {
            dispatch(removeLoaderAction());
            console.log(error);
    });
};

export const addNewPersonalAction = (person) => dispatch => {
    dispatch(setLoaderAction());
    personalApi
        .post(person)
        .then(newPerson => dispatch({type: personalActionTypes.add, payload: newPerson}))
        .then(() => dispatch(removeLoaderAction()))
        .catch(error => {
            dispatch(removeLoaderAction());
            console.error(error);
        });
};

export const removePersonalAction = (id) => dispatch => {
    dispatch(setLoaderAction());
    personalApi
        .delete(id)
        .then(() => dispatch({type: personalActionTypes.remove, payload: id}))
        .then(() => dispatch(removeLoaderAction()))
        .catch(error => {
            dispatch(removeLoaderAction());
            console.error(error);
        });
};
