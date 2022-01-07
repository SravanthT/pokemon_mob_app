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
      backgroundColor:"pink",
      margin:5,
      width:175,
      height:200,
      justifyContent:"center",
      borderTopLeftRadius:40,
      borderBottomRightRadius:40,
      shadowOffset: {width:5,height:5},
      shadowOpacity:0.2,
      shadowColor:"#171717",shadowRadius:5
    },
    pokeHeading:{
      fontFamily: "sans-serif-medium",
      fontWeight:"800",
      paddingTop:5,
      fontSize: 17,
      textDecorationStyle:"dotted",
      textAlign:"center"  
    },
    svgStyles:{
      padding:10,
      backgroundColor: "red",
    },listpage:{
      flex:1,
      flexBasis:"1/2",
      flexWrap:"wrap",
    }
  });

  export default styles;