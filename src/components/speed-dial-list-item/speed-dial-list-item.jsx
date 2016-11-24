
import React from 'react';
import getStyles from './speed-dial-list-item.styles';

const SpeedDialListItem = (
	{ href, primaryText, rightAvatar, leftAvatar, isOpen, positionV },
	{ muiTheme }
) => {

	const styles = getStyles(muiTheme);
	let rightAvatarMapped;
	let leftAvatarMapped;
	let link;

	const getStylesMain = () => {

		const baseStyle = isOpen ? styles.main : styles.mainInvisible;
		let verticalStyle;

		if (isOpen) {
			verticalStyle = positionV === 'bottom' ? styles.mainBottom : styles.mainTop;
		} else {
			verticalStyle = positionV === 'bottom' ? styles.mainInvisibleBottom : styles.mainInvisibleTop;
		}

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
		rightAvatarMapped = React.cloneElement(rightAvatar, {
			style: Object.assign({}, rightAvatar.props.style, styles.rightAvatar),
		});
	}

	if (leftAvatar) {
		leftAvatarMapped = React.cloneElement(leftAvatar, {
			style: Object.assign({}, leftAvatar.props.style, styles.leftAvatar),
		});
	}

	const content = (
		<span>
			{leftAvatarMapped}
			<span style={getStylesText()}>{primaryText}</span>
			{rightAvatarMapped}
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
	primaryText: React.PropTypes.string,
	rightAvatar: React.PropTypes.object,
	leftAvatar: React.PropTypes.object,
	positionV: React.PropTypes.string,
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
