
import getDomFromString from './get-dom-from-string';

it('getDomFromString "<h1>Hallo</h1>" returns object', () => {
	expect(typeof getDomFromString('<h1>Hallo</h1>')).toEqual('object');
});

it('getDomFromString empty string returns undefined', () => {
	expect(getDomFromString('')).toEqual(undefined);
});
