
import getDomFromString from './get-dom-from-string';
import getStylesFromDomNode from './get-styles-from-dom-node';

/**
 * returns styles from given shallowNode as object
 *
 * @param {Object} shallowNode - the shallowNode eg. shallow(<div style="display:none" />)
 * @returns {Object} returns the styles as object eg. { display: 'none' }
 */
const getStylesFromShallowNode = (shallowNode) => {
	return getStylesFromDomNode(getDomFromString(shallowNode.html()));
};

export default getStylesFromShallowNode;