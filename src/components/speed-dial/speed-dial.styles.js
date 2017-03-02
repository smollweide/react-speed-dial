import { cyan500 } from 'material-ui/styles/colors';
import transitions from 'material-ui/styles/transitions';

export default ({ baseTheme }) => {
	return {
		root: {
			main: {
				position: 'fixed',
				width: '100%',
				left: 0,
				zIndex: 9999,
			},
			inline: {
				position: 'relative',
			},
			top: {
				top: 0,
			},
			bottom: {
				bottom: 0,
			},
		},

		actionButton: {
			invisible: {
				opacity: 0,
			},
		},

		toolbox: {
			main: {
				position: 'relative',
				transition: transitions.easeOut(),
				height: 0,
				width: '100%',
			},
		},

		toolboxInner: {
			main: {
				transition: transitions.easeOut(),
			},
			closed: {
				opacity: 0,
			},
			closing: {
				opacity: 0,
			},
			open: {
				opacity: 1,
			},
			opening: {
				opacity: 0,
			},
		},

		morphWrap: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			left: 0,
			top: 0,
			overflow: 'hidden',
		},

		morphActionButton: {


			main: {
				display: 'inline-block',
				transition: transitions.easeOut(),
				height: 56,
				width: 56,
				background: cyan500,
				zIndex: 0,
				opacity: 1,
				borderRadius: '50%',
			},

			closed: {
				transition: 'none',
			},

			closing: {
				transition: 'none',
			},

			opening: {
			},

			open: {
				transition: 'none',
				position: 'absolute',
				width: 'auto',
				height: 'auto',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				opacity: 1,
				borderRadius: '0%',
			},
		},

		notBubbleList: {
			main: {
				transition: transitions.easeOut(),
			},
			invisible: {
				opacity: 0,
			},
			visible: {
				opacity: 1,
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
				transition: transitions.easeOut(),
				position: 'absolute',
				opacity: 1,
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
			toolbox: {
				open: {
					opacity: 0,
				},
				closed: {
					opacity: 1,
				},
				opening: {
					opacity: 0,
				},
				closing: {
					opacity: 0,
				},
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
