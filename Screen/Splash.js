import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Splash extends Component{
    render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.title}>Halo, Ini Halaman Splash</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center',
        justifyContent :'center'
    },

    title: {
        fontWeight: 'bold',
        fontSize : 18,
        color:'black'
    }


})