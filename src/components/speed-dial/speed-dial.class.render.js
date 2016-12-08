
import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import BubbleListItem from '../bubble-list-item/bubble-list-item.js';
import SpeedDialBoolean from './speed-dial.class.boolean';

/**
 * Class SpeedDialRender
 */
class SpeedDialRender extends SpeedDialBoolean {

	/**
	 * @returns {Array} returns the icon component's
	 */
	renderIcon() {

		const { icon, iconOpen } = this.props;
		const { isOpen } = this.state;

		return [
			React.cloneElement(icon, {
				key: '0',
				style: isOpen ? this.styles.iconClosed.invisible : this.styles.iconClosed.main,
			}),
			React.cloneElement(iconOpen, {
				key: '1',
				style: isOpen ? this.styles.iconOpen.main : this.styles.iconOpen.invisible,
			}),
		];
	}

	/**
	 * @returns {XML} returns the children toolbox eg. `BottomNavigation` component
	 */
	renderToolbox() {

		const { toolbox } = this.props;

		if (!this.isToolbox()) {
			return null;
		}

		return (
			<div
				className={toolbox.className}
				style={this.getStylesToolbox()}
			/>
		);
	}

	/**
	 * @returns {XML} returns the children (list)
	 */
	renderChildren() {

		const { children, positionV } = this.props;
		const { isOpen, isInTransition } = this.state;

		if (this.isToolbox()) {
			return null;
			// return React.cloneElement(toolbox, {
			//	ref: 'toolbox',
			// });
		}

		if (!children.type || children.type.displayName !== 'BubbleList') {
			return children;
		}

		return React.cloneElement(children, {
			isOpen,
			isInTransition,
			direction: this.getDirection(),
			alignment: this.getAlignment(),
			positionV,
			ref: 'list',
		});
	}

	/**
	 * @returns {XML} returns the backdrop
	 */
	renderBackdrop() {

		const { hasBackdrop, classNameBackdrop, tabIndex, styleBackdrop } = this.props;
		const { isOpen } = this.state;
		const styles = this.styles;
		const stylesWrap = isOpen ? styles.backdropWrap.main : styles.backdropWrap.invisible;

		if (!hasBackdrop || this.isToolbox()) {
			return null;
		}

		return (
			<span
				className={classNameBackdrop}
				style={Object.assign({}, stylesWrap, styleBackdrop)}
			>
				<a
					style={this.getStylesBackdrop()}
					tabIndex={isOpen ? (tabIndex + 1) : -1}
					onBlur={this.handleBlurBackdrop}
					onFocus={this.handleFocusBackdrop}
					onKeyUp={this.handleBackdropKeyUp}
					onTouchTap={this.handleClickBackdrop}
				/>
			</span>
		);
	}

	/**
	 * @returns {XML} returns the primary text
	 */
	renderPrimaryText() {

		const { primaryText, onClickPrimaryButton, tabIndex } = this.props;
		const { isOpen } = this.state;

		if (['left', 'right'].indexOf(this.getDirection()) >= 0) {
			return null;
		}

		if (!primaryText || primaryText === '') {
			return null;
		}

		return (
			<ul style={this.getStylesPrimaryText()}>
				<BubbleListItem
					isOpen
					primaryText={primaryText}
					tabIndex={isOpen ? tabIndex : -1}
					onClick={onClickPrimaryButton}
					onFocus={this.handleFocusPrimaryText}
				/>
			</ul>
		);
	}

	/**
	 * @returns {XML} returns the `FloatingActionButton`
	 */
	renderActionButton() {

		const {
			floatingActionButtonProps,
			tabIndex,
		} = this.props;
		const { isOpen } = this.state;
		const handleClick = isOpen ? this.handleClickClose : this.handleClickOpen;
		const btnProps = Object.assign({}, floatingActionButtonProps, {
			onTouchTap: handleClick,
		});

		return (
			<FloatingActionButton
				ref="btn"
				tabIndex={tabIndex}
				{...btnProps}
			>
				{this.renderIcon()}
			</FloatingActionButton>
		);
	}
}

export default SpeedDialRender;
