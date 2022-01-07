import { SEARCH_RESPONSE } from "../actionTypes";

const getSearchResponse=(word)=>{
    const load = word
    return{
        type:SEARCH_RESPONSE,
        payload:load
    }
}

export default getSearchResponse;
