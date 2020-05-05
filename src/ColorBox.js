import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './ColorBox.css';
import { Link } from 'react-router-dom';

export default class ColorBox extends Component {
	constructor (props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState () {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}
	render () {
		const { name, background } = this.props;
		return (
			<div
				style={{
					background,
				}}
				className='ColorBox'>
				<div
					style={{ background }}
					className={`copy-overlay ${this.state.copied && 'show'}`}
				/>
				<div className={`copy-msg ${this.state.copied && 'show'}`}>
					<h1>copied!</h1>
					<p>{background}</p>
				</div>
				<div className='copy-container'>
					<span className='boxContent'>{name}</span>
				</div>
				<Link to={this.props.moreUrl} onClick={(evt) => evt.stopPropagation()}>
					<span className='see-more'>More</span>
				</Link>
				<CopyToClipboard text={background} onCopy={this.changeCopyState}>
					<button className='copy-button'>Copy</button>
				</CopyToClipboard>
			</div>
		);
	}
}
