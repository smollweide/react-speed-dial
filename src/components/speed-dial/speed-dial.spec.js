import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SpeedDial from './speed-dial.jsx';

injectTapEventPlugin();

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial>
				<ul><li><a /></li></ul>
			</SpeedDial>
		</MuiThemeProvider>
	), div);
});
