import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
	root        : {
		background     : `url(
			'https://cdn11.bigcommerce.com/s-feud0ek893/images/stencil/1024x1024/products/12366/26655/catalan-landscape-the-hunter-192324_joan-miro__78481.1582998846.jpg?c=1'
		)`,
		backgroundSize : 'cover',
		height         : '100vh',
		display        : 'flex',
		alignItem      : 'flex-start',
		justifyContent : 'center',
	},
	container   : {
		width         : '50%',
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
	goToPalette (id) {
		this.props.history.push(`/palette/${id}`);
	}
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
							return (
								<MiniPalette
									{...palette}
									handleClick={() => this.goToPalette(palette.id)}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
