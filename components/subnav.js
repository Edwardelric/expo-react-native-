import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class SubNavComponent extends React.Component {
	render() {
		return (
			<View style={styles.wrapper}>
				{
					[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
						return (
							<View style={styles.list} key={index}>
								<Icon name="home" style={styles.fontSize}/>
								<Text>保养</Text>
							</View>
						)
					})
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		paddingBottom: 20,
		borderBottomColor: '#333',
		borderBottomWidth: 1
	},
	list: {
		marginTop: 10,
		paddingLeft: 20,
		paddingRight: 20
	},
	fontSize: {
		fontSize: 22
	}
});