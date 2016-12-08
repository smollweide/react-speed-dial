import React from 'react';
const animTime = 450;

/**
 * Class SpeedDialHandler
 */
class SpeedDialHandler extends React.Component {

	/**
	 * @param {Object} props - component props
	 * @param {Object} context - component context
	 * @returns {void}
	 */
	constructor(props, context) {
		super(props, context);

		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClickClose = this.handleClickClose.bind(this);
		this.handleClickBackdrop = this.handleClickBackdrop.bind(this);
		this.handleFocusFirstListItem = this.handleFocusFirstListItem.bind(this);
		this.handleFocusPrimaryText = this.handleFocusPrimaryText.bind(this);
		this.handleFocusBackdrop = this.handleFocusBackdrop.bind(this);
		this.handleBlurBackdrop = this.handleBlurBackdrop.bind(this);
		this.handleBackdropKeyUp = this.handleBackdropKeyUp.bind(this);
	}

	/**
	 * @returns {void}
	 */
	handleFocusFirstListItem() {
		if (!this.refs.list || !this.refs.list.refs || !this.refs.list.refs.listItem0) {
			return;
		}

		this.refs.list.refs.listItem0.setFocus();
	}

	/**
	 * @returns {void}
	 */
	handleClickOpen() {

		this.setState({
			isOpen: true,
			isInTransition: true,
		});

		/* istanbul ignore next */
		setTimeout(() => {
			this.setState({
				isInTransition: false,
			});
			this.handleFocusFirstListItem();
		}, animTime);
	}

	/**
	 * @returns {void}
	 */
	handleClickClose() {

		this.props.onClickPrimaryButton();

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
	 * @returns {void}
	 */
	handleFocusPrimaryText() {
		this.refs.btn.refs.container.refs.enhancedButton.focus();
	}

	/**
	 * @returns {void}
	 */
	handleFocusBackdrop() {
		this.setState({
			isBackdropFocused: true,
		});
	}

	/**
	 * @returns {void}
	 */
	handleBlurBackdrop() {
		this.setState({
			isBackdropFocused: false,
		});
	}

	/**
	 * @param {Object} event - the backdrop keyUp event
	 * @returns {void}
	 */
	handleBackdropKeyUp(event) {
		if (event.keyCode !== 13) {
			return;
		}

		this.handleClickBackdrop();
	}
}

export default SpeedDialHandler;
