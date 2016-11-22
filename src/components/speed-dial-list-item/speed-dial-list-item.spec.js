import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Avatar from 'material-ui/Avatar';
import { shallow } from 'enzyme';

import muiTheme from '../../../tests/context-mui-theme';
import getStylesFromShallowNode from '../../../tests/utils/get-styles-from-shallow-node';
import SpeedDialListItem from './speed-dial-list-item.jsx';

injectTapEventPlugin();

it('<SpeedDialListItem /> renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDialListItem
				primaryText="Hello world!"
			/>
		</MuiThemeProvider>
	), div);
});

it('<SpeedDialListItem /> renders *primary text*', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialListItem
			primaryText="Hello world!"
		/>, { context }
	);
	expect(wrapper.text()).toEqual('Hello world!');
});


it('<SpeedDialListItem /> with prop *href* renders a "a" tag', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialListItem
			href="/"
			primaryText="Hello world!"
		/>, { context }
	);
	expect(typeof wrapper.find('a')).toEqual('object');
});

it('<SpeedDialListItem /> with prop *rightAvatar* renders the avatar image', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialListItem
			rightAvatar={<Avatar src={'http://lorempixel.com/80/80/people/1'} />}
			primaryText="Hello world!"
		/>, { context }
	);

	//console.log(wrapper.find('img').last().options);
	expect(typeof wrapper.find('img')).toEqual('object');
});

it('<SpeedDialListItem /> with prop *isOpen = false* has opacity=0', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialListItem
			isOpen={false}
			primaryText="Hello world!"
		/>, { context }
	);
	expect(getStylesFromShallowNode(wrapper).opacity).toEqual('0');
});

it('<SpeedDialListItem /> with prop *isOpen = true* has opacity=1', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialListItem
			isOpen
			primaryText="Hello world!"
		/>, { context }
	);
	expect(getStylesFromShallowNode(wrapper).opacity).toEqual('1');
});

it('<SpeedDialListItem /> with prop *isInTransition = true* should render', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDialListItem
				isOpen
				isInTransition
				primaryText="Hello world!"
			/>
		</MuiThemeProvider>
	), div);
});
