import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { SpeedDial, BubbleList, BubbleListItem } from '../../speed-dial';

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
			<BubbleList>
				{list.items.map((item, index) => {
					return <BubbleListItem key={index} {...item} />;
				})}
			</BubbleList>
		</SpeedDial>
	);
};

ExampleNoBackdrop.displayName = 'ExampleNoBackdrop';

export default ExampleNoBackdrop;
