
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import TableExamples from '../table-examples/table-examples.jsx';
import ExampleBasic from '../example-basic/example-basic.jsx';
import ExampleMinimal from '../example-minimal/example-minimal.jsx';
import './app.css';

injectTapEventPlugin();

const App = () => {
	return (
		<MuiThemeProvider>
			<div className="app">
				<div className="app-header">
					<h2>Welcome to react speed dial (Material UI)</h2>
				</div>
				<TableExamples />
				<Router
					history={hashHistory}
					onUpdate={() => window.scrollTo(0, 0)}
				>
					<Route component={ExampleBasic} path="/" />
					<Route component={ExampleMinimal} path="/minimal" />
				</Router>
			</div>
		</MuiThemeProvider>
	);
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;
