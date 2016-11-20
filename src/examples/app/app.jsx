
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Avatar from 'material-ui/Avatar';
import { blue500 } from 'material-ui/styles/colors';
import IconEmail from 'material-ui/svg-icons/communication/email';
import IconEdit from 'material-ui/svg-icons/image/edit';

import { SpeedDial, SpeedDialList, SpeedDialListItem } from '../../speed-dial';
import './app.css';

injectTapEventPlugin();

const avatarImgUrl = 'http://lorempixel.com/80/80/people';

const list = {
	items: [
		{
			primaryText: 'Eric Hoffman',
			rightAvatar: <Avatar src={`${avatarImgUrl}/1`} />,
		},
		{
			primaryText: 'Grace Ng',
			rightAvatar: <Avatar src={`${avatarImgUrl}/3`} />,
		},
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

const App = () => {
	return (
		<div className="app">
			<div className="app-header">
				<h2>Welcome to react speed dial (Material UI)</h2>
			</div>
			<MuiThemeProvider>
				<SpeedDial
					icon={<IconEmail />}
				>
					<SpeedDialList>
						{list.items.map((item, index) => {
							return (<SpeedDialListItem key={index} {...item} />);
						})}
					</SpeedDialList>
				</SpeedDial>
			</MuiThemeProvider>
		</div>
	);
};

App.displayName = 'App';
App.propTypes = {};
App.defaultProps = {};

export default App;
