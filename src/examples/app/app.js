
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Home from '../home/home.js';
import ExampleBasic from '../example-basic/example-basic.js';
import ExampleTopLeft from '../example-top-left/example-top-left.js';
import ExampleNoBackdrop from '../example-no-backdrop/example-no-backdrop.js';
import ExampleInbox from '../example-inbox/example-inbox.js';

injectTapEventPlugin();

const App = () => {
	return (
		<MuiThemeProvider>
			<div className="app">
				<Router history={hashHistory}>
					<Route component={Home} path="/" />
					<Route component={ExampleBasic} path="/basic" />
					<Route component={ExampleTopLeft} path="/top-left" />
					<Route component={ExampleNoBackdrop} path="/no-backdrop" />
					<Route component={ExampleInbox} path="/inbox" />
				</Router>
			</div>
		</MuiThemeProvider>
	);
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;