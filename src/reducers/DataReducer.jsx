import {TEST_REST} from "../constants/leftMenuConstants";
import {SET_CURRENT_ITEM_CODE} from "../constants/reducerConstants";

export const initialState = {
    currentItemCode: TEST_REST
};
const dataStore = (state = initialState, action) =>{
    switch (action) {
        case SET_CURRENT_ITEM_CODE:
            return {
                currentItemCode: action.newItemCode
            };
        default:
            return state;
    }
}

export default dataStore;
