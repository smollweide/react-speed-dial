/*eslint complexity: ["error", 10]*/
import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { cyan500 } from 'material-ui/styles/colors';

import BubbleListItem from '../bubble-list-item/bubble-list-item.js';
import propTypes from './speed-dial.prop-types';
import defaultProps from './speed-dial.default-props';
import getStyles from './speed-dial.styles';
import { getCssKeyFrames, getCssKeyFramesClosing } from './speed-dial.keyframes';

const animTime = 450;
const keyFrameClassName = 'anim-btn-morph';
const keyFrameClosingClassName = 'anim-btn-morph-closing';

/**
 * @returns {number} returns the scroll top distance
 */
function scrollTop() {
	return document.body.scrollTop || document.documentElement.scrollTop;
}

/**
 * @param {Object} child - the child component or node
 * @param {string} displayName - the displayName
 * @returns {boolean} returns true if child is component with given displayName
 */
function isValidChild(child, displayName) {
	return (
		child !== null &&
		typeof child === 'object' &&
		!(child instanceof Array) &&
		child.type &&
		child.type.displayName === displayName
	);
}

/**
 * Class SpeedDial
 */
class SpeedDial extends React.Component {
	/**
	 * @param {Object} props - component props
	 * @param {Object} context - component context
	 * @returns {void}
	 */
	constructor(props, context) {
		super(props, context);

		this.state = {
			isOpen: props.isOpen || props.isInitiallyOpen,
			isInTransition: false,
			wasOpened: !props.isInitiallyOpen,
			isBackdropFocused: false,
			openedScrollPos: 0,
		};

		this.instanceKey = String(Math.random() * 10000).substring(0, 4);
		this.isControlled = Boolean(typeof props.isOpen === 'boolean');
		this.getStylesBackdrop = this.getStylesBackdrop.bind(this);
		this.isChildrenBubbleList = this.isChildrenBubbleList.bind(this);
		this.isToolbox = this.isToolbox.bind(this);
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClickClose = this.handleClickClose.bind(this);
		this.handleClickCloseToolbox = this.handleClickCloseToolbox.bind(this);
		this.handleClickBackdrop = this.handleClickBackdrop.bind(this);
		this.handleFocusFirstListItem = this.handleFocusFirstListItem.bind(this);
		this.handleFocusPrimaryText = this.handleFocusPrimaryText.bind(this);
		this.handleFocusBackdrop = this.handleFocusBackdrop.bind(this);
		this.handleBlurBackdrop = this.handleBlurBackdrop.bind(this);
		this.handleBackdropKeyUp = this.handleBackdropKeyUp.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.styles = getStyles(context.muiTheme);

		/* istanbul ignore next */
		if (this.isControlled && typeof props.onChange !== 'function') {
			// eslint-disable-next-line
			console.error(
				'Warning: Failed speed-dial propType: You provided a `isOpen` prop to a speed-dial without an `onChange` handler'
			);
		}
	}

	/**
	 * @returns {void}
	 */
	componentDidMount() {
		const { closeOnScrollDown, closeOnScrollUp } = this.props;

		if (closeOnScrollDown === true || closeOnScrollUp === true) {
			window.addEventListener('scroll', this.handleScroll);
		}
	}

	/**
	 * @param {Object} nextProps - the next props Object
	 * @returns {void}
	 */
	componentWillReceiveProps(nextProps) {
		if (this.isControlled) {
			this.setState({
				isOpen: nextProps.isOpen,
			});
		}
	}

	/**
	 * @returns {void}
	 */
	componentWillUnmount() {
		const { closeOnScrollDown, closeOnScrollUp } = this.props;

		if (closeOnScrollDown === true || closeOnScrollUp === true) {
			window.removeEventListener('scroll', this.handleScroll);
		}
	}

