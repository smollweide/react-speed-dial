import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SpeedDialList from './speed-dial-list.jsx';

injectTapEventPlugin();

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDialList>
				<li><a /></li>
			</SpeedDialList>
		</MuiThemeProvider>
	), div);
});
