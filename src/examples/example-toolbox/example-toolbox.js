import React from 'react';
import { cyan400 } from 'material-ui/styles/colors';
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
			label: 'Raquel',
			icon: <IconEdit />,
		},
		{
			label: 'Write',
			icon: <IconEdit />,
		},
	],
};

const Toolbox = ({ onClickCloseToolbox }) => (
	<BottomNavigation
		style={{ background: cyan400 }}
	>
		{[].concat(list.items).reverse().map((item, index) => {
			return (
				<BottomNavigationItem
					key={index}
					onTouchTap={onClickCloseToolbox}
					{...item}
				/>);
		})}
	</BottomNavigation>
);
Toolbox.propTypes = {
	onClickCloseToolbox: React.PropTypes.func,
};


const ExampleToolbox = () => {
	return (
		<section>
			<div style={{ margin: '50px 0' }}>
				<SpeedDial
					positionV="inline"
					toolbox={{
						className: 'toolbox',
						height: 56,
					}}
				>
					<Toolbox />
				</SpeedDial>
			</div>
			<div style={{ margin: '150px 0' }}>
				<SpeedDial
					positionH="left"
					positionV="inline"
					toolbox={{
						className: 'toolbox',
						height: 56,
					}}
				>
					<Toolbox />
				</SpeedDial>
			</div>
			<article>
				<header>
					<h1>Hallo</h1>
				</header>
			</article>
		</section>
	);
};

ExampleToolbox.displayName = 'ExampleToolbox';

export default ExampleToolbox;
