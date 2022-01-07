import { SEARCH_VALUE } from "../actionTypes";


const updateInputChange = (someInput)=>{
    console.log(someInput,"thisis in update actions")
return{
    type:SEARCH_VALUE,
    payload:someInput
}
}



export {updateInputChange};