import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
	root        : {
		background     : `url(
			'https://learninglab.si.edu/thumburl/thumbnail/1600x/inbound/resources/image/1289081/1474509842/file.jpg'
    )`,
		height         : '100%',
		display        : 'flex',
		alignItem      : 'flex-start',
		justifyContent : 'center',
	},
	container   : {
		width         : '50%',
		border        : '1px solid white',
		display       : 'flex',
		alignItems    : 'flex-start',
		flexDirection : 'column',
	},
	nav         : {
		display    : 'flex',
		alignItems : 'space-between',
		flexWrap   : 'wrap',
		color      : 'white',
	},
	miniPalette : {
		width               : '100%',
		boxSizing           : 'border-box',
		display             : 'grid',
		gridTemplateColumns : 'repeat(3, 30%)',
		gridGap             : '5%',
	},
};

class PaletteList extends Component {
	render () {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<div className={classes.nav}>
						<h1>React Colors</h1>
					</div>

					<div className={classes.miniPalette}>
						{this.props.palettes.map((palette) => {
							return <MiniPalette {...palette} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
