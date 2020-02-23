import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
export default class Races extends Component {
	state = {
		options: {}
	};
	componentDidMount() {
		let api = "http://dnd5eapi.co/api/";
		let render = async prop => {
			let response = await fetch(prop);
			return await response.json();
		};
		let x = render(api).then(data => {
			this.setState({
				options: data
			});
		});
	}
	render() {
		let test = () => {
			let { options } = this.state;
			let keys = [...Object.keys(options)];
			return keys.map(key => {
				return (
					<View>
						<Text>
							{key} is/are found at {options[key]}
						</Text>
					</View>
				);
			});
		};

		return <View>{test()}</View>;
	}
}
