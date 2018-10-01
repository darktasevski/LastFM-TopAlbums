/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';

import keys from './env';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

import type { Album } from './src/types';

type State = { albums?: Array<Album> };

export default class App extends Component<State> {
	static defaultProps = {
		albums: [],
	};

	state = {
		albums: [],
	};

	async componentDidMount() {
		const { data } = await axios.get(
			`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=${keys.lastFMKey}&format=json`,
		);
		this.setState({ albums: data.albums.album });
	}

	render() {
		return (
			<View style={styles.container}>
				<Header text="Albums" />
				<AlbumList albums={this.state.albums} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
});
