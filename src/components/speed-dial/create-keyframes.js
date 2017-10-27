const defaults = {
	className: 'animation',
	name: 'animationFrame',
	type: 'linear',
	duration: '0.45s',
	iterationCount: 1,
};

/**
 *
 * const transformations = {};
 * transformations['0%'] = { translate: '0px,0px', rotate: '0deg' }
 * transformations['50%'] = { translate: '200px,0px', rotate: '180deg' }
 *
 * createKeyframes('element-animation', transformations)
 *
 * .element-animation{
 * 		animation: animationFrames linear 4s;
 * 		animation-iteration-count: 1;
 * }
 * @keyframes animationFrames{
 * 		0% {
 * 			transform:  translate(0px,0px)  rotate(0deg) ;
 * 		}
 * 		100% {
 * 			transform:  translate(200px,0px)  rotate(180deg) ;
 * 		}
 * }
 *
 * @param {Object} options - the animation options
 * @param {Object} transformations - transformation steps
 * @returns {string} the keyframe css string
 */
function createKeyframes(options, transformations) {
	const out = [];
	const { className, name, type, duration, iterationCount } = Object.assign({}, defaults, options);
	const animations = [`animation:${name} ${type} ${duration};`, `animation-iteration-count:${iterationCount};`];
	out.push(`.${className}{${animations.join('')}}`);
	out.push(`@keyframes ${name}{`);
	Object.keys(transformations).forEach(step => {
		const transform = [];
		const transformObj = transformations[step];
		Object.keys(transformObj).forEach(transName => {
			transform.push(`${transName}(${transformObj[transName]})`);
		});
		out.push(`${step}{transform:${transform.join(' ')}}`);
	});
	out.push('}');
	return out.join('');
}

export default createKeyframes;
