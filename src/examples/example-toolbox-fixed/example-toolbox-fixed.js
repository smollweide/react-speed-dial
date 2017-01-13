import React from 'react';
import { blue500, white } from 'material-ui/styles/colors';
import IconShare from 'material-ui/svg-icons/social/share';
import IconMail from 'material-ui/svg-icons/communication/email';
import IconCopy from 'material-ui/svg-icons/content/content-copy';
import IconAccount from 'material-ui/svg-icons/action/account-circle';
import IconUploadCloud from 'material-ui/svg-icons/file/cloud-upload';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

import { SpeedDial } from '../../speed-dial';
import ExampleContent from '../example-content/example-content';

const list = {
	items: [
		{
			icon: <IconUploadCloud color={white} />,
		},
		{
			icon: <IconAccount color={white} />,
		},
		{
			icon: <IconCopy color={white} />,
		},
		{
			icon: <IconMail color={white} />,
		},
	],
};

const Toolbox = ({ onClickCloseToolbox }) => (
	<div style={{ position: 'relative' }}>
		<BottomNavigation
			style={{ background: blue500 }}
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
	</div>
);
Toolbox.propTypes = {
	onClickCloseToolbox: React.PropTypes.func,
};

const ExampleToolbox = () => {
	return (
		<section style={{ maxWidth: 1024, margin: '0 auto' }}>
			<ExampleContent />
			<SpeedDial
				closeOnScrollDown
				closeOnScrollUp
				floatingActionButtonProps={{
					backgroundColor: blue500,
				}}
				icon={<IconShare />}
				toolbox={{
					className: 'toolbox',
					height: 56,
				}}
			>
				<Toolbox />
			</SpeedDial>
		</section>
	);
};

ExampleToolbox.displayName = 'ExampleToolbox';

export default ExampleToolbox;
