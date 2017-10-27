/* eslint-disable no-console */

import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500, red600 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import IconRemember from 'material-ui/svg-icons/action/touch-app';
import { SpeedDial, BubbleList, BubbleListItem } from '../../speed-dial';
import ExampleContent from '../example-content/example-content';

const avatarImgUrl = 'http://lorempixel.com/80/80/people';
const list = {
	items: [
		{
			primaryText: 'Eric Hoffman',
			rightAvatar: <Avatar src={`${avatarImgUrl}/1`} />,
			onClick() {
				console.log('click on "Eric Hoffman"');
			},
		},
		{
			primaryText: 'Grace Ng',
			rightAvatar: <Avatar src={`${avatarImgUrl}/3`} />,
			href: '/#/',
		},
		{
			primaryText: 'Raquel Parrado',
			rightAvatar: <Avatar src={`${avatarImgUrl}/7`} />,
			onClick() {
				console.log('click on "Raquel Parrado"');
			},
		},
		{
			primaryText: 'Remember',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<IconRemember />} />,
			onClick() {
				console.log('click on "Remember"');
			},
		},
	],
};

const ExampleInbox = () => {
	const floatingActionButtonProps = {
		backgroundColor: red600,
	};

	return (
		<div>
			<ExampleContent />
			<SpeedDial
				closeOnSecondClick={false}
				floatingActionButtonProps={floatingActionButtonProps}
				iconOpen={<IconEdit />}
				primaryText="Write"
				onClickPrimaryButton={() => {
					console.log('clicked write button');
				}}
			>
				<BubbleList>
					{list.items.map((item, index) => {
						return <BubbleListItem key={index} {...item} />;
					})}
				</BubbleList>
			</SpeedDial>
		</div>
	);
};

ExampleInbox.displayName = 'ExampleInbox';

export default ExampleInbox;
