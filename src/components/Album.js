/**
 * @format
 * @flow
 */
import React from 'react';
import {
	Text, View, Image, Linking,
} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

import type { Album } from '../types';

type Props = {
	album: Album,
};

export default ({ album }: Props) => (
	<Card>
		<CardSection>
			<View style={styles.thumbnailContainer}>
				<Image
					style={styles.thumbnail}
					source={{ uri: 'https://www.shareicon.net/data/256x256/2015/08/31/93745_logo_512x512.png' }}
				/>
			</View>
			<View style={styles.header}>
				<Text style={styles.headerText}>{album.name}</Text>
				<Text style={styles.headerAuthor}>{album.artist.name}</Text>
			</View>
		</CardSection>
		<CardSection>
			<Image style={styles.albumImage} source={{ uri: album.image[2]['#text'] }} resizeMode="contain" />
		</CardSection>
		<CardSection>
			<Button onPress={() => Linking.openURL(album.url)} text="Details" />
		</CardSection>
	</Card>
);

const styles = {
	header: {
		// hack to allow text to break if the album name is to long
		width: 0,
		flexGrow: 1,

		justifyContent: 'space-around',
	},
	headerText: {
		fontSize: 17,
		fontWeight: 'bold',
	},
	headerAuthor: {
		color: '#777',
	},
	thumbnail: {
		width: 40,
		height: 40,
	},
	thumbnailContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 10,
	},
	albumImage: {
		height: 350,
		// hack to make sure that the image take full width
		flex: 1,
		width: null,
	},
};
