
import { combineReducers } from "redux";
import loaderReducer from "./loader.reducer";
import carsReducer from "./cars.reducer";
import {adminReducer} from "./admin.reducer";

export default combineReducers({
    cars: carsReducer,
    isLoading: loaderReducer,
    admin: adminReducer,

});
