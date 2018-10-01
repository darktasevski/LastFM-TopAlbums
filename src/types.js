/**
 * @format
 * @flow
 */
export type Album = {
	url: string,
	name: string,
	image: Array<{ '#text': string, size: string }>,
	artist: {
		mbid: string,
		name: string,
		url: string,
	},
};
