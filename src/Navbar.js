import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css';

export default class Navbar extends Component {
	render () {
		return (
			<header>
				<div className='Navbar'>
					<div className='logo'>
						<a href='#'>ReactColoPicker</a>
					</div>

					<span className='level-text'>Level: {this.props.level}</span>
					<div className='slider'>
						<Slider
							min={100}
							max={900}
							step={100}
							defaultValue={this.props.level}
							onAfterChange={this.props.changeLevel}
						/>
					</div>
				</div>
			</header>
		);
	}
}
