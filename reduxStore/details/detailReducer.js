import axios from "axios";
import { POKEMON_DETAILS } from "../actionTypes";

const initialPokeDetails = {
    pokemon_Details:""
    
}

const detailReducer = (state= initialPokeDetails,action)=>{
    switch(action.type){
        case POKEMON_DETAILS:
            
                return {
                    pokemon_Details : action.payload
                }
                
        default :
            return state;
    }
}

export default detailReducer