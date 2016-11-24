
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconAdd from 'material-ui/svg-icons/content/add';
import IconClose from 'material-ui/svg-icons/navigation/close';
import SpeedDialListItem from '../speed-dial-list-item/speed-dial-list-item.jsx';
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
		this.handleClickBackdrop = this.handleClickBackdrop.bind(this);
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
		this.props.onClickPrimaryButton();

		/* istanbul ignore next */
		if (this.props.closeOnSecondClick) {
			this.setState({
				isOpen: false,
				isInTransition: true,
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
	 * @returns {void}
	 */
	handleClickBackdrop() {
		/* istanbul ignore next */
		this.setState({
			isOpen: false,
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
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesBtn() {

		const { positionV, positionH } = this.props;
		const styles = this.styles;

		return Object.assign(
			{},
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
			{},
			styles.main,
			styles[`main${positionV}`]
		);
	}

	/**
	 * @returns {Object} merged styles for the primary text
	 */
	getStylesPrimaryText() {

		const { positionH } = this.props;
		const { isOpen } = this.state;
		const styles = this.styles;

		return Object.assign(
			{},
			styles.primaryText,
			styles[`primaryText${isOpen}`],
			styles[`primaryText${positionH}`]
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
	 * @returns {XML} returns the backdrop
	 */
	renderBackdrop() {

		const { hasBackdrop } = this.props;
		const { isOpen } = this.state;
		const styles = this.styles;

		if (!hasBackdrop) {
			return null;
		}

		return (
			<span style={isOpen ? styles.backdropWrap : styles.backdropWrapInvisible}>
				<a
					style={isOpen ? styles.backdrop : styles.backdropInvisible}
					onTouchTap={this.handleClickBackdrop}
				/>
			</span>
		);
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {

		const { floatingActionButtonProps, primaryText, onClickPrimaryButton } = this.props;
		const { isOpen } = this.state;
		const handleClick = isOpen ? this.handleClickClose : this.handleClickOpen;

		const btnProps = Object.assign({}, floatingActionButtonProps, {
			onTouchTap: handleClick,
		});

		return (
			<div ref="main" style={this.getStylesMain()}>
				{this.renderBackdrop()}
				{this.renderChildren()}
				<div style={this.getStylesBtn()}>
					<ul style={this.getStylesPrimaryText()}>
						<SpeedDialListItem
							isOpen
							primaryText={primaryText}
							onClick={onClickPrimaryButton}
						/>
					</ul>
					<FloatingActionButton ref="btn" {...btnProps}>
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
	floatingActionButtonProps: React.PropTypes.shape({
		backgroundColor: React.PropTypes.string,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		iconClassName: React.PropTypes.string,
		iconStyle: React.PropTypes.object,
		mini: React.PropTypes.bool,
		secondary: React.PropTypes.bool,
		style: React.PropTypes.object,
		zDepth: React.PropTypes.number,
	}),
	hasBackdrop: React.PropTypes.bool,
	icon: React.PropTypes.object,
	iconOpen: React.PropTypes.object,
	positionH: React.PropTypes.string,
	positionV: React.PropTypes.string,
	primaryText: React.PropTypes.string,
	onClickPrimaryButton: React.PropTypes.func,
};
SpeedDial.defaultProps = {
	closeOnSecondClick: true,
	hasBackdrop: true,
	icon: <IconAdd />,
	iconOpen: <IconClose />,
	positionH: 'right',
	positionV: 'bottom',
	onClickPrimaryButton: () => {},
};
SpeedDial.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};


export default SpeedDial;
