import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import { blue500, yellow600 } from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

const ListExampleFolder = () => (
	<div>
		<List>
			<Subheader inset>Folders</Subheader>
			<ListItem
				leftAvatar={<Avatar icon={<FileFolder />} />}
				primaryText="Photos"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 9, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar icon={<FileFolder />} />}
				primaryText="Recipes"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 17, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar icon={<FileFolder />} />}
				primaryText="Work"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 28, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar icon={<FileFolder />} />}
				primaryText="People"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 28, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar icon={<FileFolder />} />}
				primaryText="Shared"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 28, 2016"
			/>
		</List>
		<Divider inset />
		<List>
			<Subheader inset>Files</Subheader>
			<ListItem
				leftAvatar={<Avatar backgroundColor={blue500} icon={<ActionAssignment />} />}
				primaryText="Vacation itinerary"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 20, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar backgroundColor={yellow600} icon={<EditorInsertChart />} />}
				primaryText="Kitchen remodel"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 10, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar backgroundColor={yellow600} icon={<EditorInsertChart />} />}
				primaryText="Test file"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 10, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar backgroundColor={blue500} icon={<ActionAssignment />} />}
				primaryText="Costs"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 20, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar backgroundColor={blue500} icon={<ActionAssignment />} />}
				primaryText="Vacation itinerary"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 20, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar backgroundColor={yellow600} icon={<EditorInsertChart />} />}
				primaryText="Kitchen remodel"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 10, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar backgroundColor={yellow600} icon={<EditorInsertChart />} />}
				primaryText="Test file"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 10, 2016"
			/>
			<ListItem
				leftAvatar={<Avatar backgroundColor={blue500} icon={<ActionAssignment />} />}
				primaryText="Costs"
				rightIcon={<ActionInfo />}
				secondaryText="Jan 20, 2016"
			/>
		</List>
	</div>
);

export default ListExampleFolder;
