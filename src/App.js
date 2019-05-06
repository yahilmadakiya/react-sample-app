import React from 'react';
import { Router } from '@reach/router';

import Home from './Home';
import About from './About';

function App() {
	return (
		<Router>
			<Home path="/" />
			<About path='/about' />
		</Router>
	);
}

export default App;
