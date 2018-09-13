import React from 'react';
import {Text, View} from 'react-native';
class Judul extends React.Component{

	render(){
		return(
			<View>
		<Text style={ini.judul}>Hallo!!!</Text>
        <Image source={require('./fikri.jpg')} style={{width:140, height:200}} />
        <Text>Nama : Muhammad Fikri Sidqi</Text>
        <Text>Kelas : XI RPL 3</Text>
        <Text>No Absen : 28</Text>
			</View>
		

			)
	}

}
const ini = {
	judul:{
		color : "#1c4e8a",
		 fontSize : 50,
		 fontWeight: 'bold'
	}

}
export default Judul;