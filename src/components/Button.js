import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ text }) => (
	<TouchableOpacity style={styles.button}>
		<Text style={styles.buttonText}>{text}</Text>
	</TouchableOpacity>
);

const styles = {
	button: {
		flex: 1,
		alignSelf: 'center',
		backgroundColor: '#E31C23',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#E31C23',
		marginLeft: 5,
		marginRight: 5,
	},
	buttonText: {
		alignSelf: 'center',
		color: '#fff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
	},
};

export default Button;
