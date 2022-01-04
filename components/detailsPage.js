import React from 'react';
import {View,Text,Button,StyleSheet} from "react-native";
import styles from '../assets/styles';

export default function DetailsPage({history}){
    return (
        <View style={styles.container}>
        <Text>This is Details Page</Text>
        <Text>Details of the item choosen will be displayed here.</Text>
        <Button 
            title="Navigate"
        />
    </View>
    )
}

