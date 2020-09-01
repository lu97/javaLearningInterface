import {SET_TEST_REST_DATA} from "../constants/reducerConstants";

export const setTestRestData = (data) =>{
    return {
        type: SET_TEST_REST_DATA,
        data
    }
}
