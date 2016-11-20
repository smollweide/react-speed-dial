
import React from 'react';
import getStyles from './speed-dial-list-item.styles';

const SpeedDialListItem = ({ href, primaryText, rightAvatar, isOpen, isInTransition }, { muiTheme }) => {

	const styles = getStyles(muiTheme);
	let rightAvatarMapped;
	let stylesText;
	let stylesAvatar;
	let link;

	if (isInTransition) {
		stylesText = styles.text;
		stylesAvatar = styles.rightAvatar;
	} else {
		stylesText = Object.assign(styles.text, styles.textFinal);
		stylesAvatar = Object.assign(styles.rightAvatar, styles.rightAvatarFinal);
	}

	if (rightAvatar) {
		rightAvatarMapped = React.cloneElement(rightAvatar, {
			style: Object.assign({}, rightAvatar.props.style, stylesAvatar),
		});
	}

	const content = (
		<span>
			<span style={stylesText}>{primaryText}</span>
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
		<li style={isOpen ? styles.main : styles.mainInvisible}>
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
};
SpeedDialListItem.defaultProps = {
	isOpen: false,
	isInTransition: false,
};
SpeedDialListItem.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
export default SpeedDialListItem;