	/**
	 * @returns {void}
	 */
	handleScroll() {
		const { closeOnScrollDown, closeOnScrollUp } = this.props;
		const { isOpen, openedScrollPos } = this.state;

		if (!isOpen) {
			const distance = Number(scrollTop() || 0) - openedScrollPos;
			if (closeOnScrollDown === true && distance >= 30) {
				this.handleClickClose();
			}
			if (closeOnScrollUp === true && distance <= -30) {
				this.handleClickClose();
			}
		}
	}

	/**
	 * @returns {void}
	 */
	handleFocusFirstListItem() {
		if (!this.refs.list || !this.refs.list.refs || !this.refs.list.refs.listItem0) {
			return;
		}

		this.refs.list.refs.listItem0.setFocus();
	}

	/**
	 * @returns {void}
	 */
	handleClickOpen() {
		this.updateState({
			wasOpened: false,
			isOpen: true,
			isInTransition: true,
			openedScrollPos: scrollTop(),
		});

		/* istanbul ignore next */
		setTimeout(() => {
			this.updateState({
				wasOpened: false,
				isInTransition: false,
			});
			this.handleFocusFirstListItem();
		}, animTime);
	}

	/**
	 * @returns {void}
	 */
	handleClickClose() {
		this.props.onClickPrimaryButton();

		if (this.props.closeOnSecondClick) {
			this.updateState({
				wasOpened: true,
				isOpen: false,
				isInTransition: true,
			});
		}

		/* istanbul ignore next */
		setTimeout(() => {
			this.updateState({
				wasOpened: false,
				isInTransition: false,
			});
		}, animTime);
	}

	/**
	 * @returns {void}
	 */
	handleClickCloseToolbox() {
		/* istanbul ignore next */
		this.updateState({
			wasOpened: true,
			isOpen: false,
			isInTransition: true,
		});

		/* istanbul ignore next */
		setTimeout(() => {
			this.updateState({
				wasOpened: false,
				isInTransition: false,
			});
		}, animTime);
	}

	/**
	 * @param {Event} event - the click event object
	 * @returns {void}
	 */
	handleClickBackdrop(event) {
		/* istanbul ignore next */
		if (event && typeof event.stopPropagation === 'function') {
			event.stopPropagation();
		}

		/* istanbul ignore next */
		this.updateState({
			isOpen: false,
			isInTransition: true,
		});

		/* istanbul ignore next */
		setTimeout(() => {
			this.updateState({
				isInTransition: false,
			});
		}, animTime);
	}

	/**
	 * @returns {void}
	 */
	handleFocusPrimaryText() {
		this.refs.btn.refs.container.refs.enhancedButton.focus();
	}

	/**
	 * @returns {void}
	 */
	handleFocusBackdrop() {
		this.updateState({
			isBackdropFocused: true,
		});
	}

	/**
	 * @returns {void}
	 */
	handleBlurBackdrop() {
		this.updateState({
			isBackdropFocused: false,
		});
	}

	/**
	 * @param {Object} event - the backdrop keyUp event
	 * @returns {void}
	 */
	handleBackdropKeyUp(event) {
		if (event.keyCode !== 13) {
			return;
		}

		this.handleClickBackdrop(event);
	}

	/**
	 * @returns {string} transitionState (open|closed|opening|closing)
	 */
	getCurrentTransitionState() {
		const { isOpen, isInTransition, wasOpened } = this.state;

		if (!isInTransition) {
			return isOpen ? 'open' : 'closed';
		}

		if (isOpen && !wasOpened) {
			return 'opening';
		}

		return 'closing';
	}

	/**
	 * @returns {string} the BubbleList direction
	 */
	getDirection() {
		const { children, positionV } = this.props;

		if (children && children.props && children.props.direction) {
			return children.props.direction;
		}

		return positionV === 'bottom' ? 'up' : 'down';
	}

	/**
	 * @returns {string} the BubbleList alignment
	 */
	getAlignment() {
		const { children, positionH } = this.props;

		if (children && children.props && children.props.alignment) {
			return children.props.alignment;
		}

		return positionH;
	}

	/**
	 * @returns {Object} the `ActionButton`
	 */
	getActionButton() {
		try {
			return this.refs.btn.refs.container;
		} catch (err) {
			return {};
		}
	}

