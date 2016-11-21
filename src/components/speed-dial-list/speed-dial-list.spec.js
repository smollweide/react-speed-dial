import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SpeedDialList from './speed-dial-list.jsx';
import SpeedDialListItem from '../speed-dial-list-item/speed-dial-list-item.jsx';

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

it('renders one list item', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDialList>
				<SpeedDialListItem primaryText="Item 1" />
			</SpeedDialList>
		</MuiThemeProvider>
	), div);
});

it('renders three list item', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDialList>
				<SpeedDialListItem primaryText="Item 1" />
				<SpeedDialListItem primaryText="Item 2" />
				<SpeedDialListItem primaryText="Item 3" />
			</SpeedDialList>
		</MuiThemeProvider>
	), div);
});

it('renders three li', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDialList>
				<li><a /></li>
				<li><a /></li>
				<li><a /></li>
			</SpeedDialList>
		</MuiThemeProvider>
	), div);
});

it('renders mixture between li and listItems', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDialList>
				<SpeedDialListItem primaryText="Item 1" />
				<SpeedDialListItem primaryText="Item 2" />
				<SpeedDialListItem primaryText="Item 3" />
				<li><a /></li>
				<li><a /></li>
				<li><a /></li>
			</SpeedDialList>
		</MuiThemeProvider>
	), div);
});
