import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { BubbleList, BubbleListItem } from '../../speed-dial';

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
const listReverse = [].concat(list.items).reverse();

const ExampleBubbleListStandalone1 = () => {
	return (
		<div>
			<div style={{ position: 'absolute', top: 20, left: 20, border: '1px solid black' }}>
				<BubbleList
					isOpen
					alignment="left"
					direction="down"
				>
					{listReverse.map((item, index) => {
						const itemCp = Object.assign({}, item);
						itemCp.leftAvatar = Object.assign({}, itemCp.rightAvatar);
						delete itemCp.rightAvatar;
						return (<BubbleListItem key={index} {...itemCp} />);
					})}
				</BubbleList>
			</div>
			<div style={{ position: 'absolute', top: 20, right: 20, border: '1px solid black' }}>
				<BubbleList
					isOpen
					alignment="right"
					direction="down"
				>
					{listReverse.map((item, index) => {
						return (<BubbleListItem key={index} {...item} />);
					})}
				</BubbleList>
			</div>
			<div style={{ position: 'absolute', bottom: 20, right: 20, border: '1px solid black' }}>
				<BubbleList
					isOpen
					alignment="right"
					direction="up"
				>
					{list.items.map((item, index) => {
						return (<BubbleListItem key={index} {...item} />);
					})}
				</BubbleList>
			</div>
			<div style={{ position: 'absolute', bottom: 20, left: 20, border: '1px solid black' }}>
				<BubbleList
					isOpen
					alignment="left"
					direction="up"
				>
					{list.items.map((item, index) => {
						const itemCp = Object.assign({}, item);
						itemCp.leftAvatar = Object.assign({}, itemCp.rightAvatar);
						delete itemCp.rightAvatar;
						return (<BubbleListItem key={index} {...itemCp} />);
					})}
				</BubbleList>
			</div>
		</div>
	);
};

ExampleBubbleListStandalone1.displayName = 'ExampleBubbleListStandalone1';

export default ExampleBubbleListStandalone1;
