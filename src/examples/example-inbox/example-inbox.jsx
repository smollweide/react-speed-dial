/* eslint-disable no-console */

import React from 'react';
import Avatar from 'material-ui/Avatar';
import { blue500, red600 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import IconRemember from 'material-ui/svg-icons/action/touch-app';
import { SpeedDial, SpeedDialList, SpeedDialListItem } from '../../speed-dial';

const avatarImgUrl = 'http://lorempixel.com/80/80/people';
const list = {
	items: [
		{
			primaryText: 'Eric Hoffman',
			rightAvatar: <Avatar src={`${avatarImgUrl}/1`} />,
			onClick() { console.log('click on "Eric Hoffman"'); },
		},
		{
			primaryText: 'Grace Ng',
			rightAvatar: <Avatar src={`${avatarImgUrl}/3`} />,
			onTouchTap() { console.log('touchTap on "Grace Ng"'); },
		},
		{
			primaryText: 'Raquel Parrado',
			rightAvatar: <Avatar src={`${avatarImgUrl}/7`} />,
			onTouchTap() { console.log('touchTap on "Raquel Parrado"'); },
		},
		{
			primaryText: 'Remember',
			rightAvatar: <Avatar backgroundColor={blue500} icon={<IconRemember />} />,
			onTouchTap() { console.log('touchTap on "Remember"'); },
		},
	],
};

const ExampleInbox = () => {

	const floatingActionButtonProps = {
		backgroundColor: red600,
	};

	return (
		<SpeedDial
			closeOnSecondClick={false}
			floatingActionButtonProps={floatingActionButtonProps}
			iconOpen={<IconEdit />}
			primaryText="Write"
			onClickPrimaryButton={() => { console.log('clicked write button'); }}
		>
			<SpeedDialList>
				{list.items.map((item, index) => {
					return (<SpeedDialListItem key={index} {...item} />);
				})}
			</SpeedDialList>
		</SpeedDial>
	);
};

ExampleInbox.displayName = 'ExampleInbox';

export default ExampleInbox;
