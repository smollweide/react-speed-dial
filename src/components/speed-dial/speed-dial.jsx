
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconAdd from 'material-ui/svg-icons/content/add';
import IconClose from 'material-ui/svg-icons/navigation/close';
import getStyles from './speed-dial.styles';

const animTime = 450;

/**
 * Class SpeedDial
 */
class SpeedDial extends React.Component {

	/**
	 * @param {Object} props - component props
	 * @param {Object} context - component context
	 * @returns {void}
	 */
	constructor(props, context) {
		super(props);

		this.state = {
			isOpen: false,
			isInTransition: false,
		};
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClickClose = this.handleClickClose.bind(this);
		this.styles = getStyles(context.muiTheme);
	}

	/**
	 * @returns {void}
	 */
	handleClickOpen() {
		/* istanbul ignore next */
		this.setState({
			isOpen: true,
			isInTransition: true,
		});
		/* istanbul ignore next */
		setTimeout(() => {
			this.setState({
				isInTransition: false,
			});
		}, animTime);
	}

	/**
	 * @returns {void}
	 */
	handleClickClose() {
		/* istanbul ignore next */
		if (this.props.closeOnSecondClick) {
			this.setState({
				isOpen: false,
			});
		}
		/* istanbul ignore next */
		setTimeout(() => {
			this.setState({
				isInTransition: false,
			});
		}, animTime);
	}

	/**
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesBtn() {

		const { positionV, positionH } = this.props;
		const styles = this.styles;

		return Object.assign(
			styles.btnWrap,
			styles[`btnWrap${positionV}`],
			styles[`btnWrap${positionH}`]
		);
	}

	/**
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesMain() {

		const { positionV } = this.props;
		const styles = this.styles;

		return Object.assign(
			styles.main,
			styles[`main${positionV}`]
		);
	}

	/**
	 * @returns {Array} returns the icon component's
	 */
	renderIcon() {

		const { icon, iconOpen } = this.props;
		const { isOpen } = this.state;

		return [
			React.cloneElement(icon, {
				key: '0',
				style: isOpen ? this.styles.iconClosedInvisible : this.styles.iconClosed,
			}),
			React.cloneElement(iconOpen, {
				key: '1',
				style: isOpen ? this.styles.iconOpen : this.styles.iconOpenInvisible,
			}),
		];
	}

	/**
	 * @returns {XML} returns the children (list)
	 */
	renderChildren() {

		const { children, positionV, positionH } = this.props;
		const { isOpen, isInTransition } = this.state;

		if (children.type.displayName !== 'SpeedDialList') {
			return children;
		}

		return React.cloneElement(children, {
			isOpen,
			isInTransition,
			positionV,
			positionH,
		});
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {

		const { isOpen } = this.state;
		const styles = this.styles;
		const handleClick = isOpen ? this.handleClickClose : this.handleClickOpen;

		return (
			<div style={this.getStylesMain()}>
				<span style={isOpen ? styles.backdropWrap : styles.backdropWrapInvisible}>
					<a
						style={isOpen ? styles.backdrop : styles.backdropInvisible}
						onTouchTap={handleClick}
					/>
				</span>
				{this.renderChildren()}
				<div style={this.getStylesBtn()}>
					<FloatingActionButton
						onTouchTap={handleClick}
					>
						{this.renderIcon()}
					</FloatingActionButton>
				</div>
			</div>
		);
	}
}

SpeedDial.displayName = 'SpeedDial';
SpeedDial.propTypes = {
	children: React.PropTypes.any.isRequired,
	closeOnSecondClick: React.PropTypes.bool,
	icon: React.PropTypes.object,
	iconOpen: React.PropTypes.object,
	positionV: React.PropTypes.string,
	positionH: React.PropTypes.string,
};
SpeedDial.defaultProps = {
	closeOnSecondClick: true,
	icon: <IconAdd />,
	iconOpen: <IconClose />,
	positionV: 'bottom',
	positionH: 'right',
};
SpeedDial.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};


export default SpeedDial;
