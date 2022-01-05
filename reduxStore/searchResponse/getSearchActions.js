import { SEARCH_RESPONSE } from "../actionTypes";

const getSearchResponse = (word)=>{
    return{
        type:SEARCH_RESPONSE,
        payload:word
    }
}

export default getSearchResponse;
