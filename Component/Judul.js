import React from 'react';
import {Text, View, Image} from 'react-native';
class Judul extends React.Component{

	render(){
		return(
			<View style={{ justifyContent:'center', alignItems:'center'}}>
			<Image source={require('./RM.png')} style={{width:250, height:250}} />
		<Text style={ini.judul}>SELAMAT DATANG!</Text>
        
			</View>
		

			)
	}

}
const ini = {
	judul:{
		color : "#1c4e8a",
		 fontSize : 30,
		 fontWeight: 'bold',
		 alignItems:'center',
		 justifycontent:'center'
	}

}
export default Judul;