import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

export default class Palette extends Component {
	constructor (props) {
		super(props);
		this.state = { level: 500, format: 'hex' };
	}

	changeLevel = (level) => {
		this.setState({ level });
	};

	changeFormat = (value) => {
		this.setState({ format: value });
	};
	render () {
		const colorBoxes = this.props.palette.colors[this.state.level].map((c) => (
			<ColorBox background={c[this.state.format]} name={c.name} key={c.id} />
		));
		return (
			<React.Fragment>
				<div>
					{/* Navbar */}
					<Navbar
						level={this.state.level}
						changeLevel={this.changeLevel}
						handleChange={this.changeFormat}
					/>
					<div className='Palette'>
						{/* Palette */}
						<div className='Palette-colors'>
							{/* Color boxes */}
							{colorBoxes}
						</div>
						{/* Todo: the Footer is not appearing */}
						<footer className='Palette-footer'>
							The FOOTER
							<span className='emoji'>{this.props.palette.emoji}</span>
						</footer>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
