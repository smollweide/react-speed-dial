
import SpeedDialHandler from './speed-dial.class.handler';
import getStyles from './speed-dial.styles';

/**
 * Class SpeedDial
 */
class SpeedDialGetter extends SpeedDialHandler {

	/**
	 * @param {Object} props - component props
	 * @param {Object} context - component context
	 * @returns {void}
	 */
	constructor(props, context) {
		super(props, context);

		this.getStylesBackdrop = this.getStylesBackdrop.bind(this);
		this.styles = getStyles(context.muiTheme);
	}

	/**
	 * @returns {string} the BubbleList direction
	 */
	getDirection() {

		const { children, positionV } = this.props;

		if (children && children.props && children.props.direction) {
			return children.props.direction;
		}

		return positionV === 'bottom' ? 'up' : 'down';
	}

	/**
	 * @returns {string} the BubbleList alignment
	 */
	getAlignment() {

		const { children, positionH } = this.props;

		if (children && children.props && children.props.alignment) {
			return children.props.alignment;
		}

		return positionH;
	}

	/**
	 * @returns {Object} the `ActionButton`
	 */
	getActionButton() {
		try {
			return this.refs.btn.refs.container;
		} catch (err) {
			return {};
		}
	}

	/**
	 * @returns {Object} the `ActionButton` style object
	 */
	getActionButtonStyles() {
		try {
			return Object.assign({}, this.getActionButton().refs.enhancedButton.style);
		} catch (err) {
			return {};
		}
	}

	/**
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesBtn() {

		const { isOpen } = this.state;
		const { positionV, positionH, styleButtonWrap } = this.props;
		const styles = this.styles;

		if (this.isToolbox() && isOpen) {
			return Object.assign(
				{},
				styles.btnWrap.main,
				styles.btnWrap[positionV],
				styles.btnWrap[positionH],
				styleButtonWrap,
				styles.btnWrap.toolboxOpen
			);
		}

		return Object.assign(
			{},
			styles.btnWrap.main,
			styles.btnWrap[positionV],
			styles.btnWrap[positionH],
			styleButtonWrap
		);
	}

	/**
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesMain() {

		const { positionV, style } = this.props;
		const styles = this.styles;

		return Object.assign(
			{},
			styles.root.main,
			styles.root[positionV],
			style
		);
	}

	/**
	 * @returns {Object} merged styles for the `FloatingActionButton`
	 */
	getStylesContentWrap() {

		const { positionV, positionH } = this.props;
		const { isOpen } = this.state;
		const styles = this.styles;
		let stylesNotBubbleList = {};

		if (!this.isChildrenBubbleList()) {
			stylesNotBubbleList = Object.assign(
				{},
				styles.notBubbleList.main,
				styles.notBubbleList[isOpen ? 'visible' : 'invisible']
			);
		}

		return Object.assign(
			{},
			styles.contentWrap.main,
			styles.contentWrap[positionV],
			styles.contentWrap[positionH],
			styles.contentWrap.direction[this.getDirection()],
			styles.contentWrap.alignment[this.getAlignment()],
			stylesNotBubbleList
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
			styles.primaryText.main,
			styles.primaryText[String(isOpen)],
			styles.primaryText[positionH]
		);
	}

	/**
	 * @returns {Object} styles for backdrop element
	 */
	getStylesBackdrop() {
		const { isOpen, isBackdropFocused } = this.state;
		const styles = this.styles;
		const stylesLink = isOpen ? styles.backdrop.main : styles.backdrop.invisible;
		const stylesLinkFocused = isBackdropFocused ? styles.backdrop.focus : {};

		return Object.assign({}, stylesLink, stylesLinkFocused);
	}

	/**
	 * @returns {Object} styles for toolbox element
	 */
	getStylesToolbox() {
		const { isOpen } = this.state;
		const { toolbox } = this.props;
		const styles = this.styles;
		const stylesButton = this.getActionButtonStyles();
		const stylesMain = Object.assign({}, styles.toolbox.main, {
			backgroundColor: stylesButton.backgroundColor || '',
		});

		if (!isOpen) {
			return Object.assign(
				{},
				stylesMain
			);
		}

		const stylesOpen = {
			height: toolbox.height,
		};

		return Object.assign(
			{},
			stylesMain,
			stylesOpen
		);
	}
}

export default SpeedDialGetter;
