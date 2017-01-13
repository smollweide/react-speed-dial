import React from 'react';
import './table-props.css';

const props = {
	SpeedDial: {
		'children': {
			type: 'node',
			required: true,
			desc: 'Children passed to speed dial.',
		},
		'className': {
			type: 'string',
			required: false,
			desc: 'Applied to the speed dial\'s root element.',
		},
		'classNameBackdrop': {
			type: 'string',
			required: false,
			desc: 'Applied to the speed dial\'s backdrop element.',
		},
		'classNameButtonWrap': {
			type: 'string',
			required: false,
			desc: 'Applied to the div which is wrapping the `FloatingActionButton` component.',
		},
		'classNameInTransition': {
			type: 'string',
			required: false,
			desc: 'Applied to the speed dial\'s main element while in transition.',
		},
		'classNameOpen': {
			type: 'string',
			required: false,
			desc: 'Applied to the speed dial\'s main element when opened.',
		},
		'closeOnScrollDown': {
			type: 'boolean',
			defaultProp: 'false',
			required: false,
			desc: 'If true, scrolling down will close the child component.',
		},
		'closeOnScrollUp': {
			type: 'boolean',
			defaultProp: 'false',
			required: false,
			desc: 'If true, scrolling up will close the child component.',
		},
		'closeOnSecondClick': {
			type: 'boolean',
			defaultProp: 'true',
			required: false,
			desc: 'If true, clicking or tapping the opened `FloatingActionButton` will close the speed dial.',
		},
		'floatingActionButtonProps': {
			type: 'object',
			required: false,
			desc: 'As defined in material-ui http://www.material-ui.com/#/components/floating-action-button',
		},
		'hasBackdrop': {
			type: 'boolean',
			defaultProp: 'true',
			required: false,
			desc: 'If true, the backdrop will be visible in open state.',
		},
		'icon': {
			type: 'object',
			defaultProp: '<ContentAdd />',
			required: false,
			desc: 'This is the `Icon` element to be displayed as icon of the ' +
			'`FloatingActionButton` while in close state.',
		},
		'iconOpen': {
			type: 'object',
			defaultProp: '<NavigationClose />',
			required: false,
			desc: 'This is the `Icon` element to be displayed as icon of the ' +
			'`FloatingActionButton` while in open state.',
		},
		'isInitiallyOpen': {
			type: 'boolean',
			defaultProp: 'false',
			required: false,
			desc: 'If true, the `SpeedDial` will be opened initially.',
		},
		'positionV': {
			type: 'string',
			defaultProp: '"bottom"',
			required: false,
			desc: 'This string controls the vertical `FloatingActionButton` position. ' +
			'The possible values are `top`, `bottom` and `inline`.',
		},
		'positionH': {
			type: 'string',
			defaultProp: '"right"',
			required: false,
			desc: 'This string controls the horizontal `FloatingActionButton` position. ' +
			'The possible values are `left` and `right`.',
		},
		'primaryText': {
			type: 'string',
			required: false,
			desc: 'This is the text to be display beside the `FloatingActionButton`.',
		},
		'style': {
			type: 'object',
			required: false,
			desc: 'This style object defines the styles for the `root` element.',
		},
		'styleBackdrop': {
			type: 'object',
			required: false,
			desc: 'This style object defines the styles for the `backdrop` element.',
		},
		'styleButtonWrap': {
			type: 'object',
			required: false,
			desc: 'This style object defines the styles for the wrapper of the `button` element.',
		},
		'tabIndex': {
			type: 'number',
			defaultProp: '1',
			required: false,
			desc: 'This is the index to define the tabIndex for the `FloatingActionButton`. The backdrop has tabIndex + 1.',
		},
		'toolbox': {
			type: 'object',
			required: false,
			desc: 'This prop defines a toolbox is set as child component.',
		},

		'toolbox.className': {
			type: 'string',
			required: false,
			desc: 'Applied to the speed dial\'s toolbox element.',
		},
		'toolbox.classNameMorphButton': {
			type: 'string',
			required: false,
			desc: 'Applied to the speed dial\'s morph button element.',
		},
		'toolbox.height': {
			type: 'number',
			required: true,
			desc: 'Defines the height of the toolbox placeholder while transforming.',
		},
		'onClickPrimaryButton': {
			type: 'function',
			required: false,
			desc: 'Callback function fired when the priamry button is clicked or touched.',
		},
	},
	BubbleList: {
		alignment: {
			type: 'string',
			required: false,
			desc: 'This string controls the `BubbleList` alignment. ' +
			'The possible values are `up`, `down`, `left`, `right` and `middle`. ' +
			'This prop will be set automatically by `SpeedDial` component but can be overwritten.',
		},
		className: {
			type: 'string',
			required: false,
			desc: 'Applied to the speed dial list\'s root element.',
		},
		children: {
			type: 'node',
			required: false,
			desc: 'Children passed to speed dial list.',
		},
		direction: {
			type: 'string',
			required: false,
			desc: 'This string controls the `BubbleList` direction. ' +
			'The possible values are `up`, `down`, `left` and `right`. ' +
			'This prop will be set automatically by `SpeedDial` component but can be overwritten.',
		},
	},
	BubbleListItem: {
		className: {
			type: 'string',
			required: false,
			desc: 'Applied to the speed dial list item\'s root element.',
		},
		href: {
			type: 'string',
			required: false,
			desc: 'The URL to link to when the button is clicked.',
		},
		primaryText: {
			type: 'string',
			required: false,
			desc: 'This is the block element that contains the primary text. ' +
			'If a string is passed in, a div tag will be rendered.',
		},
		rightAvatar: {
			type: 'node',
			required: false,
			desc: 'This is the `Avatar` element to be displayed on the right side.',
		},
		leftAvatar: {
			type: 'node',
			required: false,
			desc: 'This is the `Avatar` element to be displayed on the left side.',
		},
		tabIndex: {
			type: 'number',
			defaultProp: '1',
			required: false,
			desc: 'This is the index to define the tabIndex for the link.',
		},
		onClick: {
			type: 'function',
			required: false,
			desc: 'Callback function fired when the element is clicked or touched.',
		},
		onTouchTap: {
			type: 'function',
			required: false,
			desc: 'Callback function fired when the element is clicked or touched.',
		},
	},
};

const TableProps = ({ componentName }) => {

	const renderRow = (key, index) => {

		const { type, required, defaultProp, desc } = props[componentName][key];
		const title = `${key}${required ? ' *' : ''}`;
		let titleDefault = '-';

		if (defaultProp) {
			titleDefault = defaultProp;
		}

		return (
			<tr
				key={index}
			>
				<td>
					{title}
				</td>
				<td>
					{type}
				</td>
				<td>
					{titleDefault}
				</td>
				<td>
					{desc}
				</td>
			</tr>
		);
	};

	return (
		<div className="table-props prop-type-description">
			<h3>{componentName} Properties</h3>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Default</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(props[componentName]).map(renderRow)}
				</tbody>
			</table>
		</div>
	);
};

TableProps.displayName = 'TableProps';
TableProps.propTypes = {
	componentName: React.PropTypes.string,
};
TableProps.defaultProps = {
	componentName: 'SpeedDial',
};

export default TableProps;
