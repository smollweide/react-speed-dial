
import React from 'react';
import propTypes from './bubble-list-item.prop-types';
import defaultProps from './bubble-list-item.default-props';
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
	 * @returns {Object} styles for root element
	 */
	getStylesMain() {
		const { isOpen, direction, alignment } = this.props;
		const styles = this.styles;
		const visibleStr = isOpen ? 'visible' : 'invisible';
		return Object.assign(
			{},
			styles.root.main,
			styles.root[visibleStr].main,
			styles.root.direction[direction],
			styles.root[visibleStr].direction[direction],
			styles.root.alignment[alignment]
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

		const { alignment } = this.props;
		const styles = this.styles;

		return Object.assign(
			{},
			styles.text.main,
			styles.text.alignment[alignment],
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

		const { primaryText, direction } = this.props;
		let content = (<span style={this.getStylesText()}>{primaryText}</span>);

		if (['left', 'right'].indexOf(direction) >= 0) {
			content = null;
		}

		return (
			<span>
				{this.renderAvatar('leftAvatar')}
				{content}
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
BubbleListItem.propTypes = propTypes;
BubbleListItem.defaultProps = defaultProps;
BubbleListItem.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
export default BubbleListItem;
