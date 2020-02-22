
import { combineReducers } from "redux";
import todos from "./todos.reducer";
import loaderReducer from "./loader.reducer";

export default combineReducers({
    toggleLogin: todos,
    isLoading: loaderReducer,
});