import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { SpeedDial, BubbleList, BubbleListItem } from '../../speed-dial';
import fakerImage from '../faker-image';

const list = {
	items: [
		{
			primaryText: 'Eric Hoffman',
			rightAvatar: <Avatar src={fakerImage(1)} />,
		},
		{
			primaryText: 'Grace Ng',
			rightAvatar: <Avatar src={fakerImage(3)} />,
		},
		{
			primaryText: 'Kerem Suer',
			rightAvatar: <Avatar src={fakerImage(6)} />,
		},
		{
			primaryText: 'Raquel Parrado',
			rightAvatar: <Avatar src={fakerImage(7)} />,
		},
		{
			primaryText: 'Write',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<IconEdit />} />,
		},
	],
};

const ExampleBasic = () => {
	return (
		<SpeedDial>
			<BubbleList>
				{list.items.map((item, index) => {
					return <BubbleListItem key={index} {...item} />;
				})}
			</BubbleList>
		</SpeedDial>
	);
};

ExampleBasic.displayName = 'ExampleBasic';

export default ExampleBasic;
