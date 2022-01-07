import { useNavigation } from '@react-navigation/native';
import React ,{useEffect} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import styles from '../assets/styles';
import getSearchResponse from '../reduxStore/searchResponse/getSearchActions';
import { connect } from 'react-redux';
import SvgUri from 'expo-svg-uri';
import { Button } from 'react-native-elements';


function Listpage(props){
    console.log("List Page Rendering initiated")
    const navigation = useNavigation()
    const Data = props.searchResponse
    const buttonHandler = ()=>{
        console.log(props.searchValue)
        getSearchResponse(Data.next)
        navigation.navigate("Details",{name:'Details'})
    }
    

    return(
        <View style={styles.listPage}>
            <ScrollView>
                { Data.map((ele,i)=>{
                    const pokeNum = parseInt(ele.url.substr(34))
                    var path = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeNum}.svg`
                    console.log(pokeNum,ele.url)
                    return <View key={i+"v"} style={styles.gridView}>
                                <SvgUri styles={styles.svgStyles}
                                width="150"
                                height="150"
                                source ={{uri:path}}/>
                    <Text key={pokeNum} style={styles.pokeHeading}>{ele.name.toUpperCase()}</Text></View>})}                
            </ScrollView>
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


