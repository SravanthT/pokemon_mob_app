import React, { useEffect, useState } from 'react'
import DetailsPage from './detailsPage'
import { View,Text } from 'react-native'

const BookmarkPage = (props)=>{
    const [bookmarks, setBookmark] = useState()

    useEffect(()=>getBookmarkData)

    function getBookmarkData(){
        async ()=>{
            try{
                const value = await AsyncStorage.getItem("bookmarks");
                if(value !== null){
                    console.log(value)
                    setBookmark(JSON.parse(value))

                }
            }catch(error){
                console.log(error)
            }
        }
    }


    return(
        <View>
            <Text>This is BookmarkPage {bookmarks}</Text>
        </View>
    )
}

export default BookmarkPage