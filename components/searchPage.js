import React, {useState } from 'react';
import { View, Text ,Image,Button,Alert,StyleSheet } from 'react-native';
import { SearchBar} from 'react-native-elements';
import styles from '../assets/styles';

export default function SearchPage({ navigation }){
const [searchInput,setSearchInput] =useState();

const changeHandler = (e)=>{
    console.log(e)
    setSearchInput(e)
}
const buttonHandler = (e)=>{
    Alert.alert("You have searched for '" + searchInput +"'")
    navigation.navigate("Listpage",{name:'Listpage'})
    
}
    
    return(
        <View style={styles.container ,styles.container.backgroundColor="#fffb"}>
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
