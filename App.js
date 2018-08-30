/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Judul from './Component/Judul';

const instructions = Platform.select({
  
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Judul/>
       <Image source={require('./fikri.jpg')} style={{width:240, height:300}} />
      <Text>Siswa GUDMODE : FIKRI</Text>
      <Text>XI RPL 3</Text>
      <Text>No Absen 28 Cuyy</Text>
        <Text style={styles.welcome}>
          
        </Text>
        <Text style={styles.instructions}>
          
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
