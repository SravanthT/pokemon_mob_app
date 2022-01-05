import { ISLOADING } from "./actionTypes";

export function setLoading(){
    return{
        type:ISLOADING
    }
}

const initialLoadState ={
    isLoading: false
}

export function loadingReducer(state = initialLoadState,action){
    switch(action.type){
        case ISLOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state
    }
}

// export { setLoading, loadingReducer }