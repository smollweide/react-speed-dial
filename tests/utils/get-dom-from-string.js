/**
 * converts a string to a html dom node
 *
 * @param {string} htmlStr - the html string eg. '<a />'
 * @returns {Node|undefined} returns the dom node eg. <a />
 */
const getDomFromString = (htmlStr) => {
	const wrapper= document.createElement('div');
	wrapper.innerHTML = htmlStr;
	if (!wrapper.firstChild) {
		return undefined;
	}
	return wrapper.firstChild;
};

export default getDomFromString;