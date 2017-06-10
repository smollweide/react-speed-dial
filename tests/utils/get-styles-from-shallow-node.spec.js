import React from 'react';
import { shallow } from 'enzyme';

import getStylesFromShallowNode from './get-styles-from-shallow-node';

it('getStylesFromShallowNode returns object', () => {
	const wrapper = shallow(
		<div style={{ display: 'none' }} />
	);
	expect(typeof getStylesFromShallowNode(wrapper)).toEqual('object');
});

it('getStylesFromShallowNode returns object including style', () => {
	const wrapper = shallow(
		<div style={{ display: 'none' }} />
	);
	expect(getStylesFromShallowNode(wrapper).display).toEqual('none');
});

it('getStylesFromShallowNode returns empty object when not style attr is set', () => {
	const wrapper = shallow(
		<div />
	);
	expect(Object.keys(getStylesFromShallowNode(wrapper)).length).toEqual(0);
});
