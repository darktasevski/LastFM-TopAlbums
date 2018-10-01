/**
 * @format
 * @flow
 */
import React from 'react';
import { Text, View } from 'react-native';

const Album = ({ album }) => (
	<View>
		<Text>{album.name}</Text>
	</View>
);

export default Album;
