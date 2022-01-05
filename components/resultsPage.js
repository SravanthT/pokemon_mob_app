import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button,Alert } from 'react-native-elements';
import styles from '../assets/styles';
import getSearchResponse from '../reduxStore/searchResponse/getSearchActions';
import { connect } from 'react-redux';
import axios from 'axios';


function Listpage(props){
    const navigation = useNavigation()
    const buttonHandler = ()=>{
        console.log(props.searchValue)
        console.log(getdata(props.searchValue),' this is function')
        // getSearchResponse(result)
        // navigation.navigate("Details",{name:'Details'})
    }
    async function getdata(word){
        console.log('getData function initiated for ', word)
     return await axios.get('http://pokeapi.co/api/v2/pokemon/'+ word)
            .then((response)=>{
                console.log(Object.keys(response.data).length)

                getSearchResponse(response.data.length)
                return response.data
            })
            .catch(err=> {
                console.log(err)
                return err})
    }

    return(
        <View style={styles.container}>
            <Text>This is Results Page to render Results from API</Text>
            <Button title={"To Details Page"} onPress={()=>buttonHandler()}/>
            <Text>{props.searchValue}</Text>
            <Text>{props.searchResponse}</Text>
        </View>
    )
}

function mapStateToProps(state){
    return{
        searchValue : state.searching.searchValue,
        searchResponse : state.getData.searchResponse       

    }
}

function mapDispatchToProps(dispatch){
    return{
        getSearchResponse : (w)=>dispatch(getSearchResponse(w))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Listpage)


