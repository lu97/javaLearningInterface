import {SET_PARSE_DATA, SET_TEST_REST_DATA} from "../constants/reducerConstants";
import {ALL_LISTS, DATA_FORMAT, HEADS_LIST, TEST_URL} from "../constants/AppConstants";

const initialState = {
    testRestData: {},
    parseSite: {
        rs: {
            url: TEST_URL,
            selectType: DATA_FORMAT,
            dataFormat: HEADS_LIST,
            tag: "h1",
            count: {
                start: 1,
                end: 10
            },
            countType: ALL_LISTS
        },
        rq: {

        }
    }
};
const actionPagesStore = (state = initialState, action) =>{
    switch (action.type) {
        case SET_TEST_REST_DATA:
            return {
                ...state,
                testRestData: action.data
            };
        case SET_PARSE_DATA:
            return {
                ...state,
                parseSite: action.parseData
            }

        default:
            return state;
    }
}

export default actionPagesStore;
