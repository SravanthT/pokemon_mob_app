import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button,Alert } from 'react-native-elements';
import styles from '../assets/styles';

export default function Listpage({navigation}){

    const buttonHandler = ()=>{
        alert("Navigate to Details Page")
        navigation.navigate("Details",{name:'Details'})
    }
    return(
        <View style={styles.container}>
            <Text>This is Results Page to render Results from API</Text>
            <Button title={"To Details Page"} onPress={()=>buttonHandler()}/>
        </View>
    )
}

