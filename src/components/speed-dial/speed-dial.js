
import React from 'react';
import SpeedDialRender from './speed-dial.class.render';
import propTypes from './speed-dial.prop-types';
import defaultProps from './speed-dial.default-props';

/**
 * Class SpeedDial
 *
 * SpeedDial extends SpeedDialRender
 * SpeedDialRender extends SpeedDialBoolean
 * SpeedDialBoolean extends SpeedDialSetter
 * SpeedDialSetter extends SpeedDialGetter
 * SpeedDialGetter extends SpeedDialHandler
 * SpeedDialHandler extends React.Component
 *
 */
class SpeedDial extends SpeedDialRender {

	/**
	 * @param {Object} props - component props
	 * @param {Object} context - component context
	 * @returns {void}
	 */
	constructor(props, context) {
		super(props, context);

		this.state = {
			isOpen: props.isInitiallyOpen,
			isHalfOpen: false,
			isInTransition: false,
			isBackdropFocused: false,
		};
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {
		const {
			className,
			classNameInTransition,
			classNameOpen,
			classNameButtonWrap,
		} = this.props;
		const { isOpen, isInTransition } = this.state;
		const classNames = [className];

		if (isInTransition && classNameInTransition) {
			classNames.push(classNameInTransition);
		}

		if (isOpen && classNameOpen) {
			classNames.push(classNameOpen);
		}

		return (
			<div className={classNames.join(' ')} style={this.getStylesMain()}>
				{this.renderToolbox()}
				{this.renderBackdrop()}
				<div style={this.getStylesContentWrap()}>
					{this.renderChildren()}
				</div>
				<div className={classNameButtonWrap} style={this.getStylesBtn()}>
					{this.renderPrimaryText()}
					{this.renderActionButton()}
				</div>
			</div>
		);
	}
}

SpeedDial.displayName = 'SpeedDial';
SpeedDial.propTypes = propTypes;
SpeedDial.defaultProps = defaultProps;
SpeedDial.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

export default SpeedDial;
