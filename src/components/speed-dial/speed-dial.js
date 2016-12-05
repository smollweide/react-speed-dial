
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconAdd from 'material-ui/svg-icons/content/add';
import IconClose from 'material-ui/svg-icons/navigation/close';
import BubbleListItem from '../bubble-list-item/bubble-list-item.js';
import getStyles from './speed-dial.styles';

const animTime = 450;

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
		super(props);

		this.state = {
			isOpen: props.isInitiallyOpen,
			isInTransition: false,
			isBackdropFocused: false,
		};

		this.getStylesBackdrop = this.getStylesBackdrop.bind(this);
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
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesBtn() {

		const { positionV, positionH, styleButtonWrap } = this.props;
		const styles = this.styles;

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
		const styles = this.styles;

		return Object.assign(
			{},
			styles.contentWrap.main,
			styles.contentWrap[positionV],
			styles.contentWrap[positionH],
			styles.contentWrap.direction[this.getDirection()],
			styles.contentWrap.alignment[this.getAlignment()]
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
	 * @returns {XML} returns the children (list)
	 */
	renderChildren() {

		const { children } = this.props;
		const { isOpen, isInTransition } = this.state;

		if (!children.type || children.type.displayName !== 'BubbleList') {
			return children;
		}

		return React.cloneElement(children, {
			isOpen,
			isInTransition,
			direction: this.getDirection(),
			alignment: this.getAlignment(),
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

		if (!hasBackdrop) {
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
				{this.renderBackdrop()}
				<div style={this.getStylesContentWrap()}>
					{this.renderChildren()}
				</div>
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
SpeedDial.propTypes = {
	children: React.PropTypes.any.isRequired,
	className: React.PropTypes.string,
	classNameBackdrop: React.PropTypes.string,
	classNameButtonWrap: React.PropTypes.string,
	classNameInTransition: React.PropTypes.string,
	classNameOpen: React.PropTypes.string,
	closeOnSecondClick: React.PropTypes.bool,
	floatingActionButtonProps: React.PropTypes.shape({
		backgroundColor: React.PropTypes.string,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		iconClassName: React.PropTypes.string,
		iconStyle: React.PropTypes.object,
		mini: React.PropTypes.bool,
		secondary: React.PropTypes.bool,
		style: React.PropTypes.object,
		zDepth: React.PropTypes.number,
	}),
	hasBackdrop: React.PropTypes.bool,
	icon: React.PropTypes.object,
	iconOpen: React.PropTypes.object,
	isInitiallyOpen: React.PropTypes.bool,
	positionH: React.PropTypes.string,
	positionV: React.PropTypes.string,
	primaryText: React.PropTypes.string,
	style: React.PropTypes.object,
	styleBackdrop: React.PropTypes.object,
	styleButtonWrap: React.PropTypes.object,
	tabIndex: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]),
	onClickPrimaryButton: React.PropTypes.func,
};
SpeedDial.defaultProps = {
	closeOnSecondClick: true,
	hasBackdrop: true,
	icon: <IconAdd />,
	iconOpen: <IconClose />,
	isInitiallyOpen: false,
	positionH: 'right',
	positionV: 'bottom',
	style: {},
	styleBackdrop: {},
	styleButtonWrap: {},
	tabIndex: 1,
	onClickPrimaryButton() {},
};
SpeedDial.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

export default SpeedDial;
