import {SET_PARSE_DATA, SET_TEST_REST_DATA} from "../constants/reducerConstants";

export const setTestRestData = (data) =>{
    return {
        type: SET_TEST_REST_DATA,
        data
    }
}
export const setParseData = (parseData) =>{
    return {
        type: SET_PARSE_DATA,
        parseData
    }
}
