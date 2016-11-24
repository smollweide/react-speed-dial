
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Home from '../home/home.jsx';
import ExampleBasic from '../example-basic/example-basic.jsx';
import ExampleTopLeft from '../example-top-left/example-top-left.jsx';

injectTapEventPlugin();

const App = () => {
	return (
		<MuiThemeProvider>
			<div className="app">
				<Router
					history={hashHistory}
					onUpdate={() => window.scrollTo(0, 0)}
				>
					<Route component={Home} path="/" />
					<Route component={ExampleBasic} path="/basic" />
					<Route component={ExampleTopLeft} path="/top-left" />
				</Router>
			</div>
		</MuiThemeProvider>
	);
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;
