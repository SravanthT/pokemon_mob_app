import React, {useState } from 'react';
import { View, Text ,Image,Button,Alert } from 'react-native';
import { SearchBar} from 'react-native-elements';

export default function SearchPage(){
const [searchInput,setSearchInput] =useState();

const changeHandler = (e)=>{
    console.log(e)
    setSearchInput(e)
}
const buttonHandler = (e)=>{
    Alert.alert("You have searched for '" + searchInput +"'")
}

    return(
        <View>
            <SearchBar
                    placeholder="Type Here..."
                    value = {searchInput}
                    on
                    onChangeText={(e)=> changeHandler(e) }
                    platform='ios'
                    containerStyle={{ backgroundColor: 'none' }}
                />
            <Button 
                    title="Search Pokemon"
                    onPress={()=>buttonHandler()}
            />

            <Text>This is search Page</Text>
            <Text>You Have searched for "{searchInput} "</Text>
        </View>
    )
}