import createKeyframes from './create-keyframes';

/**
 * @returns {number} - the window width or maxWidth
 * @private
 */
function _getWidth() {
	return Number(window.innerWidth <= 1024 ? window.innerWidth : 1024);
}

export const getCssKeyFrames = (className, key, { height, btnHeight, positionH }) => {

	const width = _getWidth();
	const translateY = `${Number(height / 2)}px`;
	const translateX = `${width / 2 - btnHeight}px`;
	const translateClosed = '0px,0px';
	const translatePartA = `0px,${translateY}`;
	const translateScale = width / 40;
	let translateOpened = '0px,0px';

	if (positionH === 'left') {
		translateOpened = `${translateX},${translateY}`;
	} else {
		translateOpened = `-${translateX},${translateY}`;
	}

	return createKeyframes(
		{
			className: className + key,
			name: className + key,
			iterationCount: 1,
		},
		{
			'0%': {
				translate: translateClosed,
				scaleX: 1,
				scaleY: 1,
			},
			'20%': {
				translate: translatePartA,
				scaleX: 1,
				scaleY: 1,
			},
			'40%': {
				translate: translateOpened,
				scaleX: translateScale / 2,
				scaleY: translateScale / 2,
			},
			'100%': {
				translate: translateOpened,
				scaleX: translateScale,
				scaleY: translateScale,
			},
		}
	);
};

export const getCssKeyFramesClosing = (className, key, { height, btnHeight, positionH }) => {

	const width = _getWidth();
	const translateY = `${Number(height / 2)}px`;
	const translateX = `${width / 2 - btnHeight}px`;
	const translateClosed = '0px,0px';
	const translatePartA = `0px,${translateY}`;
	const translateScale = width / 40;
	let translateOpened = '0px,0px';

	if (positionH === 'left') {
		translateOpened = `${translateX},${translateY}`;
	} else {
		translateOpened = `-${translateX},${translateY}`;
	}

	return createKeyframes(
		{
			className: className + key,
			name: className + key,
			iterationCount: 1,
		},
		{
			'0%': {
				translate: translateOpened,
				scaleX: translateScale,
				scaleY: translateScale,
			},
			'20%': {
				translate: translatePartA,
				scaleX: translateScale / 2,
				scaleY: translateScale / 2,
			},
			'40%': {
				translate: translateClosed,
				scaleX: 1,
				scaleY: 1,
			},
			'100%': {
				translate: translateClosed,
				scaleX: 1,
				scaleY: 1,
			},
		}
	);
};
