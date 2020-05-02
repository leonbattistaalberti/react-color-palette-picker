import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

function App () {
	return (
		<div>
			<Switch>
				<Route exact path='/' render={() => <h1>Homepage</h1>} />
				<Route exact path='/palette/:id' render={() => <h1>Palette</h1>} />
				{/* <Palette palette={generatePalette(seedColors[4])} /> */}
			</Switch>
		</div>
	);
}

export default App;
