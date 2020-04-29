import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class Palette extends Component {
	constructor (props) {
		super(props);
		this.state = { level: 500 };
	}

	changeLevel = (level) => {
		this.setState({ level });
		//	console.log(level);
	};
	render () {
		const colorBoxes = this.props.palette.colors[this.state.level].map((c) => (
			<ColorBox background={c.hex} name={c.name} />
		));
		return (
			<div>
				<Slider
					min={100}
					max={900}
					step={100}
					defaultValue={this.state.level}
					onAfterChange={this.changeLevel}
				/>
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
