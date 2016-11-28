import transitions from 'material-ui/styles/transitions';

export default ({ paper, baseTheme }) => {
	return {

		root: {
			main: {
				backgroundColor: 'transparent',
				listStyle: 'none',
				marginTop: 14,
				opacity: 1,
				cursor: 'pointer',
				transition: transitions.easeOut(),
			},
			left: {
				textAlign: 'left',
			},
			right: {
				textAlign: 'right',
			},
			bottom: {},
			top: {},
		},

		rootInvisible: {
			main: {
				backgroundColor: 'transparent',
				listStyle: 'none',
				opacity: 0,
				transition: transitions.easeOut(),
			},
			left: {
				textAlign: 'left',
			},
			right: {
				textAlign: 'right',
			},
			bottom: {
				marginTop: -40,
			},
			top: {
				marginBottom: -40,
			},
		},

		wrap: {
			main: {
				position: 'relative',
				display: 'inline-block',
				lineHeight: '40px',
				outline: 0,
				textDecoration: 'none',
			},
		},

		text: {
			main: {
				borderRadius: '5px',
				padding: '6px 12px 5px',
				fontSize: 14,
				color: baseTheme.palette.secondaryTextColor,
				backgroundColor: baseTheme.palette.canvasColor,
				boxShadow: paper.zDepthShadows[1],
			},
			left: {
				marginLeft: 24,
			},
			right: {
				marginRight: 24,
			},
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
