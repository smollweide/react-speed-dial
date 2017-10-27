import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import muiTheme from '../../../tests/context-mui-theme';
import SpeedDial from './speed-dial.js';
import BubbleList from '../bubble-list/bubble-list.js';
import getDomFromString from '../../../tests/utils/get-dom-from-string';
import getStylesFromDomNode from '../../../tests/utils/get-styles-from-dom-node';
import getStylesFromShallowNode from '../../../tests/utils/get-styles-from-shallow-node';

const context = { muiTheme };
const getShallowNode = props => {
	const defaultProps = {
		children: [
			<ul key="0">
				<li>
					<a />
				</li>
			</ul>,
		],
	};
	return shallow(<SpeedDial {...Object.assign({}, defaultProps, props)} />, { context });
};

describe('<SpeedDial />', () => {
	describe('renders without crashing', () => {
		it('basic', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial>
						<ul>
							<li>
								<a />
							</li>
						</ul>
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
		});

		it('with BubbleList', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial>
						<BubbleList />
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
		});

		it('with hasBackdrop=false', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial hasBackdrop={false}>
						<BubbleList />
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
		});

		it('with floatingActionButtonProps', () => {
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
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial floatingActionButtonProps={floatingActionButtonProps}>
						<BubbleList />
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
		});

		it('with primaryText', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial primaryText="primaryText">
						<BubbleList />
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
		});

		it('with toolbox right', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial toolbox={{ className: 'toolbox', height: 56 }}>
						<BubbleList />
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
		});

		it('with toolbox left', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial positionH="left" toolbox={{ className: 'toolbox', height: 56 }}>
						<BubbleList />
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
		});

		it('with children null', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial>
						<ul>
							<li>
								<a />
							</li>
						</ul>
						{null}
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
		});
	});

	describe('prop positionV', () => {
		it('top => has top=0', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial positionV="top">
						<ul>
							<li>
								<a />
							</li>
						</ul>
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
			const element = getStylesFromDomNode(getDomFromString(div.innerHTML));
			expect(element.top).toEqual('0px');
		});

		it('bottom => has bottom=0', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial positionV="bottom">
						<ul>
							<li>
								<a />
							</li>
						</ul>
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
			const element = getStylesFromDomNode(getDomFromString(div.innerHTML));
			expect(element.bottom).toEqual('0px');
		});
	});

	describe('prop positionH', () => {
		it('top => button wrapper has top=16px', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial positionH="top">
						<ul>
							<li>
								<a />
							</li>
						</ul>
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
			const button = getStylesFromDomNode(
				getDomFromString(div.innerHTML).getElementsByTagName('button')[0].parentNode.parentNode
			);
			expect(button.top).toEqual('16px');
		});

		it('bottom => button wrapper has bottom=16px', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial positionH="bottom">
						<ul>
							<li>
								<a />
							</li>
						</ul>
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
			const button = getStylesFromDomNode(
				getDomFromString(div.innerHTML).getElementsByTagName('button')[0].parentNode.parentNode
			);
			expect(button.bottom).toEqual('16px');
		});
	});

	describe('class props', () => {
		it('find className, classNameBackdrop and classNameButtonWrap', () => {
			const props = {
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				className: 'o-speed-dial',
				classNameBackdrop: 'o-speed-dial__backdrop',
				classNameButtonWrap: 'o-speed-dial__btn-wrap',
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
			expect(wrapper.find('.o-speed-dial').length).toEqual(1);
			expect(wrapper.find('.o-speed-dial__backdrop').length).toEqual(1);
			expect(wrapper.find('.o-speed-dial__btn-wrap').length).toEqual(1);
		});

		it('find classNameInTransition', () => {
			const props = {
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				classNameInTransition: 'm-bubble-list--in-transition',
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
			wrapper.setState({ isInTransition: true });
			expect(wrapper.find('.m-bubble-list--in-transition').length).toEqual(1);
		});

		it('find classNameOpen', () => {
			const props = {
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				classNameOpen: 'm-bubble-list--open',
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
			wrapper.setState({ isOpen: true });
			expect(wrapper.find('.m-bubble-list--open').length).toEqual(1);
		});
	});

	describe('events', () => {
		it('on backdrop keyUp enter will close', () => {
			const props = {
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				classNameBackdrop: 'o-speed-dial__backdrop',
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
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
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				classNameBackdrop: 'o-speed-dial__backdrop',
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
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
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				classNameBackdrop: 'o-speed-dial__backdrop',
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
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
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
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
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
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
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
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
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });

			wrapper.find('FloatingActionButton').simulate('click');
			expect(wrapper.state().isOpen).toEqual(true);
		});

		it('on click ActionButton again', () => {
			const onClickPrimaryButton = sinon.spy();
			const props = {
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				onClickPrimaryButton,
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
			wrapper.setState({
				isOpen: true,
			});

			wrapper.find('FloatingActionButton').simulate('click');
			expect(wrapper.state().isOpen).toEqual(false);
			expect(onClickPrimaryButton.calledOnce).toEqual(true);
		});
	});

	describe('tabIndex', () => {
		it('primaryText should be 2', () => {
			const props = {
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				primaryText: 'Hello',
				tabIndex: 2,
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
			wrapper.setState({
				isOpen: true,
			});
			expect(wrapper.find('BubbleListItem').node.props.tabIndex).toEqual(2);
		});

		it('primaryText should be -1', () => {
			const props = {
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				primaryText: 'Hello',
				tabIndex: 2,
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
			expect(wrapper.find('BubbleListItem').node.props.tabIndex).toEqual(-1);
		});
	});

	describe('props closeOnSecondCLick', () => {
		it('false', () => {
			const props = {
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				primaryText: 'Hello',
				closeOnSecondClick: false,
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
			wrapper.setState({
				isOpen: true,
			});
			wrapper.find('FloatingActionButton').simulate('click');
			expect(wrapper.state().isOpen).toEqual(true);
		});
	});

	describe('direction', () => {
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
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
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
	});

	describe('alignment', () => {
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
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
			};
			const instance = new SpeedDial(props, context);
			expect(instance.getAlignment()).toEqual('right');
		});
	});

	describe('style props', () => {
		it('prop style is background:red', () => {
			const div = document.createElement('div');
			ReactDOM.render(
				<MuiThemeProvider>
					<SpeedDial style={{ background: 'red' }}>
						<ul>
							<li>
								<a />
							</li>
						</ul>
					</SpeedDial>
				</MuiThemeProvider>,
				div
			);
			const styles = getStylesFromDomNode(getDomFromString(div.innerHTML));
			expect(styles.background).toEqual('red');
		});

		it('prop styleBackdrop is color:red', () => {
			const wrapper = getShallowNode({
				classNameBackdrop: 'backdrop',
				styleBackdrop: {
					color: 'red',
				},
			});
			expect(getStylesFromShallowNode(wrapper.find('.backdrop')).color).toEqual('red');
		});
	});

	describe('states', () => {
		it('state closing', () => {
			const props = {
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				toolbox: {
					className: 'toolbox',
					classNameMorphButton: 'morph-btn',
					height: 56,
				},
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
			wrapper.setState({ isInTransition: true, wasOpened: true });
			const attrClass = getDomFromString(wrapper.find('.morph-btn').html()).getAttribute('class');
			expect(attrClass.search('anim-btn-morph-closing') >= 0).toEqual(true);
		});

		it('state opening', () => {
			const props = {
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				toolbox: {
					className: 'toolbox',
					classNameMorphButton: 'morph-btn',
					height: 56,
				},
			};
			const wrapper = shallow(<SpeedDial {...props} />, { context });
			wrapper.setState({ isInTransition: true, isOpen: true, wasOpened: false });
			const attrClass = getDomFromString(wrapper.find('.morph-btn').html()).getAttribute('class');
			expect(attrClass.search('anim-btn-morph') >= 0).toEqual(true);
		});
	});

	describe('methods', () => {
		it('componentWillUnmount', () => {
			const props = {
				primaryText: 'Hallo',
				closeOnScrollDown: false,
				closeOnScrollUp: false,
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
			};
			const instance = new SpeedDial(props, context);
			instance.componentWillUnmount();
		});

		it('method: componentWillReceiveProps', done => {
			const _props = {
				isControlled: false,
				isOpen: false,
				primaryText: 'Hallo',
				closeOnScrollDown: false,
				closeOnScrollUp: false,
				onChange() {},
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
			};
			// eslint-disable-next-line
			class _SpeedDial extends SpeedDial {
				// eslint-disable-next-line
				setState() {
					done();
				}
			}
			const inst = new _SpeedDial(_props, context);
			inst.isControlled = () => true;
			expect(
				inst.componentWillReceiveProps({
					isOpen: true,
				})
			).toBe(undefined);
		});

		it('componentWillUnmount remove scroll eventListener', () => {
			const props = {
				primaryText: 'Hallo',
				closeOnScrollDown: true,
				closeOnScrollUp: true,
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
			};
			const instance = new SpeedDial(props, context);
			instance.componentWillUnmount();
		});

		it('componentWillUnmount remove scroll eventListener (closeOnScrollUp = false)', () => {
			const props = {
				primaryText: 'Hallo',
				closeOnScrollDown: false,
				closeOnScrollUp: true,
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
			};
			const instance = new SpeedDial(props, context);
			instance.componentWillUnmount();
		});

		it('componentDidMount add scroll eventListener', () => {
			const props = {
				primaryText: 'Hallo',
				closeOnScrollDown: true,
				closeOnScrollUp: true,
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
			};
			const instance = new SpeedDial(props, context);
			instance.componentDidMount();
		});

		it('handleScroll closed', () => {
			const props = {
				primaryText: 'Hallo',
				closeOnScrollDown: true,
				closeOnScrollUp: true,
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				onClickPrimaryButton() {},
			};
			document.body.scrollTop = 40;
			const instance = new SpeedDial(props, context);
			instance.state.isOpen = false;
			instance.state.openedScrollPos = 0;
			instance.handleScroll();
		});

		it('handleScroll close scroll down', () => {
			const props = {
				primaryText: 'Hallo',
				closeOnScrollDown: true,
				closeOnScrollUp: true,
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				onClickPrimaryButton() {},
			};
			document.body.scrollTop = 40;
			const instance = new SpeedDial(props, context);
			instance.state.isOpen = true;
			instance.state.openedScrollPos = 0;
			instance.handleScroll();
		});

		it('handleScroll close scroll up', () => {
			const props = {
				primaryText: 'Hallo',
				closeOnScrollDown: true,
				closeOnScrollUp: true,
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				onClickPrimaryButton() {},
			};
			document.body.scrollTop = 0;
			const instance = new SpeedDial(props, context);
			instance.state.isOpen = true;
			instance.state.openedScrollPos = 100;
			instance.handleScroll();
		});

		it('handleClickCloseToolbox', () => {
			const props = {
				primaryText: 'Hallo',
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				onClickPrimaryButton() {},
				onChangeState() {},
				toolbox: {
					height: 56,
				},
			};
			document.body.scrollTop = 0;
			const instance = new SpeedDial(props, context);
			instance.setState = () => {};
			instance.handleClickCloseToolbox();
		});

		it('updateState', done => {
			const props = {
				primaryText: 'Hallo',
				isOpen: true,
				children: [
					<ul key="0">
						<li>
							<a />
						</li>
					</ul>,
				],
				onClickPrimaryButton() {},
				onChangeState() {},
				onChange({ isOpen }) {
					expect(isOpen).toEqual(false);
					done();
				},
				toolbox: {
					height: 56,
				},
			};
			document.body.scrollTop = 0;
			const instance = new SpeedDial(props, context);
			instance.setState = () => {};
			instance.updateState({ isOpen: false });
		});
	});
});
