
import { ADD_BOOKMARK,REMOVE_BOOKMARK } from "../actionTypes";
import { AsyncStorage } from "react-native";




function getLocalBookmarks(){
    return async ()=>{
        try{
            await AsyncStorage.setItem(
                "bookmarks","Ilike to save this data"
            )
        } catch(err) {
            throw Error(err)
        }
    }
}

const setLocakBookmark=()=>{
   
}

const initialBookmarkState = {
    bookmarks: setLocalBookmarks
}