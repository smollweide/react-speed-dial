
import React from 'react';
import getStyles from './speed-dial-list.styles';

const SpeedDialList = ({ children, isOpen, isInTransition }, muiTheme) => {

	const styles = getStyles(muiTheme);
	let listItems;

	if (children.type && children.type.displayName !== 'SpeedDialListItem') {
		return children;
	}

	if (
		children instanceof Array
	) {
		listItems = children.map((child, index) => {

			if (child.type && child.type.displayName !== 'SpeedDialListItem') {
				return child;
			}

			return React.cloneElement(child, {
				key: index,
				isOpen,
				isInTransition,
			});
		});
	} else {
		listItems = React.cloneElement(children, {
			isOpen,
			isInTransition,
		});
	}

	return (
		<ul style={isOpen ? styles.main : styles.mainInvisible} >
			{listItems}
		</ul>
	);
};

SpeedDialList.displayName = 'SpeedDialList';
SpeedDialList.propTypes = {
	children: React.PropTypes.any.isRequired,
	isInTransition: React.PropTypes.bool,
	isOpen: React.PropTypes.bool,
};
SpeedDialList.defaultProps = {
	isOpen: false,
	isInTransition: false,
};
SpeedDialList.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

export default SpeedDialList;
