import React, { Component } from 'react';
import './ColorBox.css';

export default class ColorBox extends Component {
	render () {
		const { name, background } = this.props;
		return (
			<div
				style={{
					background
				}}
				className='ColorBox'>
				<span className='boxContent'>{name}</span>
				<span className='see-more'>More</span>
				<button className='copy-button'>Copy</button>
			</div>
		);
	}
}
