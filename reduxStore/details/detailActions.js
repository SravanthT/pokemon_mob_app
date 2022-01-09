import { POKEMON_DETAILS} from "../actionTypes"

const updatePokemonDetails = (number) =>{
    
    return {
        type:POKEMON_DETAILS,
        payload: number
    }
}


export {updatePokemonDetails }