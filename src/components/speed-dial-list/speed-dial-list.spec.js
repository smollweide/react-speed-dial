import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { shallow } from 'enzyme';

import SpeedDialList from './speed-dial-list.jsx';
import SpeedDialListItem from '../speed-dial-list-item/speed-dial-list-item.jsx';
import getDomFromString from '../../../tests/utils/get-dom-from-string';
import getStylesFromShallowNode from '../../../tests/utils/get-styles-from-shallow-node';
import getStylesFromDomNode from '../../../tests/utils/get-styles-from-dom-node';
import muiTheme from '../../../tests/context-mui-theme';

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

it('<SpeedDialListItem /> prop [positionV=top][isOpen=false] has top=16px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialList positionV="top" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).top).toEqual('16px');
});

it('<SpeedDialListItem /> prop [positionV=top][isOpen=true] has top=72px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialList isOpen positionV="top" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).top).toEqual('72px');
});

it('<SpeedDialListItem /> prop [positionV=bottom][isOpen=false] has top=16px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialList positionV="bottom" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).bottom).toEqual('16px');
});

it('<SpeedDialListItem /> prop [positionV=bottom][isOpen=true] has top=72px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialList isOpen positionV="bottom" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).bottom).toEqual('72px');
});

it('<SpeedDialListItem /> prop [positionH=left] has left=24px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialList positionH="left" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).left).toEqual('24px');
});

it('<SpeedDialListItem /> prop [positionH=right] has right=24px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<SpeedDialList positionH="right" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).right).toEqual('24px');
});





