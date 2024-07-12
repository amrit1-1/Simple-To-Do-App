import { combineReducers } from "redux";
import operationsReducer from "./todoapp/reducers/operations";

// Combines all the reducers i created
const rootReducer = combineReducers({
    operationsReducer});

export default rootReducer;