import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root       : {
		backgroundColor : 'rgba(0,0,0,0.1)',
		width           : '100%',
		border          : '1px solid black',
		borderRadius    : '5px',
		padding         : '0.5rem',
		position        : 'relative',
		overfloww       : 'hidden',
		'&:hover'       : {
			cursor : 'pointer',
		},
	},
	colors     : {
		background   : 'rgba(0,0,0,0.5)',
		width        : '100%',
		height       : '125px',
		borderRadius : '5px',
	},
	title      : {
		display        : 'flex',
		alignItems     : 'center',
		justifyContent : 'space-between',
		fontSize       : '1rem',
		position       : 'relative',
	},
	emoji      : {
		margin   : '0.5rem',
		fontSize : '1.5rem',
	},
	miniColors : {
		height       : '22%',
		width        : '20%',
		display      : 'inline-block',
		margin       : '0 auto',
		position     : 'relative',
		borderRadius : '5px',
	},
};
function MiniPalette (props) {
	const { classes, paletteName, emoji } = props;
	const miniPalette = props.colors.map((color) => {
		return (
			<div className={classes.miniColors} style={{ background: color.color }} />
		);
		console.log(color);
	});
	console.log('From minipalette:', props);
	return (
		<div className={classes.root}>
			<div className={classes.colors}>{miniPalette}</div>

			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
