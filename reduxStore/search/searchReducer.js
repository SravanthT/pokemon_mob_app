import { SEARCH_VALUE } from "../actionTypes";

const initialSearchState = {
    searchValue:""
}

const searchReducer = (state=initialSearchState,action) =>{
    switch(action.type){
        case SEARCH_VALUE:
            return{
                ...state,
                searchValue:action.payload
            }
        default:
            return state;
    }
};

export default searchReducer