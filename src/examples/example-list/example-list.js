import React from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import { Card, CardText } from 'material-ui/Card';
import { blue500 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { SpeedDial } from '../../speed-dial';

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

const ExampleList = () => {
	return (
		<SpeedDial>
			<Card>
				<CardText>
					<List>
						{list.items.map((item, index) => {
							return <ListItem key={index} {...item} />;
						})}
					</List>
				</CardText>
			</Card>
		</SpeedDial>
	);
};

ExampleList.displayName = 'ExampleList';

export default ExampleList;
