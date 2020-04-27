import React from 'react';
import './App.css';
import Pallette from './Pallette';
import seedColors from './seedColors';

function App () {
	return (
		<div>
			<Pallette {...seedColors[4]} />
		</div>
	);
}

export default App;
