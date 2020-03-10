import {CreateApiService} from "../../api/api-service";
import {API_TYPES, LS_KEY_ADMIN} from "../../constants/constants";
import {removeLoaderAction, setLoaderAction} from "./loader.action";
import {Redirect} from "react-router-dom";
import React from "react";


export const adminActionTypes = {
  init: 'INIT',
  login: 'LOGIN',
  logOut: 'LOGOUT',
};

const loginApi = new CreateApiService(API_TYPES.login);

export const initAdminAction = () => dispatch => {
  const admin = JSON.parse(localStorage.getItem(LS_KEY_ADMIN));
  dispatch({ type: adminActionTypes.init, payload: admin || null })
};

export const loginAdminAction = (formData) => dispatch => {
  dispatch(setLoaderAction());
  loginApi.post(formData)
    .then( ({ user }) => {
      dispatch({ type: adminActionTypes.login, payload: user });
      localStorage.setItem(LS_KEY_ADMIN, JSON.stringify(user));

      dispatch(removeLoaderAction());
      return (<Redirect
        to={{
          pathname: "/",
        }}
      />)
    })
    .catch(err => {
      console.error(err);
      dispatch(removeLoaderAction());
    })







}
