
/**
 * returns styles from given shallowNode as object
 *
 * @param {Object} domNode - the domNode eg. document.createElement('<div style="display:none" />')
 * @returns {Object} returns the styles as object eg. { display: 'none' }
 */
const getStylesFromDomNode = (domNode) => {
	const stylesObj = {};
	const attrStyle = domNode.getAttribute('style');

	if (!attrStyle) {
		return {};
	}

	attrStyle.split(';').forEach((style) => {
		const styleSpl = style.split(':');
		if (styleSpl.length < 2) {
			return true;
		}
		stylesObj[styleSpl[0].trim()] = styleSpl[1].trim();
	});
	return stylesObj;
};

export default getStylesFromDomNode;
