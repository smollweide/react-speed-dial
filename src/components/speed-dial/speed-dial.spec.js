import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { shallow } from 'enzyme';

import muiTheme from '../../../tests/context-mui-theme';
import SpeedDial from './speed-dial.js';
import BubbleList from '../bubble-list/bubble-list.js';
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

it('renders without crashing with BubbleList', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial>
				<BubbleList />
			</SpeedDial>
		</MuiThemeProvider>
	), div);
});

it('renders without crashing with closeOnSecondClick', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial closeOnSecondClick>
				<BubbleList />
			</SpeedDial>
		</MuiThemeProvider>
	), div);
});

it('renders without crashing with hasBackdrop=false', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial hasBackdrop={false}>
				<BubbleList />
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
				<BubbleList />
			</SpeedDial>
		</MuiThemeProvider>
	), div);
});

it('renders without crashing with primaryText', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial primaryText="primaryText">
				<BubbleList />
			</SpeedDial>
		</MuiThemeProvider>
	), div);
});

it('renders without crashing with onClickPrimaryButton', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<SpeedDial onClickPrimaryButton={() => {}}>
				<BubbleList />
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

it('<BubbleList /> find className, classNameBackdrop and classNameButtonWrap', () => {
	const context = { muiTheme };
	const props = {
		children: [(<ul key="0"><li><a /></li></ul>)],
		className: 'o-speed-dial',
		classNameBackdrop: 'o-speed-dial__backdrop',
		classNameButtonWrap: 'o-speed-dial__btn-wrap',
	};
	const wrapper = shallow(
		<SpeedDial {...props} />, { context }
	);
	expect(wrapper.find('.o-speed-dial').length).toEqual(1);
	expect(wrapper.find('.o-speed-dial__backdrop').length).toEqual(1);
	expect(wrapper.find('.o-speed-dial__btn-wrap').length).toEqual(1);
});

it('<SpeedDial /> find classNameInTransition', () => {
	const context = { muiTheme };
	const props = {
		children: [(<ul key="0"><li><a /></li></ul>)],
		classNameInTransition: 'm-bubble-list--in-transition',
	};
	const wrapper = shallow(
		<SpeedDial {...props} />, { context }
	);
	wrapper.setState({ isInTransition: true });
	expect(wrapper.find('.m-bubble-list--in-transition').length).toEqual(1);
});

it('<SpeedDial /> find classNameOpen', () => {
	const context = { muiTheme };
	const props = {
		children: [(<ul key="0"><li><a /></li></ul>)],
		classNameOpen: 'm-bubble-list--open',
	};
	const wrapper = shallow(
		<SpeedDial {...props} />, { context }
	);
	wrapper.setState({ isOpen: true });
	expect(wrapper.find('.m-bubble-list--open').length).toEqual(1);
});

