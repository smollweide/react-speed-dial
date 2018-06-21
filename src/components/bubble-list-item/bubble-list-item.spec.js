import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import muiTheme from '../../../tests/context-mui-theme';
import getDomFromString from '../../../tests/utils/get-dom-from-string';
import getStylesFromShallowNode from '../../../tests/utils/get-styles-from-shallow-node';
import BubbleListItem from './bubble-list-item.js';

describe('<BubbleListItem />', () => {
	const context = { muiTheme };

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<MuiThemeProvider>
				<BubbleListItem primaryText="Hello world!" />
			</MuiThemeProvider>,
			div
		);
	});

	it('renders *primary text*', () => {
		const wrapper = shallow(<BubbleListItem primaryText="Hello world!" />, { context });
		expect(wrapper.text()).toEqual('Hello world!');
	});

	it('with prop *href* renders a "a" tag with href attribute', () => {
		const wrapper = shallow(<BubbleListItem href="/" primaryText="Hello world!" />, { context });
		expect(wrapper.find('a').nodes[0].props.href).toEqual('/');
	});

	it('with prop *rightAvatar* renders the avatar image', () => {
		const wrapper = shallow(
			<BubbleListItem
				primaryText="Hello world!"
				rightAvatar={<Avatar src={'https://picsum.photos/80/80/1'} />}
			/>,
			{ context }
		);
		expect(typeof wrapper.find('img')).toEqual('object');
	});

	it('with prop *isOpen = false* has opacity=0', () => {
		const wrapper = shallow(<BubbleListItem isOpen={false} primaryText="Hello world!" />, { context });
		expect(getStylesFromShallowNode(wrapper).opacity).toEqual('0');
	});

	it('with prop *isOpen = true* has opacity=1', () => {
		const wrapper = shallow(<BubbleListItem isOpen primaryText="Hello world!" />, { context });
		expect(getStylesFromShallowNode(wrapper).opacity).toEqual('1');
	});

	it('with prop *leftAvatar* renders the avatar image', () => {
		const wrapper = shallow(
			<BubbleListItem leftAvatar={<Avatar src={'https://picsum.photos/80/80/1'} />} primaryText="Hello world!" />,
			{ context }
		);
		expect(typeof wrapper.find('img')).toEqual('object');
	});

	it('find className', () => {
		const wrapper = shallow(<BubbleListItem className="m-bubble-list-item" />, { context });
		expect(wrapper.find('.m-bubble-list-item').length).toEqual(1);
	});

	it('simulate onClick', () => {
		const onButtonClick = sinon.spy();
		const wrapper = shallow(<BubbleListItem primaryText="Hello world!" onClick={onButtonClick} />, { context });
		wrapper.find('a').simulate('click');
		expect(onButtonClick.calledOnce).toEqual(true);
	});

	it('on keyUp enter not allowed', () => {
		const onKeyUp = sinon.spy();
		const wrapper = shallow(<BubbleListItem primaryText="Hello world!" onClick={onKeyUp} />, { context });
		wrapper.setState({
			isKeyboardFocused: false,
		});
		wrapper.find('a').simulate('keyUp', {
			keyCode: 13,
		});
		expect(onKeyUp.calledOnce).toEqual(false);
	});

	it('simulate onFocus', () => {
		const onFocus = sinon.spy();
		const wrapper = shallow(<BubbleListItem primaryText="Hello world!" onFocus={onFocus} />, { context });
		wrapper.find('a').simulate('focus');
		expect(onFocus.calledOnce).toEqual(true);
	});

	it('simulate onBlur', () => {
		const onBlur = sinon.spy();
		const wrapper = shallow(<BubbleListItem primaryText="Hello world!" onBlur={onBlur} />, { context });
		wrapper.find('a').simulate('blur');
		expect(onBlur.calledOnce).toEqual(true);
	});

	it('setFocus should focus refs.link', () => {
		const onFocus = sinon.spy();
		const instance = new BubbleListItem(
			{
				primaryText: 'Hello world!',
			},
			context
		);

		instance.refs = {
			link: {
				focus: onFocus,
			},
		};

		instance.setFocus();
		expect(onFocus.calledOnce).toEqual(true);
	});

	it('tabIndex for href link should be 2 if open', () => {
		const wrapper = shallow(<BubbleListItem isOpen href="/" primaryText="Hello world!" tabIndex={2} />, {
			context,
		});
		expect(getDomFromString(wrapper.find('a').html()).getAttribute('tabindex')).toEqual('2');
	});

	it('tabIndex for href link should be 1 if open', () => {
		const wrapper = shallow(<BubbleListItem isOpen href="/" primaryText="Hello world!" />, { context });
		expect(getDomFromString(wrapper.find('a').html()).getAttribute('tabindex')).toEqual('1');
	});

	it('renderContent returns something if direction is left or right', () => {
		const props = {
			isOpen: true,
			primaryText: 'Hallo',
			direction: 'left',
		};
		const instance = new BubbleListItem(props, context);
		expect(typeof instance.renderContent().props.children[1]).toEqual('object');
	});
});
