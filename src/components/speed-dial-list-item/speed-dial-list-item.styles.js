import transitions from 'material-ui/styles/transitions';

export default ({ paper, baseTheme }) => {
	return {
		main: {
			textAlign: 'right',
			backgroundColor: 'transparent',
			listStyle: 'none',
			marginTop: 14,
			opacity: 1,
			cursor: 'pointer',
			transition: transitions.easeOut(),
		},
		mainInvisible: {
			textAlign: 'right',
			backgroundColor: 'transparent',
			listStyle: 'none',
			marginTop: -40,
			opacity: 0,
			transition: transitions.easeOut(),
		},
		wrap: {
			position: 'relative',
			display: 'inline-block',
			lineHeight: '40px',
		},
		text: {
			padding: '6px 12px 5px',
			borderRadius: '5px',
			fontSize: 14,
			marginRight: 24,
			color: baseTheme.palette.secondaryTextColor,
			backgroundColor: baseTheme.palette.canvasColor,
			boxShadow: paper.zDepthShadows[1],
		},
		textFinal: {

		},
		rightAvatar: {
			float: 'right',
			boxShadow: paper.zDepthShadows[1],
		},
		rightAvatarFinal: {

		},
	};
};
