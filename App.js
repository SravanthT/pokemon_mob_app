import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import SearchPage from './components/searchPage';

export default function App() {
  return (
    <View style={styles.hea}>
      <Header
          
          placement="left"
          centerComponent={{ text: '𝙋𝙤𝙠𝙚𝙙𝙚𝙭', style: styles.heading }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      <SearchPage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },heading: {
    
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
});
