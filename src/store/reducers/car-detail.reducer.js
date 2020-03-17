import { carDetailActionTypes } from "../action/car-detail.actions";

const carDetailReducer = (state = {}, {type, payload}) => {
  switch (type) {

    case carDetailActionTypes.set:
      return payload;

    case carDetailActionTypes.remove:
      return {};

    default:
      return state;
  }
};

export default carDetailReducer;
