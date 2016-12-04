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

describe('<BubbleList />', () => {

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

	it('prop [direction=up]', () => {
		const context = { muiTheme };
		const wrapper = shallow(
			<BubbleList isOpen direction="up" />, { context }
		);
		expect(getStylesFromShallowNode(wrapper).bottom).toEqual('0');
	});

	it('prop [direction=down]', () => {
		const context = { muiTheme };
		const wrapper = shallow(
			<BubbleList isOpen direction="down" />, { context }
		);
		expect(getStylesFromShallowNode(wrapper).top).toEqual('0');
	});

	it('prop [direction=right]', () => {
		const context = { muiTheme };
		const wrapper = shallow(
			<BubbleList isOpen direction="right" />, { context }
		);
		expect(getStylesFromShallowNode(wrapper).left).toEqual('0');
	});

	it('prop [direction=left]', () => {
		const context = { muiTheme };
		const wrapper = shallow(
			<BubbleList isOpen direction="left" />, { context }
		);
		expect(getStylesFromShallowNode(wrapper).right).toEqual('0');
	});

	it('prop [alignment=up]', () => {
		const context = { muiTheme };
		const wrapper = shallow(
			<BubbleList isOpen alignment="up" />, { context }
		);
		expect(getStylesFromShallowNode(wrapper).bottom).toEqual('-7px');
	});

	it('prop [alignment=down]', () => {
		const context = { muiTheme };
		const wrapper = shallow(
			<BubbleList isOpen alignment="down" />, { context }
		);
		expect(getStylesFromShallowNode(wrapper).top).toEqual('0');
	});

	it('prop [alignment=right]', () => {
		const context = { muiTheme };
		const wrapper = shallow(
			<BubbleList isOpen alignment="right" />, { context }
		);
		expect(getStylesFromShallowNode(wrapper).right).toEqual('0');
		expect(getStylesFromShallowNode(wrapper)['text-align']).toEqual('right');
	});

	it('prop [alignment=left]', () => {
		const context = { muiTheme };
		const wrapper = shallow(
			<BubbleList isOpen alignment="left" />, { context }
		);
		expect(getStylesFromShallowNode(wrapper).left).toEqual('0');
		expect(getStylesFromShallowNode(wrapper)['text-align']).toEqual('left');
	});

	it('find className', () => {
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
});
