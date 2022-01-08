import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      flexBasis:1/2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#397af8',
      marginBottom: 20,
      width: '100%',
      paddingVertical: 15,
    },
    gridView:{
      flex:1,
      margin:5,
      width:175,
      height:200,
      justifyContent:"center",
      borderTopLeftRadius:30,
      borderBottomRightRadius:15,
      shadowOpacity:0.2,
      shadowColor:"#171717",
      shadowRadius:5,
      zIndex:-1,
      marginHorizontal:8
    },
    pokeHeading:{
      fontFamily: "sans-serif-medium",
      fontWeight:"800",
      paddingTop:5,
      fontSize: 17,
      textDecorationStyle:"dotted",
      textAlign:"center",
      marginHorizontal:5,
      padding:3,
      backgroundColor:"#fff" ,
      borderRadius:5, 
      zIndex:0,
    },
    svgStyles:{
      zIndex:2,
      padding:5,
      backgroundColor: "red",
      elevation:10,
      height:200,
    },shadow:{
      shadowOffset:{width:0,height:2},
      shadowColor:"#000",
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:3

    },listPageView:{
      marginHorizontal: "auto" ,
      justifyContent:"space-between"
    },flatView:{
      marginHorizontal:"auto",
      alignContent:"center"
    },bookmark:{
      flex:1/6,
      borderColor:"blue",
      borderWidth:1,
      position:"absolute",
      height:40,
      width:40,
      backgroundColor:"#fff",
      zIndex:99,
      top:5,
      right:-10,

    }
  });

  export default styles;