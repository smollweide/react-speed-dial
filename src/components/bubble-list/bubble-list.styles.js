import transitions from 'material-ui/styles/transitions';

export default () => {
	return {
		root: {
			main: {
				position: 'absolute',
				opacity: 1,
				padding: 0,
				transition: transitions.easeOut(),
			},
			top: {
				top: 72,
			},
			bottom: {
				bottom: 72,
			},
			right: {
				right: 24,
			},
			left: {
				left: 24,
			},
		},

		rootInvisible: {
			main: {
				position: 'absolute',
				opacity: 0,
				padding: 0,
				transition: transitions.easeOut(),
			},
			top: {
				top: 16,
			},
			bottom: {
				bottom: 16,
			},
			right: {
				right: 24,
			},
			left: {
				left: 24,
			},
		},
	};
};
