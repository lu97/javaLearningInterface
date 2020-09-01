import {combineReducers} from "redux";
import dataStore from "./DataReducer";
import actionPagesStore from "./ActionPagesReducer";

const rootReducer = combineReducers({
    dataStore,
    actionPagesStore
});

export default rootReducer;
