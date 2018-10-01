/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { FlatList } from 'react-native';

import Album from './Album';
import type { Album as AlbumType } from '../types';

type Props = { albums: Array<AlbumType> };
type State = { albums: Array<AlbumType> };

class AlbumList extends Component<Props, State> {
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
				renderItem={({ item }) => <Album key={item.index} album={item} />}
				keyExtractor={item => item.name}
			/>
		);
	}
}

const styles = {
	list: {
		flex: 1,
	},
};

export default AlbumList;
