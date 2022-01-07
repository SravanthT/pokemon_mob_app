import { SEARCH_RESPONSE } from "../actionTypes";
import axios from 'axios';

const initialSearchState ={
    searchResponse : {data:""}
}



const getSearchReducer=(state=initialSearchState,action)=>{
    console.log("getSearchReducer initiated",[action.payload])
    switch(action.type){
        case SEARCH_RESPONSE:
            return{
                
                searchResponse : action.payload
            }
        default : 
        return state
    }
}

export default getSearchReducer;