import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { SpeedDial, BubbleList, BubbleListItem } from '../../speed-dial';

import fakerImage from '../faker-image';

const list = {
	items: [
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
const listLeft = {
	items: [
		{
			primaryText: 'Kerem Suer',
			leftAvatar: <Avatar src={fakerImage(6)} />,
		},
		{
			primaryText: 'Raquel Parrado',
			leftAvatar: <Avatar src={fakerImage(7)} />,
		},
		{
			primaryText: 'Write',
			leftAvatar: <Avatar backgroundColor={blue500} icon={<IconEdit />} />,
		},
	],
};

const ExampleInline = () => {
	return (
		<section>
			<div style={{ margin: '50px 0' }}>
				<SpeedDial positionH="left" positionV="inline">
					<BubbleList alignment="middle" direction="right">
						{[]
							.concat(list.items)
							.reverse()
							.map((item, index) => {
								return <BubbleListItem key={index} {...item} />;
							})}
					</BubbleList>
				</SpeedDial>
			</div>
			<div style={{ margin: '100px 0' }}>
				<SpeedDial positionV="inline">
					<BubbleList alignment="middle" direction="left">
						{[]
							.concat(list.items)
							.reverse()
							.map((item, index) => {
								return <BubbleListItem key={index} {...item} />;
							})}
					</BubbleList>
				</SpeedDial>
			</div>
			<div style={{ margin: '100px 0' }}>
				<SpeedDial positionH="left" positionV="inline">
					<BubbleList direction="down">
						{[]
							.concat(listLeft.items)
							.reverse()
							.map((item, index) => {
								return <BubbleListItem key={index} {...item} />;
							})}
					</BubbleList>
				</SpeedDial>
			</div>
			<div style={{ margin: '100px 0' }}>
				<SpeedDial positionH="right" positionV="inline">
					<BubbleList direction="up">
						{list.items.map((item, index) => {
							return <BubbleListItem key={index} {...item} />;
						})}
					</BubbleList>
				</SpeedDial>
			</div>
		</section>
	);
};

ExampleInline.displayName = 'ExampleInline';

export default ExampleInline;