	/**
	 * @returns {Object} the `ActionButton` style object
	 */
	getActionButtonStyles() {
		try {
			return Object.assign({}, this.getActionButton().refs.enhancedButton.style);
		} catch (err) {
			return {};
		}
	}

	/**
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesBtn() {
		const { positionV, positionH, styleButtonWrap } = this.props;
		const transitionState = this.getCurrentTransitionState();
		const styles = this.styles;

		if (this.isToolbox()) {
			return Object.assign(
				{},
				styles.btnWrap.main,
				styles.btnWrap[positionV],
				styles.btnWrap[positionH],
				styleButtonWrap,
				styles.btnWrap.toolbox[transitionState]
			);
		}

		return Object.assign(
			{},
			styles.btnWrap.main,
			styles.btnWrap[positionV],
			styles.btnWrap[positionH],
			styleButtonWrap
		);
	}

	/**
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesMouseWrapper() {
		const { positionV, positionH, styleButtonWrap } = this.props;
		const { isOpen } = this.state;
		const styles = this.styles;
		const overwrite = {
			transition: undefined,
			width: isOpen ? 320 : 56,
			height: isOpen ? 340 : 56,
		};
		const stylesMouseWrap = Object.assign(
			{},
			styles.btnWrap.main,
			styles.btnWrap[positionV],
			styles.btnWrap[positionH],
			styleButtonWrap,
			overwrite
		);

		if (typeof stylesMouseWrap.right === 'number') {
			stylesMouseWrap.right = 0;
		}
		if (typeof stylesMouseWrap.left === 'number') {
			stylesMouseWrap.left = 0;
		}
		if (typeof stylesMouseWrap.top === 'number') {
			stylesMouseWrap.top = 0;
		}
		if (typeof stylesMouseWrap.bottom === 'number') {
			stylesMouseWrap.bottom = 0;
		}

		return stylesMouseWrap;
	}

	/**
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesMain() {
		const { positionV, style } = this.props;
		const styles = this.styles;

		return Object.assign({}, styles.root.main, styles.root[positionV], style);
	}

	/**
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesContentWrap() {
		const { positionV, positionH } = this.props;
		const { isOpen } = this.state;
		const styles = this.styles;
		let stylesNotBubbleList = {};

		if (!this.isChildrenBubbleList()) {
			stylesNotBubbleList = Object.assign(
				{},
				styles.notBubbleList.main,
				styles.notBubbleList[isOpen ? 'visible' : 'invisible']
			);
		}

		return Object.assign(
			{},
			styles.contentWrap.main,
			styles.contentWrap[positionV],
			styles.contentWrap[positionH],
			styles.contentWrap.direction[this.getDirection()],
			styles.contentWrap.alignment[this.getAlignment()],
			stylesNotBubbleList
		);
	}

	/**
	 * @returns {Object} merged styles for the primary text
	 */
	getStylesPrimaryText() {
		const { positionH } = this.props;
		const { isOpen } = this.state;
		const styles = this.styles;

		return Object.assign(
			{},
			styles.primaryText.main,
			styles.primaryText[String(isOpen)],
			styles.primaryText[positionH]
		);
	}

	/**
	 * @returns {Object} styles for backdrop element
	 */
	getStylesBackdrop() {
		const { isOpen, isBackdropFocused } = this.state;
		const styles = this.styles;
		const stylesLink = isOpen ? styles.backdrop.main : styles.backdrop.invisible;
		const stylesLinkFocused = isBackdropFocused ? styles.backdrop.focus : {};

		return Object.assign({}, stylesLink, stylesLinkFocused);
	}

	/**
	 * @returns {Object} styles for toolbox element
	 */
	getStylesToolbox() {
		const { isOpen } = this.state;
		const { toolbox } = this.props;
		const styles = this.styles;

		if (!isOpen) {
			return Object.assign({}, styles.toolbox.main);
		}

		const stylesOpen = {
			height: toolbox.height,
		};

		return Object.assign({}, styles.toolbox.main, stylesOpen);
	}

