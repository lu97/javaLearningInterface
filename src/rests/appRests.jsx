import axios from "axios";
import {BACKEND_PATH} from "../constants/leftMenuConstants";

export const defaultRestGetData = (path, storeSet)=>{
    axios.get(`${BACKEND_PATH}${path}`).then(response=>{
        storeSet(response.data);
    });
}
