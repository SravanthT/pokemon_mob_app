import React from 'react';
import { View,ActivityIndicator,StyleSheet } from 'react-native';
import { connect } from 'react-redux';

function LoadingComp(props){
    const loading = props.isLoading
    return(
       <View style={loading && [styles.container, styles.horizontal]}>
           {loading ? <View ><ActivityIndicator size="large" color="#0000ff" /></View> : null }

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
        position:"absolute",
        zIndex:99,
        left:0,
        right:0,
        top:0,
        bottom:0,
        backgroundColor:"#fff",
        opacity:0.95,
        alignItems:"center",
        justifyContent: "center"
    },
    horizontal: {
      padding: 10
    }
  });