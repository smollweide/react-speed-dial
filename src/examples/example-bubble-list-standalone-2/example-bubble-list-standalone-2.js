import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { BubbleList, BubbleListItem } from '../../speed-dial';

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
const listReverse = [].concat(list.items).reverse();

const ExampleBubbleListStandalone2 = () => {
	return (
		<div>
			<div style={{ position: 'absolute', top: 20, left: 20, border: '1px solid black' }}>
				<BubbleList isOpen alignment="down" direction="right">
					{listReverse.map((item, index) => {
						return <BubbleListItem key={index} {...item} />;
					})}
				</BubbleList>
			</div>
			<div style={{ position: 'absolute', top: 20, right: 20, border: '1px solid black' }}>
				<BubbleList isOpen alignment="down" direction="left">
					{listReverse.map((item, index) => {
						return <BubbleListItem key={index} {...item} />;
					})}
				</BubbleList>
			</div>
			<div style={{ position: 'absolute', bottom: 20, right: 20, border: '1px solid black' }}>
				<BubbleList isOpen alignment="up" direction="left">
					{listReverse.map((item, index) => {
						return <BubbleListItem key={index} {...item} />;
					})}
				</BubbleList>
			</div>
			<div style={{ position: 'absolute', bottom: 20, left: 20, border: '1px solid black' }}>
				<BubbleList isOpen alignment="up" direction="right">
					{listReverse.map((item, index) => {
						return <BubbleListItem key={index} {...item} />;
					})}
				</BubbleList>
			</div>
		</div>
	);
};

ExampleBubbleListStandalone2.displayName = 'ExampleBubbleListStandalone2';

export default ExampleBubbleListStandalone2;
