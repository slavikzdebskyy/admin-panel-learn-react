import {carsActionTypes} from "../action/cars.actions";

const carsReducer = (state = [], { type, payload }) => {
  switch (type) {

    case carsActionTypes.load:
      return [...state, ...payload];

    case carsActionTypes.remove:
      return state.filter(car => car.id !== payload);

    case carsActionTypes.modify:
      // const index = state.findIndex(car => car.id === payload.id);
      // if (index < 0 ) {
      //   return state;
      // }
      // state[index] = payload;
      // return [...state];

      return state.map(car => car.id !== payload.id ? car : payload);

    case carsActionTypes.add:
      return [ ...state, payload ];

    default:
      return state;

  }
};

export default carsReducer;

//
// action = {
//   type: 'INIT_CARS',
//   payload: [...cars]
// }
