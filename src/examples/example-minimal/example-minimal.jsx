import React from 'react';
import Avatar from 'material-ui/Avatar';
import { SpeedDial, SpeedDialList, SpeedDialListItem } from '../../speed-dial';

const Minimal = () => {
	return (
		<SpeedDial>
			<SpeedDialList>
				<SpeedDialListItem
					primaryText="Eric Hoffman"
					rightAvatar={<Avatar src="http://lorempixel.com/80/80" />}
				/>
			</SpeedDialList>
		</SpeedDial>
	);
};

Minimal.displayName = 'Minimal';

export default Minimal;
