import {TEST_REST} from "../constants/leftMenuConstants";
import {SET_CURRENT_ITEM_CODE} from "../constants/reducerConstants";

const initialState = {
    currentItemCode: TEST_REST
};
const dataStore = (state = initialState, action) =>{
    switch (action.type) {
        case SET_CURRENT_ITEM_CODE:
            return {
                ...state,
                currentItemCode: action.newItemCode
            };
        default:
            return state;
    }
}

export default dataStore;
