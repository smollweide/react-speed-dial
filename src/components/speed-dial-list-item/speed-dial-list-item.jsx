
import React from 'react';
import getStyles from './speed-dial-list-item.styles';

const SpeedDialListItem = (
	{ href, primaryText, rightAvatar, leftAvatar, isOpen, positionV },
	{ muiTheme }
) => {

	const styles = getStyles(muiTheme);
	let rightAvatarCloned;
	let leftAvatarCloned;
	let link;

	const getVerticalStyleMain = () => {
		if (isOpen) {
			return positionV === 'bottom' ? styles.mainBottom : styles.mainTop;
		}

		return positionV === 'bottom' ? styles.mainInvisibleBottom : styles.mainInvisibleTop;
	};

	const getStylesMain = () => {

		const baseStyle = isOpen ? styles.main : styles.mainInvisible;
		const verticalStyle = getVerticalStyleMain();

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
	};

	const getStylesText = () => {
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
	};

	if (rightAvatar) {
		rightAvatarCloned = React.cloneElement(rightAvatar, {
			style: Object.assign({}, rightAvatar.props.style, styles.rightAvatar),
		});
	}

	if (leftAvatar) {
		leftAvatarCloned = React.cloneElement(leftAvatar, {
			style: Object.assign({}, leftAvatar.props.style, styles.leftAvatar),
		});
	}

	const content = (
		<span>
			{leftAvatarCloned}
			<span style={getStylesText()}>{primaryText}</span>
			{rightAvatarCloned}
		</span>
	);

	if (href) {
		link = (
			<a href={href} style={styles.wrap}>
				{content}
			</a>
		);
	} else {
		link = (
			<div style={styles.wrap}>
				{content}
			</div>
		);
	}

	return (
		<li style={getStylesMain()}>
			{link}
		</li>
	);
};

SpeedDialListItem.displayName = 'SpeedDialListItem';
SpeedDialListItem.propTypes = {
	href: React.PropTypes.string,
	isInTransition: React.PropTypes.bool,
	isOpen: React.PropTypes.bool,
	leftAvatar: React.PropTypes.object,
	positionV: React.PropTypes.string,
	primaryText: React.PropTypes.string,
	rightAvatar: React.PropTypes.object,
};
SpeedDialListItem.defaultProps = {
	isOpen: false,
	isInTransition: false,
	positionV: 'bottom',
};
SpeedDialListItem.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
export default SpeedDialListItem;
