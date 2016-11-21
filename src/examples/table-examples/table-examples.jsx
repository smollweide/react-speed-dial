import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import './table-examples.css';

const examples = [
	{
		title: 'Basic',
		link: '#/',
		desc: 'Basic SpeedDial with SpeedDial list and backdrop'
	},
	{
		title: 'Minimal',
		link: '#/minimal',
		desc: 'Minimal SpeedDial with SpeedDial list in minimal configuration'
	}
];

const TableExamples = () => {
	return (
		<div className="table-examples">
			<Table
				multiSelectable={false}
				selectable={true}
				onRowSelection={([num]) => {
					window.location.hash = examples[num].link;
				}}
			>
				<TableHeader
					displaySelectAll={false}
				>
					<TableRow>
						<TableHeaderColumn style={{ width: 100 }}>Example</TableHeaderColumn>
						<TableHeaderColumn>Description</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody
					deselectOnClickaway={false}
					displayRowCheckbox={true}
				>
					{examples.map(({ title, link, desc }, index) => {
						return (
							<TableRow
								key={index}
								selectable
								selected={(window.location.hash.split('?')[0] === link)}
							>
								<TableRowColumn style={{ width: 100 }}>
									<a href={link}>{title}</a>
								</TableRowColumn>
								<TableRowColumn>
									{desc}
								</TableRowColumn>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};

TableExamples.displayName = 'TableExamples';

export default TableExamples;
