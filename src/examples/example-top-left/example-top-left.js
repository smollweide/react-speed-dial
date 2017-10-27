import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { SpeedDial, BubbleList, BubbleListItem } from '../../speed-dial';

const avatarImgUrl = 'http://lorempixel.com/80/80/people';
const list = {
	items: [
		{
			primaryText: 'Eric Hoffman',
			leftAvatar: <Avatar src={`${avatarImgUrl}/1`} />,
		},
		{
			primaryText: 'Grace Ng',
			leftAvatar: <Avatar src={`${avatarImgUrl}/3`} />,
		},
		{
			primaryText: 'Kerem Suer',
			leftAvatar: <Avatar src={`${avatarImgUrl}/6`} />,
		},
		{
			primaryText: 'Raquel Parrado',
			leftAvatar: <Avatar src={`${avatarImgUrl}/7`} />,
		},
		{
			primaryText: 'Write',
			leftAvatar: <Avatar backgroundColor={blue500} icon={<IconEdit />} />,
		},
	],
};

const ExampleTopLeft = () => {
	return (
		<SpeedDial positionH="left" positionV="top">
			<BubbleList>
				{list.items.map((item, index) => {
					return <BubbleListItem key={index} {...item} />;
				})}
			</BubbleList>
		</SpeedDial>
	);
};

ExampleTopLeft.displayName = 'ExampleTopLeft';

export default ExampleTopLeft;
