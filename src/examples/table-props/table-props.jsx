import React from 'react';
import './table-props.css';

const props = {
	SpeedDial: {
		children: {
			type: 'node',
			required: true,
			desc: 'Children passed to speed dial.',
		},
		closeOnSecondClick: {
			type: 'boolean',
			defaultProp: 'true',
			required: false,
			desc: 'If true, clicking or tapping the opened `FloatingActionButton` will close the speed dial.',
		},
		hasBackdrop: {
			type: 'boolean',
			defaultProp: 'true',
			required: false,
			desc: 'If true, the backdrop will be visible in open state.',
		},
		icon: {
			type: 'object',
			defaultProp: '<ContentAdd />',
			required: false,
			desc: 'This is the `Icon` element to be displayed as icon of the ' +
			'`FloatingActionButton` while in close state.',
		},
		iconOpen: {
			type: 'object',
			defaultProp: '<NavigationClose />',
			required: false,
			desc: 'This is the `Icon` element to be displayed as icon of the ' +
			'`FloatingActionButton` while in opene state.',
		},
		positionV: {
			type: 'string',
			defaultProp: 'bottom',
			required: false,
			desc: 'This string controls the vertical `FloatingActionButton` position.',
		},
		positionH: {
			type: 'string',
			defaultProp: 'right',
			required: false,
			desc: 'This string controls the horizontal `FloatingActionButton` position.',
		},
	},
	SpeedDialList: {
		children: {
			type: 'node',
			required: false,
			desc: 'Children passed to speed dial list.',
		},
	},
	SpeedDialListItem: {
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
				<thead
					displaySelectAll={false}
				>
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
