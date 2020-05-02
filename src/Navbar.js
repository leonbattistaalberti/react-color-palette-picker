import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slider from 'rc-slider';
import './Navbar.css';

export default class Navbar extends Component {
	constructor (props) {
		super(props);
		this.state = { format: 'hex', open: false };
	}

	// Handles format change in the Snackbar
	handleChange = (evt) => {
		this.setState({ format: evt.target.value, open: true });
		this.props.handleChange(evt.target.value);
	};

	// Closes Snackbar if clicked anywhere on the window
	closeSnackbar = () => {
		this.setState({ open: false });
	};

	render () {
		return (
			<header>
				<div className='Navbar'>
					<div className='logo'>
						<a href='/'>ReactColoPicker</a>
					</div>

					<span className='level-text'>Level: {this.props.level}</span>
					<div className='slider'>
						{/* Slider component */}
						<Slider
							min={100}
							max={900}
							step={100}
							defaultValue={this.props.level}
							onAfterChange={this.props.changeLevel}
						/>
					</div>
					<div className='select-container'>
						{/* Select dropdown menu for changing format */}
						<Select value={this.state.format} onChange={this.handleChange}>
							<MenuItem value='hex'> HEX #ffffff</MenuItem>
							<MenuItem value='rgb'> RGB (255,255,255)</MenuItem>
							<MenuItem value='rgba'> RGBA (255,255,255,1)</MenuItem>
						</Select>
					</div>
				</div>
				{/* Snackbar component */}
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					open={this.state.open}
					autoHideDuration={3000}
					message={
						<span id='message'>
							Format Changed to {this.state.format.toUpperCase()}
						</span>
					}
					ContentProps={{ 'aria-describedby': 'message-if' }}
					onClose={this.closeSnackbar}
					action={[
						// Close icon on Snackbar
						<IconButton
							onClick={this.closeSnackbar}
							close='inherit'
							key='close'
							aria-label='close'>
							<CloseIcon />
						</IconButton>,
					]}
				/>
			</header>
		);
	}
}