	/**
	 * @returns {Object} styles for toolbox inner elements
	 */
	getStylesToolboxInner() {
		return Object.assign(
			{},
			this.styles.toolboxInner.main,
			this.styles.toolboxInner[this.getCurrentTransitionState()]
		);
	}

	/**
	 * @returns {Object} styles for toolbox element
	 */
	getStylesMorphActionButton() {
		const styles = this.styles;
		const stylesWrap = this.getStylesBtn();
		const stylesButton = this.getActionButtonStyles();
		const stylesMain = Object.assign({}, styles.morphActionButton.main, {
			backgroundColor: stylesButton.backgroundColor || cyan500,
			width: stylesButton.width || 56,
			height: stylesButton.height || 56,
		});

		return Object.assign({}, stylesWrap, stylesMain, styles.morphActionButton[this.getCurrentTransitionState()]);
	}

	/**
	 * @param {Object} newState - the new state
	 * @returns {void}
	 */
	updateState(newState) {
		this.setState(newState);
		this.props.onChangeState(newState);
		if (this.isControlled && typeof newState.isOpen === 'boolean') {
			this.props.onChange({
				isOpen: newState.isOpen,
			});
		}
	}

	/**
	 * @returns {boolean} returns true if the children component is `BubbleList` component
	 */
	isChildrenBubbleList() {
		const { children } = this.props;
		return isValidChild(children, 'BubbleList');
	}

	/**
	 * @returns {boolean} returns true if toolbox object exist and the height is set
	 */
	isToolbox() {
		const { toolbox } = this.props;
		return Boolean(toolbox && typeof toolbox.height === 'number');
	}

	/**
	 * @returns {Array} returns the icon component's
	 */
	renderIcon() {
		const { icon, iconOpen } = this.props;
		const { isOpen } = this.state;

		return [
			React.cloneElement(icon, {
				key: '0',
				style: isOpen ? this.styles.iconClosed.invisible : this.styles.iconClosed.main,
			}),
			React.cloneElement(iconOpen, {
				key: '1',
				style: isOpen ? this.styles.iconOpen.main : this.styles.iconOpen.invisible,
			}),
		];
	}

	/**
	 * @returns {XML} returns the children toolbox eg. `BottomNavigation` component
	 */
	renderToolbox() {
		const { toolbox, children } = this.props;

		if (!this.isToolbox()) {
			return null;
		}

		return (
			<div className={toolbox.className} style={this.getStylesToolbox()}>
				<div style={this.styles.morphWrap}>{this.renderMorphActionButton()}</div>
				<div style={this.getStylesToolboxInner()}>
					{React.cloneElement(children, {
						onClickCloseToolbox: this.handleClickCloseToolbox,
					})}
				</div>
			</div>
		);
	}

	/**
	 * @returns {XML} returns the children (list)
	 */
	renderChildren() {
		const { children, positionV } = this.props;
		const { isOpen, isInTransition } = this.state;

		if (this.isToolbox()) {
			return null;
		}

		if (!isValidChild(children, 'BubbleList')) {
			return children;
		}

		return React.cloneElement(children, {
			isOpen,
			isInTransition,
			direction: this.getDirection(),
			alignment: this.getAlignment(),
			positionV,
			ref: 'list',
		});
	}

	/**
	 * @returns {XML} returns the backdrop
	 */
	renderBackdrop() {
		const { hasBackdrop, classNameBackdrop, tabIndex, styleBackdrop } = this.props;
		const { isOpen } = this.state;
		const styles = this.styles;
		const stylesWrap = isOpen ? styles.backdropWrap.main : styles.backdropWrap.invisible;

		if (!hasBackdrop || this.isToolbox()) {
			return null;
		}

		return (
			<span className={classNameBackdrop} style={Object.assign({}, stylesWrap, styleBackdrop)}>
				<a
					style={this.getStylesBackdrop()}
					tabIndex={isOpen ? tabIndex + 1 : -1}
					onBlur={this.handleBlurBackdrop}
					onFocus={this.handleFocusBackdrop}
					onKeyUp={this.handleBackdropKeyUp}
					onClick={this.handleClickBackdrop}
				/>
			</span>
		);
	}

