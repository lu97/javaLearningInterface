import {SET_CURRENT_ITEM_CODE} from "../constants/reducerConstants";

export const setCurrentItemCode = (newItemCode) =>{
    return {
        type: SET_CURRENT_ITEM_CODE,
        newItemCode
    }
}
