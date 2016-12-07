import React from 'react';
import { blue200 } from 'material-ui/styles/colors';
import IconEdit from 'material-ui/svg-icons/image/edit';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { SpeedDial } from '../../speed-dial';

const list = {
	items: [
		{
			label: 'Kerem Suer',
			icon: <IconEdit />,
		},
		{
			label: 'Raquel Parrado',
			icon: <IconEdit />,
		},
		{
			label: 'Write',
			icon: <IconEdit />,
		},
	],
};

const Toolbox = () => (
	<BottomNavigation
		style={{ background: blue200 }}
	>
		{[].concat(list.items).reverse().map((item, index) => {
			return (<BottomNavigationItem key={index} {...item} />);
		})}
	</BottomNavigation>
);

const ExampleToolbox = () => {
	return (
		<section>
			<div style={{ margin: '50px 0' }}>
				<SpeedDial
					positionV="inline"
					toolbox={{
						className: 'toolbox',
						height: 40,
					}}
				>
					<Toolbox />
				</SpeedDial>
			</div>
		</section>
	);
};

ExampleToolbox.displayName = 'ExampleToolbox';

export default ExampleToolbox;
