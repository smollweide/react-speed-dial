import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { SpeedDial, SpeedDialList, SpeedDialListItem } from '../../speed-dial';

const list = {
	items: [
		{
			primaryText: 'Write',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<IconEdit />} />,
		},
	],
};

const ExampleNoBackdrop = () => {
	return (
		<SpeedDial hasBackdrop={false}>
			<SpeedDialList>
				{list.items.map((item, index) => {
					return (<SpeedDialListItem key={index} {...item} />);
				})}
			</SpeedDialList>
		</SpeedDial>
	);
};

ExampleNoBackdrop.displayName = 'ExampleNoBackdrop';

export default ExampleNoBackdrop;
