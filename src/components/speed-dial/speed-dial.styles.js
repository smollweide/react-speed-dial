import transitions from 'material-ui/styles/transitions';

export default ({ baseTheme }) => {
	return {
		root: {
			main: {
				position: 'fixed',
				width: '100%',
				left: 0,
			},
			inline: {
				position: 'relative',
				borderTop: '1px solid black',
			},
			top: {
				top: 0,
			},
			bottom: {
				bottom: 0,
			},
		},

		contentWrap: {
			main: {
				position: 'absolute',
			},
			top: {
				top: 88,
			},
			bottom: {
				bottom: 88,
			},
			left: {
				left: 23,
			},
			right: {
				right: 23,
			},

			// BubbleList direction
			direction: {
				up: {},
				down: {},
				left: {
					right: 88,
				},
				right: {
					left: 88,
				},
			},

			// BubbleList alignment
			alignment: {
				up: {
					bottom: 23,
				},
				down: {
					top: 23,
				},
				left: {},
				right: {},
			},
		},

		backdropWrap: {
			main: {
				position: 'fixed',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				top: 0,
				opacity: 1,
			},
			invisible: {
				opacity: 0,
			},
		},

		backdrop: {
			main: {
				position: 'absolute',
				backgroundColor: baseTheme.palette.borderColor,
				display: 'block',
				transition: transitions.easeOut(),
				width: '100%',
				height: '100%',
				top: 0,
				right: 0,
				opacity: 0.8,
			},
			invisible: {
				opacity: 0,
			},
			focus: {
				backgroundColor: baseTheme.palette.secondaryTextColor,
				opacity: 0.4,
			},
		},

		btnWrap: {
			main: {
				position: 'absolute',
			},
			inline: {
				top: -28,
			},
			bottom: {
				bottom: 16,
			},
			top: {
				top: 16,
			},
			left: {
				left: 16,
			},
			right: {
				right: 16,
			},
		},

		iconClosed: {
			main: {
				position: 'absolute',
				transform: 'rotate(0deg)',
				opacity: 1,
			},
			invisible: {
				position: 'absolute',
				transform: 'rotate(90deg)',
				opacity: 0,
			},
		},

		iconOpen: {
			main: {
				transform: 'rotate(0deg)',
				opacity: 1,
			},
			invisible: {
				transform: 'rotate(-90deg)',
				opacity: 0,
			},
		},

		primaryText: {
			main: {
				position: 'absolute',
				bottom: 10,
				margin: 0,
				transition: transitions.easeOut(),
			},
			true: {
				opacity: 1,
			},
			false: {
				opacity: 0,
			},
			left: {
				left: 33,
			},
			right: {
				right: 73,
			},
		},
	};
};
