import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { SpeedDial, BubbleList, BubbleListItem } from '../../speed-dial';

const avatarImgUrl = 'http://lorempixel.com/80/80/people';
const list = {
	items: [
		{
			primaryText: 'Kerem Suer',
			rightAvatar: <Avatar src={`${avatarImgUrl}/6`} />,
		},
		{
			primaryText: 'Raquel Parrado',
			rightAvatar: <Avatar src={`${avatarImgUrl}/7`} />,
		},
		{
			primaryText: 'Write',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<IconEdit />} />,
		},
	],
};

const ExampleDirection = () => {
	return (
		<div>
			<SpeedDial
				positionH="right"
				positionV="bottom"
			>
				<BubbleList
					alignment="up"
					direction="left"
				>
					{list.items.reverse().map((item, index) => {
						return (<BubbleListItem key={index} {...item} />);
					})}
				</BubbleList>
			</SpeedDial>
		</div>
	);
};

ExampleDirection.displayName = 'ExampleDirection';

export default ExampleDirection;
