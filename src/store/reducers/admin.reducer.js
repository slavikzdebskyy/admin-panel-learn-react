import {adminActionTypes} from "../action/admin.actions";

const adminReducer = (state = null, {type, payload}) => {
  switch (type) {
    case adminActionTypes.login:
      return payload;

    case adminActionTypes.init:
      return payload;

    case adminActionTypes.logOut:
      return null;

    default:
      return state;
  }
};

export default adminReducer;
