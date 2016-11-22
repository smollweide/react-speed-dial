
import getDomFromString from './get-dom-from-string';

/**
 * returns styles from given shallowNode as object
 *
 * @param {Object} shallowNode - the shallowNode eg. shallow(<div style="display:none" />)
 * @returns {Object} returns the styles as object eg. { display: 'none' }
 */
const getStylesFromShallowNode = (shallowNode) => {
	const stylesObj = {};
	const attrStyle = getDomFromString(shallowNode.html()).getAttribute('style');

	if (!attrStyle) {
		return {};
	}

	attrStyle.split(';').forEach((style) => {
		const styleSpl = style.split(':');
		if (styleSpl.length < 2) {
			return true;
		}
		stylesObj[styleSpl[0]] = styleSpl[1];
	});
	return stylesObj;
};

export default getStylesFromShallowNode;