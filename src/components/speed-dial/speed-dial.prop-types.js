
import { PropTypes } from 'react';

export default {
	children: PropTypes.any,
	className: PropTypes.string,
	classNameBackdrop: PropTypes.string,
	classNameButtonWrap: PropTypes.string,
	classNameInTransition: PropTypes.string,
	classNameOpen: PropTypes.string,
	closeOnSecondClick: PropTypes.bool,
	floatingActionButtonProps: PropTypes.shape({
		backgroundColor: PropTypes.string,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		iconClassName: PropTypes.string,
		iconStyle: PropTypes.object,
		mini: PropTypes.bool,
		secondary: PropTypes.bool,
		style: PropTypes.object,
		zDepth: PropTypes.number,
	}),
	hasBackdrop: PropTypes.bool,
	icon: PropTypes.object,
	iconOpen: PropTypes.object,
	isInitiallyOpen: PropTypes.bool,
	positionH: PropTypes.string,
	positionV: PropTypes.string,
	primaryText: PropTypes.string,
	style: PropTypes.object,
	styleBackdrop: PropTypes.object,
	styleButtonWrap: PropTypes.object,
	tabIndex: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	toolbox: PropTypes.shape({
		height: PropTypes.number.isRequired,
		className: PropTypes.string,
	}),
	onClickPrimaryButton: PropTypes.func,
};