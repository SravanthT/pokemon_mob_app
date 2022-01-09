import React, { useState } from 'react';
import { View, Text ,Image,Button,Alert,StyleSheet } from 'react-native';
import { SearchBar} from 'react-native-elements';
import styles from '../assets/styles';
import { connect } from 'react-redux';
import { updateInputChange } from '../reduxStore/search/searchActions';
import { useNavigation } from '@react-navigation/native';
import {setLoading} from '../reduxStore/loading';
import axios from 'axios';
import getSearchResponse from '../reduxStore/searchResponse/getSearchActions';
import { updatePokemonDetails } from '../reduxStore/details/detailActions';


const api = axios.create({
    baseURL:`https://pokeapi.co/api/v2/pokemon/`
})
function SearchPage(props){
    const navigation = useNavigation();

    
const buttonHandler = ()=>{
    props.setLoading()
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=10")
    .then(response=> {
        props.getSearchResponse(response.data.results)
        navigation.navigate("Listpage",{name:"Listpage"})
        props.setLoading()
        updatePokemonDetails(1)
    })
    .catch(err => {
        console.log(err)
        alert(err.message)
        props.setLoading()
        })
}
 
    return(<>
        <View style={styles.container ,styles.container.backgroundColor="#fffb"}>
            <SearchBar
                    placeholder="Type Here..."
                    value = {props.searchValue}
                    on
                    onChangeText={(e)=> props.updateInputChange(e) }
                    platform='ios'
                    containerStyle={{ backgroundColor: 'none' }}
                />
            <Button 
                    title="Search Pokemon"
                    onPress={()=>buttonHandler()}
            />
        
            <Text>This is search Page {'Loading is '+ props.isLoading}</Text>
            <Text>You Have searched for "{props.searchValue} "</Text>
        </View>
        </>
    )
}

function mapStateToProps(state){
    console.log(state)
    return({
        searchValue : state.searching.searchValue,
        isLoading : state.loading.isLoading,
        searchResponse : state.getData.searchResponse,
        pokemon_Details : state.detail.pokemon_Details
    })
}

function mapDispatchToProps(dispatch){
    return({
        updateInputChange: (w)=>dispatch(updateInputChange(w)),
        setLoading: ()=> dispatch(setLoading()),
        getSearchResponse : (r)=>dispatch(getSearchResponse(r)),
        updatePokemonDetails : (n)=>dispatch(updatePokemonDetails(n))

    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);