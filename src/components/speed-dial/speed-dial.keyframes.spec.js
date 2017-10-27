import { getCssKeyFrames, getCssKeyFramesClosing } from './speed-dial.keyframes';

const expected = [];

expected.push(
	'.test1{animation:test1 linear 0.45s;animation-iteration-count:1;}@keyframes ' +
		'test1{0%{transform:translate(0px,0px) scaleX(1) scaleY(1)}20%{transform:translate(0px,28px) scaleX(1) scaleY(1)}' +
		'40%{transform:translate(456px,28px) scaleX(12.8) scaleY(12.8)}100%{transform:translate(456px,28px) scaleX(25.6) ' +
		'scaleY(25.6)}}'
);
expected.push(
	'.test1{animation:test1 linear 0.45s;animation-iteration-count:1;}@keyframes ' +
		'test1{0%{transform:translate(456px,28px) scaleX(25.6) scaleY(25.6)}20%{transform:translate(0px,28px) ' +
		'scaleX(12.8) scaleY(12.8)}40%{transform:translate(0px,0px) scaleX(1) scaleY(1)}100%{' +
		'transform:translate(0px,0px) scaleX(1) scaleY(1)}}'
);
expected.push(
	'.test1{animation:test1 linear 0.45s;animation-iteration-count:1;}@keyframes ' +
		'test1{0%{transform:translate(0px,0px) scaleX(1) scaleY(1)}20%{transform:translate(0px,28px) scaleX(1) ' +
		'scaleY(1)}40%{transform:translate(456px,28px) scaleX(12.8) scaleY(12.8)}100%{transform:translate(456px,28px) ' +
		'scaleX(25.6) scaleY(25.6)}}'
);

describe('<SpeedDial /> keyframes', () => {
	describe('getCssKeyFrames', () => {
		it('basic', () => {
			window.innerWidth = 1024;
			const frames = getCssKeyFrames('test', '1', {
				height: 56,
				btnHeight: 56,
				positionH: 'left',
			});
			expect(frames).toEqual(expected[0]);
		});

		it('width 1280', () => {
			window.innerWidth = 1280;
			const frames = getCssKeyFrames('test', '1', {
				height: 56,
				btnHeight: 56,
				positionH: 'left',
			});
			expect(frames).toEqual(expected[2]);
		});
	});

	describe('getCssKeyFramesClosing', () => {
		it('basic', () => {
			window.innerWidth = 1024;
			const frames = getCssKeyFramesClosing('test', '1', {
				height: 56,
				btnHeight: 56,
				positionH: 'left',
			});
			expect(frames).toEqual(expected[1]);
		});
	});
});
