import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Avatar from 'material-ui/Avatar';
import { shallow } from 'enzyme';

import muiTheme from '../../../tests/context-mui-theme';
import getStylesFromShallowNode from '../../../tests/utils/get-styles-from-shallow-node';
import BubbleListItem from './bubble-list-item.jsx';

injectTapEventPlugin();

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<BubbleListItem
				primaryText="Hello world!"
			/>
		</MuiThemeProvider>
	), div);
});

it('renders without crashing with onClick', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<BubbleListItem
				primaryText="Hello world!"
				onClick={() => {}}
			/>
		</MuiThemeProvider>
	), div);
});

it('renders without crashing with onTouchTap', () => {
	const div = document.createElement('div');
	ReactDOM.render((
		<MuiThemeProvider>
			<BubbleListItem
				primaryText="Hello world!"
				onTouchTap={() => {}}
			/>
		</MuiThemeProvider>
	), div);
});

it('<BubbleListItem /> renders *primary text*', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleListItem
			primaryText="Hello world!"
		/>, { context }
	);
	expect(wrapper.text()).toEqual('Hello world!');
});


it('<BubbleListItem /> with prop *href* renders a "a" tag', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleListItem
			href="/"
			primaryText="Hello world!"
		/>, { context }
	);
	expect(typeof wrapper.find('a')).toEqual('object');
});

it('<BubbleListItem /> with prop *rightAvatar* renders the avatar image', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleListItem
			primaryText="Hello world!"
			rightAvatar={<Avatar src={'http://lorempixel.com/80/80/people/1'} />}
		/>, { context }
	);
	expect(typeof wrapper.find('img')).toEqual('object');
});

it('<BubbleListItem /> with prop *isOpen = false* has opacity=0', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleListItem
			isOpen={false}
			primaryText="Hello world!"
		/>, { context }
	);
	expect(getStylesFromShallowNode(wrapper).opacity).toEqual('0');
});

it('<BubbleListItem /> with prop *isOpen = true* has opacity=1', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleListItem
			isOpen
			primaryText="Hello world!"
		/>, { context }
	);
	expect(getStylesFromShallowNode(wrapper).opacity).toEqual('1');
});

it('<BubbleListItem /> with prop *leftAvatar* renders the avatar image', () => {
	const context = { muiTheme };
	const wrapper = shallow(
		<BubbleListItem
			leftAvatar={<Avatar src={'http://lorempixel.com/80/80/people/1'} />}
			primaryText="Hello world!"
		/>, { context }
	);

	expect(typeof wrapper.find('img')).toEqual('object');
});

it('<BubbleListItem /> find className', () => {
	const context = { muiTheme };
	const props = {
		className: 'm-bubble-list-item',
	};
	const wrapper = shallow(
		<BubbleListItem {...props} />, { context }
	);
	expect(wrapper.find('.m-bubble-list-item').length).toEqual(1);
});

