import axios from "axios";
import {BACKEND_PATH} from "../constants/leftMenuConstants";

export const defaultRestGetData = (path, storeSet)=>{
    axios.get(`${BACKEND_PATH}${path}`).then(response=>{
        storeSet(response.data);
    });
}
export const getRestDataWithParams = (path, storeSet, params) =>{
    console.log(params);
    axios.get(`${BACKEND_PATH}${path}`, params).then(response=>{
        storeSet(response.data);
    });
}
