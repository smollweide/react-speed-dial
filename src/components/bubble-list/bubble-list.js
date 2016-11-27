
import React from 'react';
import getStyles from './bubble-list.styles';

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

		const { isOpen, positionV, positionH } = this.props;
		const styles = this.styles;

		if (isOpen) {
			return Object.assign(
				styles.main,
				styles[`main${positionV}`],
				styles[`main${positionH}`]
			);
		}

		return Object.assign(
			styles.mainInvisible,
			styles[`mainInvisible${positionV}`],
			styles[`mainInvisible${positionH}`]
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

		const { isOpen, isInTransition, positionV } = this.props;

		if (child.type && child.type.displayName !== 'BubbleListItem') {
			return child;
		}

		return React.cloneElement(child, {
			key: index,
			isOpen,
			isInTransition,
			positionV,
			ref: `listItem${index}`,
		});
	}

	/**
	 * @returns {XML|Array} returns the children component's
	 */
	renderChildren() {

		const { children, isOpen, isInTransition, positionV } = this.props;

		if (!children) {
			return (<ul style={this.getStylesMain()} />);
		}

		if (children.type && children.type.displayName !== 'BubbleListItem') {
			return children;
		}

		if (children instanceof Array) {
			return children.map(this.renderChild);
		}

		return React.cloneElement(children, {
			isOpen,
			isInTransition,
			positionV,
			ref: 'listItem',
		});
	}

	/**
	 * @returns {XML} returns the component
	 */
	render() {

		const { className } = this.props;

		return (
			<ul className={className} style={this.getStylesMain()} >
				{this.renderChildren()}
			</ul>
		);
	}
}

BubbleList.displayName = 'BubbleList';
BubbleList.propTypes = {
	children: React.PropTypes.any,
	className: React.PropTypes.string,
	isInTransition: React.PropTypes.bool,
	isOpen: React.PropTypes.bool,
	positionH: React.PropTypes.string,
	positionV: React.PropTypes.string,
};
BubbleList.defaultProps = {
	isOpen: false,
	isInTransition: false,
	positionH: 'right',
	positionV: 'bottom',
};
BubbleList.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

export default BubbleList;
