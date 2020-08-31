import {combineReducers} from "redux";
import dataStore from "./DataReducer";

const rootReducer = combineReducers({
    dataStore
});

export default rootReducer;
