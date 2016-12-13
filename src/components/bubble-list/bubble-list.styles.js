import transitions from 'material-ui/styles/transitions';

export default () => {
	return {
		root: {
			main: {
				position: 'absolute',
				opacity: 1,
				padding: 0,
				margin: 0,
				width: 320,
				transition: transitions.easeOut(),
			},

			// prop direction
			direction: {
				down: {
					top: 0,
				},
				up: {
					bottom: 0,
				},
				right: {
					left: 0,
				},
				left: {
					right: 0,
				},
				down_inline: {
					paddingTop: 40,
				},
				up_inline: {
					paddingBottom: 40,
				},
			},

			// prop alignment
			alignment: {
				down: {
					top: 0,
				},
				up: {
					bottom: -7,
				},
				right: {
					right: 0,
					textAlign: 'right',
				},
				left: {
					left: 0,
					textAlign: 'left',
				},
				middle: {
					top: -22,
				},
			},

			// prop isOpen = true
			visible: {
				main: {
					opacity: 1,
				},
			},

			// prop isOpen = false
			invisible: {
				main: {
					opacity: 0,
				},
			},
		},
	};
};
