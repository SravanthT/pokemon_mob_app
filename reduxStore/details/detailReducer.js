import axios from "axios";
import { POKEMON_DETAILS } from "../actionTypes";

const initialPokeDetails = {
    pokemonDetails:""
    
}

const detailReducer = (state= initialPokeDetails,action)=>{
    switch(action.type){
        case POKEMON_DETAILS:
            
                return {
                    pokemonDetails : action.payload
                }
        default :
            return state
    }
}

export default detailReducer