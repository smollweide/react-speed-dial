import transitions from 'material-ui/styles/transitions';

export default () => {
	return {
		main: {
			position: 'absolute',
			bottom: 72,
			right: 24,
			opacity: 1,
			transition: transitions.easeOut(),
		},
		mainInvisible: {
			position: 'absolute',
			bottom: 16,
			right: 24,
			opacity: 0,
			transition: transitions.easeOut(),
		},
	};
};
