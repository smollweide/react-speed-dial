
import React from 'react';
import getStyles from './speed-dial-list.styles';

const SpeedDialList = (
	{ children, isOpen, isInTransition, positionV, positionH, className },
	muiTheme
) => {

	const styles = getStyles(muiTheme);
	let listItems;

	const getStylesMain = () => {
		if (isOpen) {
			return Object.assign(
				styles.main,
				styles[`main${positionV}`],
				styles[`main${positionH}`]
			);
		}

		return Object.assign(
			styles.mainInvisible,
			styles[`mainInvisible${positionV}`],
			styles[`mainInvisible${positionH}`]
		);
	};

	if (!children) {
		return (<ul style={getStylesMain()} />);
	}

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
				positionV,
			});
		});
	} else {
		listItems = React.cloneElement(children, {
			isOpen,
			isInTransition,
			positionV,
		});
	}

	return (
		<ul className={className} style={getStylesMain()} >
			{listItems}
		</ul>
	);
};

SpeedDialList.displayName = 'SpeedDialList';
SpeedDialList.propTypes = {
	className: React.PropTypes.string,
	children: React.PropTypes.any,
	isInTransition: React.PropTypes.bool,
	isOpen: React.PropTypes.bool,
	positionH: React.PropTypes.string,
	positionV: React.PropTypes.string,
};
SpeedDialList.defaultProps = {
	isOpen: false,
	isInTransition: false,
	positionH: 'right',
	positionV: 'bottom',
};
SpeedDialList.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

export default SpeedDialList;
