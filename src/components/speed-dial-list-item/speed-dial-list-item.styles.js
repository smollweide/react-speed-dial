import transitions from 'material-ui/styles/transitions';

export default ({ paper, baseTheme }) => {
	return {
		main: {
			backgroundColor: 'transparent',
			listStyle: 'none',
			marginTop: 14,
			opacity: 1,
			cursor: 'pointer',
			transition: transitions.easeOut(),
		},
		mainInvisible: {
			backgroundColor: 'transparent',
			listStyle: 'none',
			opacity: 0,
			transition: transitions.easeOut(),
		},
		mainLeft: {
			textAlign: 'left',
		},
		mainRight: {
			textAlign: 'right',
		},
		mainBottom: {},
		mainTop: {},
		mainInvisibleBottom: {
			marginTop: -40,
		},
		mainInvisibleTop: {
			marginBottom: -40,
		},
		wrap: {
			position: 'relative',
			display: 'inline-block',
			lineHeight: '40px',
			outline: 0,
			textDecoration: 'none',
		},
		text: {
			borderRadius: '5px',
			padding: '6px 12px 5px',
			fontSize: 14,
			color: baseTheme.palette.secondaryTextColor,
			backgroundColor: baseTheme.palette.canvasColor,
			boxShadow: paper.zDepthShadows[1],
		},
		textLeft: {
			marginLeft: 24,
		},
		textRight: {
			marginRight: 24,
		},
		rightAvatar: {
			float: 'right',
			boxShadow: paper.zDepthShadows[1],
		},
		leftAvatar: {
			float: 'left',
			boxShadow: paper.zDepthShadows[1],
		},

		focus: {
			avatar: {
				boxShadow: paper.zDepthShadows[2],
			},
			text: {
				boxShadow: paper.zDepthShadows[2],
			},
		},
	};
};
