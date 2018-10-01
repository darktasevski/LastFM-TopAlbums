/**
 * @format
 * @flow
 */
import React from 'react';
import { Text, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const Album = ({ album }) => (
	<Card>
		<CardSection>
			<View>
				<Text>{album.artist.name}</Text>
				<Text>{album.name}</Text>
			</View>
		</CardSection>
	</Card>
);

export default Album;