	/**
	 * @returns {XML} returns the primary text
	 */
	renderPrimaryText() {
		const { primaryText, onClickPrimaryButton, tabIndex } = this.props;
		const { isOpen } = this.state;

		if (['left', 'right'].indexOf(this.getDirection()) >= 0) {
			return null;
		}

		if (!primaryText || primaryText === '') {
			return null;
		}

		return (
			<ul style={this.getStylesPrimaryText()}>
				<BubbleListItem
					isOpen
					primaryText={primaryText}
					tabIndex={isOpen ? tabIndex : -1}
					onClick={onClickPrimaryButton}
					onFocus={this.handleFocusPrimaryText}
				/>
			</ul>
		);
	}

	/**
	 * @returns {XML} returns the morphing ActionButton
	 */
	renderMorphActionButton() {
		const transitionState = this.getCurrentTransitionState();
		const { toolbox } = this.props;
		const classNames = [];

		if (toolbox.classNameMorphButton) {
			classNames.push(toolbox.classNameMorphButton);
		}

		if (transitionState === 'closing') {
			classNames.push(keyFrameClosingClassName + this.instanceKey);
		}

		if (transitionState === 'opening') {
			classNames.push(keyFrameClassName + this.instanceKey);
		}

		return <div className={classNames.join(' ')} ref="morphBtn" style={this.getStylesMorphActionButton()} />;
	}

	/**
	 * @returns {XML} returns a style tag
	 */
	renderCssKeyframes() {
		const { toolbox, positionH } = this.props;

		if (!this.isToolbox()) {
			return null;
		}

		const options = {
			height: toolbox.height,
			btnHeight: 56,
			positionH,
		};

		return (
			<style>
				{getCssKeyFrames(keyFrameClassName, this.instanceKey, options)}
				{getCssKeyFramesClosing(keyFrameClosingClassName, this.instanceKey, options)}
			</style>
		);
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {
		const {
			floatingActionButtonProps,
			className,
			classNameInTransition,
			classNameOpen,
			classNameButtonWrap,
			tabIndex,
			enableMouseActions,
		} = this.props;
		const { isOpen, isInTransition } = this.state;
		const handleClick = isOpen ? this.handleClickClose : this.handleClickOpen;
		const classNames = [className];

		const btnProps = Object.assign({}, floatingActionButtonProps, {
			onClick: enableMouseActions ? undefined : handleClick,
		});

		if (isInTransition && classNameInTransition) {
			classNames.push(classNameInTransition);
		}

		if (isOpen && classNameOpen) {
			classNames.push(classNameOpen);
		}

		return (
			<div className={classNames.join(' ')} style={this.getStylesMain()}>
				{this.renderCssKeyframes()}
				{this.renderToolbox()}
				{this.renderBackdrop()}
				<div
					className="enableMouseActions"
					onMouseEnter={enableMouseActions ? handleClick : undefined}
					onMouseLeave={enableMouseActions ? handleClick : undefined}
					style={enableMouseActions ? Object.assign(this.getStylesMouseWrapper(), {}) : {}}
				>
					<div style={this.getStylesContentWrap()}>{this.renderChildren()}</div>
					<div className={classNameButtonWrap} style={this.getStylesBtn()}>
						{this.renderPrimaryText()}
						<FloatingActionButton ref="btn" tabIndex={tabIndex} {...btnProps}>
							{this.renderIcon()}
						</FloatingActionButton>
					</div>
				</div>
			</div>
		);
	}
}

SpeedDial.displayName = 'SpeedDial';
SpeedDial.propTypes = propTypes;
SpeedDial.defaultProps = defaultProps;
SpeedDial.contextTypes = {
	muiTheme: PropTypes.object.isRequired,
};

export default SpeedDial;
