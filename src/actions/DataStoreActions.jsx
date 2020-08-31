import {SET_CURRENT_ITEM_CODE} from "../constants/reducerConstants";

export const setCurrentItemCode = (newItemCode) =>{
    console.log(newItemCode);
    return {
        type: SET_CURRENT_ITEM_CODE,
        newItemCode
    }
}
