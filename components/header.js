import React from 'react';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import styles from '../assets/styles';

function HeaderForApp(){
    const navigation = useNavigation();
    const homeHandler=()=>{
        Alert.alert("Has to Go Home after confirmation")
        navigation.navigate("Home",{name:"Home"})
      }
    return(
        <Header    
          placement="left"
          centerComponent={{ text: '𝙋𝙤𝙠𝙚𝙙𝙚𝙭', style: styles.heading, onPress: ()=>homeHandler() }}

          rightComponent={{ icon: 'home', color: '#fff', onPress: ()=>homeHandler()}}

        />
    )
}

export default HeaderForApp;


