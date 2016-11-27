
import React from 'react';
import getStyles from './bubble-list-item.styles';

/**
 * Class BubbleListItem
 */
class BubbleListItem extends React.Component {

	/**
	 * @param {Object} props - component props
	 * @param {Object} muiTheme - the muiTheme in context
	 * @returns {void}
	 */
	constructor(props, { muiTheme }) {
		super(props);

		this.state = {
			isKeyboardFocused: false,
		};

		this.styles = getStyles(muiTheme);
		this.getStylesMain = this.getStylesMain.bind(this);
		this.getStylesText = this.getStylesText.bind(this);
		this.getStylesFocus = this.getStylesFocus.bind(this);
		this.setFocus = this.setFocus.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	/**
	 * @returns {void}
	 */
	handleBlur() {
		this.setState({
			isKeyboardFocused: false,
		});
		this.props.onBlur();
	}

	/**
	 * @returns {void}
	 */
	handleFocus() {
		this.setState({
			isKeyboardFocused: true,
		});
		this.props.onFocus();
	}

	/**
	 * @param {Object} event - the keyUp event object
	 * @returns {void}
	 */
	handleKeyUp(event) {

		if (!this.state.isKeyboardFocused || event.keyCode !== 13) {
			return;
		}

		const { onTouchTap, onClick } = this.props;

		(onTouchTap || onClick)(event);
	}

	/**
	 * @returns {void}
	 */
	setFocus() {
		this.refs.link.focus();
	}

	/**
	 * @returns {Object} vertical styles for root element
	 */
	getStylesMain() {

		const { isOpen, positionV, leftAvatar } = this.props;
		const positionH = Boolean(leftAvatar) ? 'left' : 'right';
		const styles = this.styles;

		if (isOpen) {
			return Object.assign(
				{},
				styles.root.main,
				styles.root[positionV],
				styles.root[positionH]
			);
		}

		return Object.assign(
			{},
			styles.rootInvisible.main,
			styles.rootInvisible[positionV],
			styles.rootInvisible[positionH]
		);
	}

	/**
	 * @param {string} elementName - the element name eg. (avatar|text)
	 * @returns {Object} styles for focused element
	 */
	getStylesFocus(elementName) {
		const { isKeyboardFocused } = this.state;

		if (!isKeyboardFocused) {
			return {};
		}

		return this.styles.focus[elementName];
	}

	/**
	 * @returns {Object} styles for text element
	 */
	getStylesText() {

		const { leftAvatar } = this.props;
		const positionH = Boolean(leftAvatar) ? 'left' : 'right';
		const styles = this.styles;

		return Object.assign(
			{},
			styles.text.main,
			styles.text[positionH],
			this.getStylesFocus('text')
		);
	}

	/**
	 * @param {string} name - the name in styles eg. (rightAvatar|leftAvatar)
	 * @returns {XML} returns the cloned Avatar
	 */
	renderAvatar(name) {

		const styles = this.styles;
		const avatar = this.props[name];

		if (!avatar) {
			return null;
		}

		return React.cloneElement(avatar, {
			style: Object.assign({}, avatar.props.style, styles[name], this.getStylesFocus('avatar')),
		});
	}

	/**
	 * @returns {XML} returns the content
	 */
	renderContent() {

		const { primaryText } = this.props;

		return (
			<span>
				{this.renderAvatar('leftAvatar')}
				<span style={this.getStylesText()}>{primaryText}</span>
				{this.renderAvatar('rightAvatar')}
			</span>
		);
	}

	/**
	 * @returns {XML} returns the link
	 */
	renderLink() {

		const { href, onTouchTap, onClick, tabIndex, isOpen } = this.props;
		const styles = this.styles;

		if (href) {
			return (
				<a
					href={href}
					ref="link"
					style={styles.wrap.main}
					tabIndex={isOpen ? tabIndex : -1}
					onBlur={this.handleBlur}
					onFocus={this.handleFocus}
				>
					{this.renderContent()}
				</a>
			);
		}

		return (
			<a
				ref="link"
				style={styles.wrap.main}
				tabIndex={isOpen ? tabIndex : -1}
				onBlur={this.handleBlur}
				onFocus={this.handleFocus}
				onKeyUp={this.handleKeyUp}
				onTouchTap={onTouchTap || onClick}
			>
				{this.renderContent()}
			</a>
		);
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {
		const { className } = this.props;

		return (
			<li
				className={className}
				ref="item"
				style={this.getStylesMain()}
			>
				{this.renderLink()}
			</li>
		);
	}
}

BubbleListItem.displayName = 'BubbleListItem';
BubbleListItem.propTypes = {
	className: React.PropTypes.string,
	href: React.PropTypes.string,
	isInTransition: React.PropTypes.bool,
	isOpen: React.PropTypes.bool,
	leftAvatar: React.PropTypes.object,
	positionV: React.PropTypes.string,
	primaryText: React.PropTypes.string,
	rightAvatar: React.PropTypes.object,
	tabIndex: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]),
	onBlur: React.PropTypes.func,
	onClick: React.PropTypes.func,
	onFocus: React.PropTypes.func,
	onKeyboardFocus: React.PropTypes.func,
	onKeyDown: React.PropTypes.func,
	onKeyUp: React.PropTypes.func,
	onMouseDown: React.PropTypes.func,
	onMouseEnter: React.PropTypes.func,
	onMouseLeave: React.PropTypes.func,
	onMouseUp: React.PropTypes.func,
	onTouchEnd: React.PropTypes.func,
	onTouchStart: React.PropTypes.func,
	onTouchTap: React.PropTypes.func,
};
BubbleListItem.defaultProps = {
	isOpen: false,
	isInTransition: false,
	positionV: 'bottom',
	tabIndex: 1,
	onBlur() {},
	onClick() {},
	onFocus() {},
	onKeyDown() {},
	onKeyUp() {},
	onMouseDown() {},
	onMouseEnter() {},
	onMouseLeave() {},
	onMouseUp() {},
	onTouchEnd() {},
	onTouchStart() {},
};
BubbleListItem.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
export default BubbleListItem;
