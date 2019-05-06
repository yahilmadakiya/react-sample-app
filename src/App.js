import React from 'react';
import { Router } from '@reach/router';

import './App.css';

import Home from './Home';
import About from './About';
import Post from './components/Post';

function App() {
	return (
		<Router>
			<Home path="/" />
			<About path='/about' />
			<Post path='/post/:id' />
		</Router>
	);
}

export default App;
