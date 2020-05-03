import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PaletteList extends Component {
	render () {
		const paletteList = this.props.palettes.map((c) => {
			return (
				<Link to={`/palette/${c.id}`}>
					<h1>{c.paletteName}</h1>
				</Link>
			);
		});
		console.log(this.props.palettes);
		return <div>{paletteList}</div>;
	}
}
