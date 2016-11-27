import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { shallow } from 'enzyme';

import BubbleList from './bubble-list.js';
import BubbleListItem from '../bubble-list-item/bubble-list-item.js';
import getStylesFromShallowNode from '../../../tests/utils/get-styles-from-shallow-node';
import muiTheme from '../../../tests/context-mui-theme';

injectTapEventPlugin();

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<BubbleList>
				<li><a /></li>
			</BubbleList>
		</MuiThemeProvider>
	), div);
});

it('renders one list item', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<BubbleList>
				<BubbleListItem primaryText="Item 1" />
			</BubbleList>
		</MuiThemeProvider>
	), div);
});

it('renders three list item', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<BubbleList>
				<BubbleListItem primaryText="Item 1" />
				<BubbleListItem primaryText="Item 2" />
				<BubbleListItem primaryText="Item 3" />
			</BubbleList>
		</MuiThemeProvider>
	), div);
});

it('renders three li', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<BubbleList>
				<li><a /></li>
				<li><a /></li>
				<li><a /></li>
			</BubbleList>
		</MuiThemeProvider>
	), div);
});

it('renders mixture between li and listItems', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<BubbleList>
				<BubbleListItem primaryText="Item 1" />
				<BubbleListItem primaryText="Item 2" />
				<BubbleListItem primaryText="Item 3" />
				<li><a /></li>
				<li><a /></li>
				<li><a /></li>
			</BubbleList>
		</MuiThemeProvider>
	), div);
});

it('<BubbleList /> prop [positionV=top][isOpen=false] has top=16px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleList positionV="top" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).top).toEqual('16px');
});

it('<BubbleList /> prop [positionV=top][isOpen=true] has top=72px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleList isOpen positionV="top" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).top).toEqual('72px');
});

it('<BubbleList /> prop [positionV=bottom][isOpen=false] has top=16px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleList positionV="bottom" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).bottom).toEqual('16px');
});

it('<BubbleList /> prop [positionV=bottom][isOpen=true] has top=72px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleList isOpen positionV="bottom" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).bottom).toEqual('72px');
});

it('<BubbleList /> prop [positionH=left] has left=24px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleList positionH="left" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).left).toEqual('24px');
});

it('<BubbleList /> prop [positionH=right] has right=24px', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleList positionH="right" />, { context }
	);
	expect(getStylesFromShallowNode(wrapper).right).toEqual('24px');
});

it('<BubbleList /> find className', () => {
	const context = { muiTheme };
	const props = {
		children: [(<li key="0"><a /></li>)],
		className: 'm-bubble-list',
	};
	const wrapper = shallow(
		<BubbleList {...props} />, { context }
	);
	expect(wrapper.find('.m-bubble-list').length).toEqual(1);
});
