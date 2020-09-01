import {SET_TEST_REST_DATA} from "../constants/reducerConstants";

const initialState = {
    testRestData: {}
};
const actionPagesStore = (state = initialState, action) =>{
    switch (action.type) {
        case SET_TEST_REST_DATA:
            return {
                ...state,
                testRestData: action.data
            };
        default:
            return state;
    }
}

export default actionPagesStore;
