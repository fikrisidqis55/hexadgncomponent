import React from 'react';
import { View, Text, Button, Image, TextInput } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Judul from './Component/Judul';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ justifyContent:'center', alignItems:'center'}}>
        
        <Image source={require('./RM.png')} style={{ width:100, height:100}} />
                <TextInput
                    style={{width: 150,marginTop:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}></TextInput>
                

                <TextInput
                    style={{width: 150}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}></TextInput>
        <Button
          title="LOGIN"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Judul/>
      </View>
    );
  }  
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',

});