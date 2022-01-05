import React from 'react';
import { View, Text ,Image,Button,Alert,StyleSheet } from 'react-native';
import { SearchBar} from 'react-native-elements';
import styles from '../assets/styles';
import { connect } from 'react-redux';
import { updateInputChange } from '../reduxStore/search/searchActions';
import { useNavigation } from '@react-navigation/native';
import {setLoading} from '../reduxStore/loading';

function SearchPage(props){
    const navigation = useNavigation();

const buttonHandler = (e)=>{
    navigation.navigate("Listpage",{name:'Listpage'})
    props.setLoading()
    setTimeout(() => {
        props.setLoading()
    }, 5000)
    
}
    
    return(
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
    )
}

function mapStateToProps(state){
    console.log("Searching for",state);
    return({
        searchValue : state.searching.searchValue,
        isLoading : state.loading.isLoading
    })
}

function mapDispatchToProps(dispatch){
    return({
        updateInputChange: (w)=>dispatch(updateInputChange(w)),
        setLoading: ()=> dispatch(setLoading())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);