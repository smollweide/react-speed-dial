
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
		this.setState({
			isOpen: true,
			isInTransition: true,
		});
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
		if (this.props.closeOnSecondClick) {
			this.setState({
				isOpen: false,
			});
		}
		setTimeout(() => {
			this.setState({
				isInTransition: false,
			});
		}, animTime);
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

		const { children } = this.props;
		const { isOpen, isInTransition } = this.state;

		if (children.type.displayName !== 'SpeedDialList') {
			return children;
		}

		return React.cloneElement(children, {
			isOpen,
			isInTransition,
		});
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {

		const { isOpen } = this.state;
		const handleClick = isOpen ? this.handleClickClose : this.handleClickOpen;

		return (
			<div style={this.styles.main}>
				<span style={this.styles.backdropWrap}>
					<a
						style={isOpen ? this.styles.backdrop : this.styles.backdropInvisible}
						onTouchTap={handleClick}
					/>
				</span>
				{this.renderChildren()}
				<div style={this.styles.btnWrap}>
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
	list: React.PropTypes.object,
};
SpeedDial.defaultProps = {
	closeOnSecondClick: true,
	icon: <IconAdd />,
	iconOpen: <IconClose />,
};
SpeedDial.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};


export default SpeedDial;
