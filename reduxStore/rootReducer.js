import { combineReducers } from "redux";
import detailReducer from "./details/detailReducer";
import { loadingReducer } from "./loading";
import  searchReducer  from "./search/searchReducer";
import getSearchReducer from "./searchResponse/getSearchReducer";

const rootReducer = combineReducers({
    loading : loadingReducer,
    searching : searchReducer,
    getData : getSearchReducer,
    detail : detailReducer
})

export default rootReducer;