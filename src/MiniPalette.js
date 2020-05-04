import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root   : {
		backgroundColor : 'white',
		border          : '1px solid black',
		borderRadius    : '5px',
		padding         : '0.5rem',
		position        : 'relative',
		overfloww       : 'hidden',
		'&:hover'       : {
			cursor : 'pointer',
		},
	},
	colors : { backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '5px' },
	title  : {
		display        : 'flex',
		alignItems     : 'center',
		justifyContent : 'space-between',
		margin         : '0',
		paddingTop     : '0.5rem',
		padding        : '5px 5px',
		fontSize       : '1rem',
		position       : 'relative',
	},
	emoji  : {
		margin   : '0.5rem',
		fontSize : '1.5rem',
	},
};
function MiniPalette (props) {
	const { classes, paletteName, emoji } = props;
	console.log('From minipalette:', props.paletteName);
	return (
		<div className={classes.root}>
			<div className={classes.colors}>
				<h5 className={classes.title}>
					{paletteName} <span className={classes.emoji}>{emoji}</span>
				</h5>
			</div>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
