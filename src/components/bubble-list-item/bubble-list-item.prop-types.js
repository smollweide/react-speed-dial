
import { PropTypes } from 'react';

export default {
	alignment: PropTypes.string,
	className: PropTypes.string,
	direction: PropTypes.string,
	href: PropTypes.string,
	isInTransition: PropTypes.bool,
	isOpen: PropTypes.bool,
	leftAvatar: PropTypes.object,
	positionV: PropTypes.string,
	primaryText: PropTypes.string,
	rightAvatar: PropTypes.object,
	tabIndex: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	onBlur: PropTypes.func,
	onClick: PropTypes.func,
	onFocus: PropTypes.func,
	onKeyboardFocus: PropTypes.func,
	onKeyDown: PropTypes.func,
	onKeyUp: PropTypes.func,
	onMouseDown: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
	onMouseUp: PropTypes.func,
	onTouchEnd: PropTypes.func,
	onTouchStart: PropTypes.func,
	onTouchTap: PropTypes.func,
};
