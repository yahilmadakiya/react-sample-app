import React from 'react';
import { Router } from '@reach/router';

import './App.css';

import Home from './Home';
import About from './About';
import Post from './components/Post';
import Users from './components/Users';
import Page from './components/Page';
import User from './components/User';

function App() {
	return (
		<Router>
			<Home path="/" />
			<Page path="/page/:pageNumber" />
			<About path='/about' />
			<Post path='/post/:id' />
			<Users path='/users/' />
			<User path='/user/:id' />
		</Router>
	);
}

export default App;
