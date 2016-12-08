
import SpeedDialSetter from './speed-dial.class.setter';

/**
 * Class SpeedDial
 */
class SpeedDialBoolean extends SpeedDialSetter {

	/**
	 * @param {Object} props - component props
	 * @param {Object} context - component context
	 * @returns {void}
	 */
	constructor(props, context) {
		super(props, context);

		this.isChildrenBubbleList = this.isChildrenBubbleList.bind(this);
		this.isToolbox = this.isToolbox.bind(this);
	}

	/**
	 * @returns {boolean} returns true if the children component is `BubbleList` component
	 */
	isChildrenBubbleList() {
		const { children } = this.props;
		try {
			return Boolean(children.type.displayName === 'BubbleList');
		} catch (err) {
			return false;
		}
	}

	/**
	 * @returns {boolean} returns true if toolbox object exist and the height is set
	 */
	isToolbox() {
		const { toolbox } = this.props;
		return Boolean(toolbox && typeof toolbox.height === 'number');
	}
}

export default SpeedDialBoolean;
