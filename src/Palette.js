import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

export default class Palette extends Component {
	render () {
		const colorBoxes = this.props.colors.map((c) => (
			<ColorBox background={c.color} name={c.name} />
		));
		return (
			<div>
				{/* Navbar */}
				<div className='Palette'>
					{/* Palette */}
					<div className='Palette-colors'>
						{/* Color boxes */}
						{colorBoxes}
					</div>
					{/* Footer */}
				</div>
			</div>
		);
	}
}
