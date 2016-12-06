
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Home from '../home/home';
import ExampleBasic from '../example-basic/example-basic';
import ExampleTopLeft from '../example-top-left/example-top-left';
import ExampleInline from '../example-inline/example-inline';
import ExampleNoBackdrop from '../example-no-backdrop/example-no-backdrop';
import ExampleInbox from '../example-inbox/example-inbox';
import ExampleDirection from '../example-direction/example-direction';
import ExampleBubbleListStandalone1 from '../example-bubble-list-standalone-1/example-bubble-list-standalone-1';
import ExampleBubbleListStandalone2 from '../example-bubble-list-standalone-2/example-bubble-list-standalone-2';

injectTapEventPlugin();

const App = () => {
	return (
		<MuiThemeProvider>
			<div className="app">
				<Router history={hashHistory}>
					<Route component={Home} path="/" />
					<Route component={ExampleBasic} path="/basic" />
					<Route component={ExampleTopLeft} path="/top-left" />
					<Route component={ExampleInline} path="/inline" />
					<Route component={ExampleNoBackdrop} path="/no-backdrop" />
					<Route component={ExampleInbox} path="/inbox" />
					<Route component={ExampleDirection} path="/direction" />
					<Route component={ExampleDirection} path="/direction" />
					<Route component={ExampleBubbleListStandalone1} path="/bubble-list-standalone-1" />
					<Route component={ExampleBubbleListStandalone2} path="/bubble-list-standalone-2" />
				</Router>
			</div>
		</MuiThemeProvider>
	);
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;
