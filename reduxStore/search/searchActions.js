import { SEARCH_VALUE } from "../actionTypes";


const updateInputChange = (someInput)=>{
return{
    type:SEARCH_VALUE,
    payload:someInput
}
}



export {updateInputChange};