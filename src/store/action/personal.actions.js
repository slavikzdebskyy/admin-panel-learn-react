import {CreateApiService} from "../../api/api-service";
import {API_TYPES} from "../../constants/constants";
import {removeLoaderAction, setLoaderAction} from "./loader.action";

export const personalActivTypes = {
    add: 'ADD_NEW_PERSON',
    remove: 'REMOVE_PERSON',
    load: 'LOAD_PERSONAL',
    modify: 'MODIFY_PERSON'
};

const personalApi = new CreateApiService(API_TYPES.personal);

export const addNewPersonAction  = (person) => dispatch => {
    dispatch(setLoaderAction());
    personalApi
      .get(person)
      .then(newPerson => dispatch({type: personalActivTypes.add, payload: newPerson}))
      .then(() => dispatch(removeLoaderAction()))
      .catch( error => {
          dispatch(removeLoaderAction());
          console.error(error);
      });
}


export const removePersonAction = (id) => dispatch => {
    dispatch(setLoaderAction());
    personalApi
        .delete(id)
        .then(() => dispatch({type: personalActivTypes.remove, payload: id}))
        .then(() => dispatch(removeLoaderAction()))
        .catch(error => {
            dispatch(removeLoaderAction());
            console.error(error);
        })

};

export const initPersonalAction = (queryParams) => dispatch => {
    dispatch(setLoaderAction());
    personalApi
        .get(queryParams)
        .then(personal => dispatch({type: personalActivTypes.load, payload: personal}))
        .then(() => dispatch(removeLoaderAction()))
        .catch(error => {
            dispatch(removeLoaderAction());
            console.error(error);
        })
};

export const modifyPersonAction = (person) => dispatch => {
    dispatch(setLoaderAction());
    personalApi
        .put(person.id, person)
        .then(newPerson => dispatch({type: personalActivTypes.modify, payload: newPerson}))
        .then(() => dispatch(removeLoaderAction()))
        .catch(error => {
            dispatch(removeLoaderAction());
            console.error(error);
        });
};