import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
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
				<CopyToClipboard text={background}>
					<button className='copy-button'>Copy</button>
				</CopyToClipboard>
			</div>
		);
	}
}
