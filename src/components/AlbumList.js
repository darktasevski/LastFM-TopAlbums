/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import Album from './Album';

type Content = { url?: string, name?: string };
type Props = { albums: Array<Content> };

class AlbumList extends Component<Props> {
	state = {
		albums: [],
	};

	static getDerivedStateFromProps(props, state) {
		if (props.albums !== state.albums) {
			return { albums: props.albums };
		}
		return null;
	}

	render() {
		const { albums } = this.state;

		return (
			<FlatList
				data={albums}
				style={styles.list}
				renderItem={album => <Album key={album.name} album={album.item} />}
				keyExtractor={item => item.name}
			/>
		);
	}
}

const styles = {
	list: {
		flex: 1,
		borderColor: 'red',
		borderWidth: 1,
	},
};

export default AlbumList;
