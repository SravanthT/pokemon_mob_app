import { ADD_BOOKMARK,REMOVE_BOOKMARK } from "../actionTypes";

const addBookmark = (num) =>{
    return {
        type:ADD_BOOKMARK,
        payload: num
    }
}

const removeBookmark = (num) =>{
    return{
        type:REMOVE_BOOKMARK,
        payload:num
    }
}

export {addBookmark,removeBookmark}