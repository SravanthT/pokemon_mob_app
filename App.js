import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import styles from './assets/styles'
import DetailsPage from './components/detailsPage';
import Listpage from './components/resultsPage';
import SearchPage from './components/searchPage';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderForApp from './components/header';



const Stack = createNativeStackNavigator();
function App() {
  
  return (
    <NavigationContainer>
      
      
      <HeaderForApp/>
      
      <Stack.Navigator initialRouteName='Home'>
      
            <Stack.Screen name="Home" component={SearchPage} options={{title:'Pokemon Search'}}/>
            <Stack.Screen name="Details" component={DetailsPage} options={{title:'Pokemon Details'}}/>
            <Stack.Screen name="Listpage" component={Listpage} options={{title:'Search Result'}} />
          
        </Stack.Navigator>    
      </NavigationContainer>
    
  );
}

export default App;

