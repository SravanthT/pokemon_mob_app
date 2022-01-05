import { SEARCH_RESPONSE } from "../actionTypes";
import axios from 'axios';

const initialSearchState ={
    word:'',
    searchResponse : []
}



function getSearchReducer(state=initialSearchState,action){
    console.log("getSearchReducer initiated")
    switch(action.type){
        case SEARCH_RESPONSE:
            return{
                ...state,
                word : action.payload,
                searchResponse : action.payload
            }
        default : 
        return state
    }
}

export {getSearchReducer}