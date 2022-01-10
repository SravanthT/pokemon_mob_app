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

    const ToBookmarkPage=()=>{
      navigation.navigate("BookmarksPage",{name:"BookmarksPage"})
    }
    return(
        <Header    
          placement="left"
          style={{marginTop:5,alignContent:"center"}}
          leftComponent={{icon:'home',color:"#fff",onPress: ()=>homeHandler(),style:{paddingTop:5,marginRight:0}}}
          centerComponent={{ text: '𝙋𝙤𝙠𝙚𝙙𝙚𝙭', style: styles.heading,onPress: ()=>homeHandler() }}
          rightComponent={{ icon: 'bookmarks', color: '#fff',style:{paddingTop:5}, onPress: ()=>ToBookmarkPage()}}

        />
    )
}

export default HeaderForApp;


