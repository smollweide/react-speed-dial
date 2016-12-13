
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import BubbleListItem from '../bubble-list-item/bubble-list-item.js';
import createKeyframes from './create-keyframes';
import propTypes from './speed-dial.prop-types';
import defaultProps from './speed-dial.default-props';
import getStyles from './speed-dial.styles';

const animTime = 450;
const keyFrameClassName = 'anim-btn-morph';
const cssKeyFrames = createKeyframes(
	{
		className: keyFrameClassName,
		iterationCount: 1,
	},
	{
		'0%': {
			translate: '0px,0px',
		},
		'100%': {
			translate: '-200%,28px',
			scaleX: 8,
		},
	}
);

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
			isOpen: props.isInitiallyOpen,
			isInTransition: false,
			isBackdropFocused: false,
		};

		this.getStylesBackdrop = this.getStylesBackdrop.bind(this);
		this.isChildrenBubbleList = this.isChildrenBubbleList.bind(this);
		this.isToolbox = this.isToolbox.bind(this);
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClickClose = this.handleClickClose.bind(this);
		this.handleClickBackdrop = this.handleClickBackdrop.bind(this);
		this.handleFocusFirstListItem = this.handleFocusFirstListItem.bind(this);
		this.handleFocusPrimaryText = this.handleFocusPrimaryText.bind(this);
		this.handleFocusBackdrop = this.handleFocusBackdrop.bind(this);
		this.handleBlurBackdrop = this.handleBlurBackdrop.bind(this);
		this.handleBackdropKeyUp = this.handleBackdropKeyUp.bind(this);
		this.styles = getStyles(context.muiTheme);
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

		this.setState({
			isOpen: true,
			isInTransition: true,
		});

		/* istanbul ignore next */
		setTimeout(() => {
			this.setState({
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
			this.setState({
				isOpen: false,
				isInTransition: true,
			});
		}

		/* istanbul ignore next */
		setTimeout(() => {
			this.setState({
				isInTransition: false,
			});
		}, animTime);
	}

	/**
	 * @returns {void}
	 */
	handleClickBackdrop() {
		/* istanbul ignore next */
		this.setState({
			isOpen: false,
			isInTransition: true,
		});
		/* istanbul ignore next */
		setTimeout(() => {
			this.setState({
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
		this.setState({
			isBackdropFocused: true,
		});
	}

	/**
	 * @returns {void}
	 */
	handleBlurBackdrop() {
		this.setState({
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

		this.handleClickBackdrop();
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

		const { isOpen } = this.state;
		const { positionV, positionH, styleButtonWrap } = this.props;
		const styles = this.styles;

		if (this.isToolbox() && isOpen) {
			return Object.assign(
				{},
				styles.btnWrap.main,
				styles.btnWrap[positionV],
				styles.btnWrap[positionH],
				styleButtonWrap,
				styles.btnWrap.toolboxOpen
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
	getStylesMain() {

		const { positionV, style } = this.props;
		const styles = this.styles;

		return Object.assign(
			{},
			styles.root.main,
			styles.root[positionV],
			style
		);
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
		const stylesMain = Object.assign({}, styles.toolbox.main);

		if (!isOpen) {
			return Object.assign(
				{},
				stylesMain
			);
		}

		const stylesOpen = {
			height: toolbox.height,
		};

		return Object.assign(
			{},
			stylesMain,
			stylesOpen
		);
	}

	/**
	 * @returns {Object} styles for toolbox element
	 */
	getStylesMorphActionButton() {
		const { isOpen, isInTransition } = this.state;
		const { toolbox } = this.props;
		const styles = this.styles;
		const stylesWrap = this.getStylesBtn();
		const stylesButton = this.getActionButtonStyles();
		const stylesMain = Object.assign({}, styles.morphActionButton.main, {
			backgroundColor: stylesButton.backgroundColor || 'red',
			width: stylesButton.width || 56,
			height: stylesButton.height || 56,
		});
		let stylesTransition = {};
		let stylesOpen = {};

		if (isOpen) {
			stylesTransition = styles.morphActionButton.inTransition;
		}

		if (isOpen && !isInTransition) {
			stylesOpen = styles.morphActionButton.visible;
		}

		return Object.assign(
			{},
			stylesWrap,
			stylesMain,
			stylesTransition,
			stylesOpen
		);
	}

	/**
	 * @returns {boolean} returns true if the children component is `BubbleList` component
	 */
	isChildrenBubbleList() {
		const { children } = this.props;
		try {
			return Boolean(children.type.displayName === 'BubbleList');
		} catch (err) {
			return false;
		}
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

		const { toolbox } = this.props;

		if (!this.isToolbox()) {
			return null;
		}

		return (
			<div
				className={toolbox.className}
				style={this.getStylesToolbox()}
			/>
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
			// return React.cloneElement(toolbox, {
			//	ref: 'toolbox',
			// });
		}

		if (!children.type || children.type.displayName !== 'BubbleList') {
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
			<span
				className={classNameBackdrop}
				style={Object.assign({}, stylesWrap, styleBackdrop)}
			>
				<a
					style={this.getStylesBackdrop()}
					tabIndex={isOpen ? (tabIndex + 1) : -1}
					onBlur={this.handleBlurBackdrop}
					onFocus={this.handleFocusBackdrop}
					onKeyUp={this.handleBackdropKeyUp}
					onTouchTap={this.handleClickBackdrop}
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

		const { isInTransition } = this.state;

		return (
			<div
				className={isInTransition ? keyFrameClassName : ''}
				ref="morphBtn"
				style={this.getStylesMorphActionButton()}
			/>
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
		} = this.props;
		const { isOpen, isInTransition } = this.state;
		const handleClick = isOpen ? this.handleClickClose : this.handleClickOpen;
		const classNames = [className];

		const btnProps = Object.assign({}, floatingActionButtonProps, {
			onTouchTap: handleClick,
		});

		if (isInTransition && classNameInTransition) {
			classNames.push(classNameInTransition);
		}

		if (isOpen && classNameOpen) {
			classNames.push(classNameOpen);
		}

		return (
			<div className={classNames.join(' ')} style={this.getStylesMain()}>
				<style>{cssKeyFrames}</style>
				{this.renderToolbox()}
				{this.renderBackdrop()}
				<div style={this.getStylesContentWrap()}>
					{this.renderChildren()}
				</div>
				{this.renderMorphActionButton()}
				<div className={classNameButtonWrap} style={this.getStylesBtn()}>
					{this.renderPrimaryText()}
					<FloatingActionButton
						ref="btn"
						tabIndex={tabIndex}
						{...btnProps}
					>
						{this.renderIcon()}
					</FloatingActionButton>
				</div>
			</div>
		);
	}
}

SpeedDial.displayName = 'SpeedDial';
SpeedDial.propTypes = propTypes;
SpeedDial.defaultProps = defaultProps;
SpeedDial.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

export default SpeedDial;
