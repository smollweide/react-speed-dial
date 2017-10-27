import transitions from 'material-ui/styles/transitions';

export default ({ paper, baseTheme }) => {
	return {
		root: {
			main: {
				backgroundColor: 'transparent',
				listStyle: 'none',
				cursor: 'pointer',
				transition: transitions.easeOut(),
			},

			// prop direction
			direction: {
				down: {
					marginBottom: 14,
				},
				up: {
					marginTop: 14,
				},
				right: {
					textAlign: 'left',
					float: 'left',
					marginRight: 14,
				},
				left: {
					textAlign: 'right',
					float: 'right',
					marginLeft: 14,
				},
			},

			// prop alignment
			alignment: {
				right: {},
				left: {},
			},

			// prop isOpen = true
			visible: {
				main: {
					opacity: 1,
					visibility: 'visible',
				},

				// prop direction
				direction: {
					down: {},
					up: {},
					right: {},
					left: {},
				},
			},

			// prop isOpen = false
			invisible: {
				main: {
					opacity: 0,
					visibility: 'hidden',
				},

				// prop direction
				direction: {
					left: {
						marginRight: -20,
					},
					right: {
						marginLeft: -20,
					},
					up: {
						marginTop: -40,
					},
					down: {
						marginBottom: -40,
					},
				},
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
				whiteSpace: 'nowrap',
			},

			// prop direction
			alignment: {
				left: {
					marginLeft: 24,
				},
				right: {
					marginRight: 24,
				},
				up: {
					display: 'none',
				},
				down: {
					display: 'none',
				},
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
