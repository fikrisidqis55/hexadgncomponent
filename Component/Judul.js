import React from 'react';
import {Text, View} from 'react-native';
class Judul extends React.Component{

	render(){
		return(
			<View>
				<Text style={ini.judul}>{this.props.hayo}
				</Text>
				
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