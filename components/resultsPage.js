import { useNavigation } from '@react-navigation/native';
import React ,{useEffect, useState} from 'react';
import { Text, View, SafeAreaView,FlatList,TouchableHighlight } from 'react-native';
import styles from '../assets/styles';
import getSearchResponse from '../reduxStore/searchResponse/getSearchActions';
import { connect } from 'react-redux';
import SvgUri from 'expo-svg-uri';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { setLoading } from '../reduxStore/loading';
import { updatePokemonDetails } from '../reduxStore/details/detailActions';





function Listpage(props){
    const navigation = useNavigation()
    const [nextUrl,setNextUrl] = useState(props.searchResponse.next)
    const [latestData,setLatestData] = useState([])

    useEffect(()=>{
        setLatestData(props.searchResponse.results)
    },[])
    function pokemonDetailHandler(pokiID){
        props.setLoading()
        axios.get(pokiID).then(response =>{
            props.updatePokemonDetails(response.data)
            navigation.navigate("Details",{name:"Details"})
            props.setLoading()
        }).catch(err=> {
            props.setLoading()
            console.log(err)})
    }
    
    const pokemonComp = ({item})=>{
        const pokeNum = parseInt(item.url.substr(34))
        const pokeImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeNum}.svg`
        
        return(
            <LinearGradient 
            colors={[
              'transparent',
              'transparent',
            ]}
            start={[0,0.9]}
            end={[0,1]}
            style={styles.shadows}
          >
              <TouchableHighlight 
              underlayColor={"rgba(0,0,0,0)"}
              style={styles.touchable} 
              onPress={ ()=>{pokemonDetailHandler(item.url)
              updatePokemonDetails(item.url)}} >
            <View style={[styles.gridView, styles.shadow]}><LinearGradient colors={[ "#e7e0e4", "#e2d2e0", "#d8c5df", "#c8bae1", "#b1b1e4", "#9fb5ed", "#87baf4", "#69bff8", "#52cffe", "#41dfff", "#46eefa", "#5ffbf1"]}
            
        style={[styles.background, styles.gridView]}>
            <SvgUri styles={styles.svgStyles}
                                width="150"
                                height="150"
                                source ={{uri:pokeImageUrl}}/>
            <Text key={pokeNum} style={[styles.pokeHeading,styles.shadow]}>{item.name.toUpperCase()}</Text></LinearGradient>
            <TouchableHighlight style={styles.bookmark}>
            <View ></View>
            </TouchableHighlight>
            </View>
            </TouchableHighlight>
            </LinearGradient>
            
        )
    }

    const updateDataFromApi =()=>{
        props.setLoading()
        axios.get(nextUrl)
            .then(response =>{
                let tempData = latestData.concat(response.data.results)
                setNextUrl(response.data.next)
                setLatestData(tempData)
                props.setLoading()
            }).catch(err=>{
                alert(err)
                props.setLoading()
            })
        
    }

    return(
        <SafeAreaView style={styles.listPageView}>
            <FlatList 
                onEndReached={updateDataFromApi}
                style={styles.flatView}
                onScroll={""}
                numColumns={2}
                data={latestData}
                renderItem={pokemonComp}
                keyExtractor={(ele)=> parseInt(ele.url.substr(34))}
                
                
                />

        </SafeAreaView>
        
    )
}

function mapStateToProps(state){
    return{
        searchValue : state.searching.searchValue,
        searchResponse : state.getData.searchResponse,
        pokemon_Details : state.detail.pokemon_Details
    }
}

function mapDispatchToProps(dispatch){
    return{
        setLoading: ()=>dispatch(setLoading()),
        getSearchResponse : (w)=>dispatch(getSearchResponse(w)),
        updatePokemonDetails : (url)=>dispatch(updatePokemonDetails(url))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Listpage)


