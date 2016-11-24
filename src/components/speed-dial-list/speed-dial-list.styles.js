import transitions from 'material-ui/styles/transitions';

export default () => {
	return {
		main: {
			position: 'absolute',
			opacity: 1,
			padding: 0,
			transition: transitions.easeOut(),
		},
		maintop: {
			top: 72,
		},
		mainbottom: {
			bottom: 72,
		},
		mainright: {
			right: 24,
		},
		mainleft: {
			left: 24,
		},
		mainInvisible: {
			position: 'absolute',
			opacity: 0,
			padding: 0,
			transition: transitions.easeOut(),
		},
		mainInvisibletop: {
			top: 16,
		},
		mainInvisiblebottom: {
			bottom: 16,
		},
		mainInvisibleright: {
			right: 24,
		},
		mainInvisibleleft: {
			left: 24,
		},
	};
};
