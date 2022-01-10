import getSearchResponse from "./searchResponse/getSearchActions";
import { updateInputChange } from "./search/searchActions";
import { setLoading } from "./loading";
import { updatePokemonDetails } from "./details/detailActions";

const actionCreators = {
    getSearchResponse,updateInputChange,setLoading,updatePokemonDetails}

export default actionCreators;