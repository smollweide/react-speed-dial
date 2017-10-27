import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './bubble-list.styles';

/**
 * @param {Object} child - the child component or node
 * @param {string} displayName - the displayName
 * @returns {boolean} returns true if child is component with given displayName
 */
function isValidChild(child, displayName) {
	return (
		child !== null &&
		typeof child === 'object' &&
		!(child instanceof Array) &&
		child.type &&
		child.type.displayName === displayName
	);
}

/**
 * Class BubbleList
 */
class BubbleList extends React.Component {
	/**
	 * @param {Object} props - component props
	 * @param {Object} muiTheme - the muiTheme in context
	 * @returns {void}
	 */
	constructor(props, { muiTheme }) {
		super(props);

		this.styles = getStyles(muiTheme);
		this.getStylesMain = this.getStylesMain.bind(this);
		this.renderChild = this.renderChild.bind(this);
	}

	/**
	 * @returns {Object} styles for root element
	 */
	getStylesMain() {
		const { isOpen, direction = 'up', alignment = 'right', positionV = 'bottom' } = this.props;
		const styles = this.styles;
		const visibleStr = isOpen ? 'visible' : 'invisible';
		return Object.assign(
			{},
			styles.root.main,
			styles.root[visibleStr].main,
			styles.root.direction[direction],
			styles.root.direction[`${direction}_${positionV}`],
			styles.root.alignment[alignment]
		);
	}

	/**
	 * @param {XML|Object} child - the child component
	 * @param {string|undefined} child.type - the child component type
	 * @param {string|undefined} child.type.displayName - the child component displayName
	 * @param {number} index - the child index
	 * @returns {XML} returns the cloned child component
	 */
	renderChild(child, index) {
		const { isOpen, isInTransition, direction = 'up', alignment = 'right' } = this.props;

		if (!isValidChild(child, 'BubbleListItem')) {
			return child;
		}

		return React.cloneElement(child, {
			key: index,
			isOpen,
			isInTransition,
			alignment,
			direction,
			ref: `listItem${index}`,
		});
	}

	/**
	 * @returns {XML|Array} returns the children component's
	 */
	renderChildren() {
		const { children } = this.props;

		if (!children) {
			return <ul style={this.getStylesMain()} />;
		}

		if (!isValidChild(children, 'BubbleListItem')) {
			if (children instanceof Array) {
				return children.map(this.renderChild);
			}
			return children;
		}

		return this.renderChild(children, 0);
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {
		const { className } = this.props;

		return (
			<ul className={className} style={this.getStylesMain()}>
				{this.renderChildren()}
			</ul>
		);
	}
}

BubbleList.displayName = 'BubbleList';
BubbleList.propTypes = {
	alignment: PropTypes.string,
	children: PropTypes.any,
	className: PropTypes.string,
	direction: PropTypes.string,
	isInTransition: PropTypes.bool,
	isOpen: PropTypes.bool,
	positionV: PropTypes.string,
};
BubbleList.defaultProps = {
	isOpen: false,
	isInTransition: false,
};
BubbleList.contextTypes = {
	muiTheme: PropTypes.object.isRequired,
};

export default BubbleList;
