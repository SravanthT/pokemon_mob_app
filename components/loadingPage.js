import React from 'react';
import { View,ActivityIndicator,StyleSheet } from 'react-native';
import { connect } from 'react-redux';

function LoadingComp(props){
    const loading = props.isLoading
    return(
       <View>
           {loading ? <View style = {[styles.container, styles.horizontal]}><ActivityIndicator size="large" color="#0000ff" /></View> : null }

       </View>
    )
}

function mapStateToProps(state){
    return({
      isLoading:state.loading.isLoading
    })
  }
  function mapDispatchToProps(dispatch){
    return({
      setLoading : ()=>dispatch(setLoading())
    })
  }
  export default connect(mapStateToProps,mapDispatchToProps) (LoadingComp);

  const styles = StyleSheet.create({
    container: {
        zIndex:99,
      position:"relative",
      height:750,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });