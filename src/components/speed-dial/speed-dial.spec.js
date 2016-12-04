import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import muiTheme from '../../../tests/context-mui-theme';
import SpeedDial from './speed-dial.js';
import BubbleList from '../bubble-list/bubble-list.js';
import getDomFromString from '../../../tests/utils/get-dom-from-string';
import getStylesFromDomNode from '../../../tests/utils/get-styles-from-dom-node';

injectTapEventPlugin();

describe('<SpeedDial />', () => {

	const context = { muiTheme };

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

	it('with prop [positionV="top"] has top=0', () => {
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

	it('with prop [positionV="bottom"] has bottom=0', () => {
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

	it('with prop [positionH="top"] button wrapper has top=16px', () => {
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

	it('with prop [positionH="bottom"] button wrapper has bottom=16px', () => {
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

	it('find className, classNameBackdrop and classNameButtonWrap', () => {
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

	it('find classNameInTransition', () => {
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

	it('find classNameOpen', () => {
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

	it('on backdrop keyUp enter will close', () => {
		const props = {
			children: [(<ul key="0"><li><a /></li></ul>)],
			classNameBackdrop: 'o-speed-dial__backdrop',
		};
		const wrapper = shallow(
			<SpeedDial {...props} />, { context }
		);
		const aTag = wrapper.find('.o-speed-dial__backdrop').find('a');

		wrapper.setState({
			isOpen: true,
		});
		aTag.simulate('keyUp', {
			keyCode: 13,
		});
		expect(wrapper.state().isOpen).toEqual(false);
	});

	it('on backdrop keyUp something will not close', () => {
		const props = {
			children: [(<ul key="0"><li><a /></li></ul>)],
			classNameBackdrop: 'o-speed-dial__backdrop',
		};
		const wrapper = shallow(
			<SpeedDial {...props} />, { context }
		);
		wrapper.setState({
			isOpen: true,
		});
		const aTag = wrapper.find('.o-speed-dial__backdrop').find('a');

		aTag.simulate('keyUp', {
			keyCode: 10,
		});
		expect(wrapper.state().isOpen).toEqual(true);
	});

	it('on backdrop focus and blur', () => {
		const props = {
			children: [(<ul key="0"><li><a /></li></ul>)],
			classNameBackdrop: 'o-speed-dial__backdrop',
		};
		const wrapper = shallow(
			<SpeedDial {...props} />, { context }
		);
		const aTag = wrapper.find('.o-speed-dial__backdrop').find('a');

		aTag.simulate('focus');
		expect(wrapper.state().isBackdropFocused).toEqual(true);

		aTag.simulate('blur');
		expect(wrapper.state().isBackdropFocused).toEqual(false);
	});

	it('on focus primary text - focus FloatingActionButton', () => {
		const onFocus = sinon.spy();
		const props = {
			primaryText: 'Hallo',
			children: [(<ul key="0"><li><a /></li></ul>)],
			classNameBackdrop: 'o-speed-dial__backdrop',
		};
		const instance = new SpeedDial(props, context);
		instance.refs = {
			btn: {
				refs: {
					container: {
						refs: {
							enhancedButton: {
								focus: onFocus,
							},
						},
					},
				},
			},
		};
		instance.handleFocusPrimaryText();
		expect(onFocus.calledOnce).toEqual(true);
	});

	it('on click open - focus first list item', () => {
		const onFocus = sinon.spy();
		const props = {
			primaryText: 'Hallo',
			children: [(<ul key="0"><li><a /></li></ul>)],
		};
		const instance = new SpeedDial(props, context);
		instance.refs = {
			list: {
				refs: {
					listItem0: {
						setFocus: onFocus,
					},
				},
			},
		};
		instance.handleFocusFirstListItem();
		expect(onFocus.calledOnce).toEqual(true);
	});

	it('on click open - focus first list item failed', () => {
		const onFocus = sinon.spy();
		const props = {
			primaryText: 'Hallo',
			children: [(<ul key="0"><li><a /></li></ul>)],
		};
		const instance = new SpeedDial(props, context);
		instance.refs = {
			list: {
				refs: {},
			},
		};
		instance.handleFocusFirstListItem();
		expect(onFocus.calledOnce).toEqual(false);
	});

	it('on click ActionButton', () => {
		const props = {
			children: [(<ul key="0"><li><a /></li></ul>)],
		};
		const wrapper = shallow(
			<SpeedDial {...props} />, { context }
		);

		wrapper.find('FloatingActionButton').simulate('touchTap');
		expect(wrapper.state().isOpen).toEqual(true);
	});

	it('on click ActionButton again', () => {
		const onClickPrimaryButton = sinon.spy();
		const props = {
			children: [(<ul key="0"><li><a /></li></ul>)],
			onClickPrimaryButton,
		};
		const wrapper = shallow(
			<SpeedDial {...props} />, { context }
		);
		wrapper.setState({
			isOpen: true,
		});

		wrapper.find('FloatingActionButton').simulate('touchTap');
		expect(wrapper.state().isOpen).toEqual(false);
		expect(onClickPrimaryButton.calledOnce).toEqual(true);
	});

	it('tabIndex for primaryText should be 2', () => {
		const props = {
			children: [(<ul key="0"><li><a /></li></ul>)],
			primaryText: 'Hello',
			tabIndex: 2,
		};
		const wrapper = shallow(
			<SpeedDial {...props} />, { context }
		);
		wrapper.setState({
			isOpen: true,
		});
		expect(wrapper.find('BubbleListItem').node.props.tabIndex).toEqual(2);
	});

	it('tabIndex for primaryText should be -1', () => {
		const props = {
			children: [(<ul key="0"><li><a /></li></ul>)],
			primaryText: 'Hello',
			tabIndex: 2,
		};
		const wrapper = shallow(
			<SpeedDial {...props} />, { context }
		);
		expect(wrapper.find('BubbleListItem').node.props.tabIndex).toEqual(-1);
	});

	it('closeOnSecondClick = false', () => {
		const props = {
			children: [(<ul key="0"><li><a /></li></ul>)],
			primaryText: 'Hello',
			closeOnSecondClick: false,
		};
		const wrapper = shallow(
			<SpeedDial {...props} />, { context }
		);
		wrapper.setState({
			isOpen: true,
		});
		wrapper.find('FloatingActionButton').simulate('touchTap');
		expect(wrapper.state().isOpen).toEqual(true);
	});

	it('getDirection by children `BubbleList`', () => {
		const props = {
			primaryText: 'Hallo',
			children: {
				props: {
					direction: 'down',
				},
			},
		};
		const instance = new SpeedDial(props, context);
		expect(instance.getDirection()).toEqual('down');
	});

	it('getDirection by positionV', () => {
		const props = {
			primaryText: 'Hallo',
			positionV: 'bottom',
			children: [(<ul key="0"><li><a /></li></ul>)],
		};
		const instance = new SpeedDial(props, context);
		expect(instance.getDirection()).toEqual('up');
	});

	it('renderPrimaryText returns null if direction is left or right', () => {
		const props = {
			primaryText: 'Hallo',
			positionV: 'bottom',
			children: {
				props: {
					direction: 'left',
				},
			},
		};
		const instance = new SpeedDial(props, context);
		expect(instance.renderPrimaryText()).toEqual(null);
	});

	it('getAlignment by children `BubbleList`', () => {
		const props = {
			primaryText: 'Hallo',
			children: {
				props: {
					alignment: 'left',
				},
			},
		};
		const instance = new SpeedDial(props, context);
		expect(instance.getAlignment()).toEqual('left');
	});

	it('getAlignment by positionH', () => {
		const props = {
			primaryText: 'Hallo',
			positionH: 'right',
			children: [(<ul key="0"><li><a /></li></ul>)],
		};
		const instance = new SpeedDial(props, context);
		expect(instance.getAlignment()).toEqual('right');
	});

});

