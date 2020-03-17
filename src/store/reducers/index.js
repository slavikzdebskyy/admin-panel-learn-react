
import { combineReducers } from 'redux';

import loaderReducer from './loader.reducer';
import carsReducer from './cars.reducer';
import adminReducer from './admin.reducer';
import personalReducer from './personal.reducer';
import carDetailReducer from './car-detail.reducer';

export default combineReducers({
    cars: carsReducer,
    personal: personalReducer,
    isLoading: loaderReducer,
    admin: adminReducer,
    carDetail: carDetailReducer
});
