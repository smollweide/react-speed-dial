
import React from 'react';
import getStyles from './speed-dial-list-item.styles';


/**
 * Class SpeedDialListItem
 */
class SpeedDialListItem extends React.Component {

	/**
	 * @param {Object} props - component props
	 * @param {Object} muiTheme - the muiTheme in context
	 * @returns {void}
	 */
	constructor(props, { muiTheme }) {
		super(props);

		this.styles = getStyles(muiTheme);
		this.getVerticalStyleMain = this.getVerticalStyleMain.bind(this);
		this.getStylesMain = this.getStylesMain.bind(this);
		this.getStylesText = this.getStylesText.bind(this);
	}

	/**
	 * @returns {Object} vertical styles for root element
	 */
	getVerticalStyleMain() {

		const { isOpen, positionV } = this.props;
		const styles = this.styles;

		if (isOpen) {
			return positionV === 'bottom' ? styles.mainBottom : styles.mainTop;
		}

		return positionV === 'bottom' ? styles.mainInvisibleBottom : styles.mainInvisibleTop;
	}

	/**
	 * @returns {Object} styles for root element
	 */
	getStylesMain() {

		const { isOpen, leftAvatar } = this.props;
		const styles = this.styles;
		const baseStyle = isOpen ? styles.main : styles.mainInvisible;
		const verticalStyle = this.getVerticalStyleMain();

		if (leftAvatar) {
			return Object.assign(
				baseStyle,
				styles.mainLeft,
				verticalStyle
			);
		}

		return Object.assign(
			baseStyle,
			styles.mainRight,
			verticalStyle
		);
	}

	/**
	 * @returns {Object} styles for text element
	 */
	getStylesText() {

		const { leftAvatar } = this.props;
		const styles = this.styles;

		if (leftAvatar) {
			return Object.assign(
				styles.text,
				styles.textLeft
			);
		}

		return Object.assign(
			styles.text,
			styles.textRight
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
			style: Object.assign({}, avatar.props.style, styles[name]),
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

		const { href, onTouchTap, onClick } = this.props;
		const styles = this.styles;

		if (href) {
			return (
				<a
					href={href}
					ref="link"
					style={styles.wrap}
				>
					{this.renderContent()}
				</a>
			);
		}

		return (
			<a
				ref="link"
				style={styles.wrap}
				tabIndex="0"
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

SpeedDialListItem.displayName = 'SpeedDialListItem';
SpeedDialListItem.propTypes = {
	className: React.PropTypes.string,
	href: React.PropTypes.string,
	isInTransition: React.PropTypes.bool,
	isOpen: React.PropTypes.bool,
	leftAvatar: React.PropTypes.object,
	positionV: React.PropTypes.string,
	primaryText: React.PropTypes.string,
	rightAvatar: React.PropTypes.object,
	onClick: React.PropTypes.func,
	onTouchTap: React.PropTypes.func,
};
SpeedDialListItem.defaultProps = {
	isOpen: false,
	isInTransition: false,
	positionV: 'bottom',
	onClick() {},
};
SpeedDialListItem.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
export default SpeedDialListItem;
