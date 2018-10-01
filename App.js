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

type Props = {};

export default class App extends Component<Props> {
	state = {
		albums: [],
	};

	async componentDidMount() {
		const { data } = await axios.get(
			`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=${keys.lastFMKey}&format=json`,
		);
		this.setState({ albums: data.albums.album });
		console.log(data);
	}

	static getDerivedStateFromProps(a, b) {
		console.log(a, b);
		return null;
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
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});
