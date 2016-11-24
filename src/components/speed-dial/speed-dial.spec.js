import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import SpeedDial from './speed-dial.jsx';
import SpeedDialList from '../speed-dial-list/speed-dial-list.jsx';
import getDomFromString from '../../../tests/utils/get-dom-from-string';
import getStylesFromDomNode from '../../../tests/utils/get-styles-from-dom-node';

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

it('renders without crashing with SpeedDialList', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial>
				<SpeedDialList />
			</SpeedDial>
		</MuiThemeProvider>
	), div);
});

it('renders without crashing with closeOnSecondClick', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial closeOnSecondClick>
				<SpeedDialList />
			</SpeedDial>
		</MuiThemeProvider>
	), div);
});

it('renders without crashing with hasBackdrop=false', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial hasBackdrop={false}>
				<SpeedDialList />
			</SpeedDial>
		</MuiThemeProvider>
	), div);
});

it('renders without crashing with floatingActionButtonProps', () => {
	const div = document.createElement('div');
	const floatingActionButtonProps = {
		backgroundColor: '#fff',
		className: 'className',
		disabled: true,
		iconStyle: {},
		mini: true,
		secondary: true,
		style: {},
		zDepth: 3,
	};
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial floatingActionButtonProps={floatingActionButtonProps}>
				<SpeedDialList />
			</SpeedDial>
		</MuiThemeProvider>
	), div);
});

it('renders without crashing with primaryText', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial primaryText="primaryText">
				<SpeedDialList />
			</SpeedDial>
		</MuiThemeProvider>
	), div);
});

it('<SpeedDial /> with prop [positionV="top"] has top=0', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial
				positionV="top"
			>
				<ul><li><a /></li></ul>
			</SpeedDial>
		</MuiThemeProvider>
	), div);
	const element = getStylesFromDomNode(getDomFromString(div.innerHTML));
	expect(element.top).toEqual('0px');
});

it('<SpeedDial /> with prop [positionV="bottom"] has bottom=0', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial
				positionV="bottom"
			>
				<ul><li><a /></li></ul>
			</SpeedDial>
		</MuiThemeProvider>
	), div);
	const element = getStylesFromDomNode(getDomFromString(div.innerHTML));
	expect(element.bottom).toEqual('0px');
});

it('<SpeedDial /> with prop [positionH="top"] button wrapper has top=16px', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial
				positionH="top"
			>
				<ul><li><a /></li></ul>
			</SpeedDial>
		</MuiThemeProvider>
	), div);
	const button = getStylesFromDomNode(
		getDomFromString(div.innerHTML).getElementsByTagName('button')[0].parentNode.parentNode
	);
	expect(button.top).toEqual('16px');
});

it('<SpeedDial /> with prop [positionH="bottom"] button wrapper has bottom=16px', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial
				positionH="bottom"
			>
				<ul><li><a /></li></ul>
			</SpeedDial>
		</MuiThemeProvider>
	), div);
	const button = getStylesFromDomNode(
		getDomFromString(div.innerHTML).getElementsByTagName('button')[0].parentNode.parentNode
	);
	expect(button.bottom).toEqual('16px');
});

