import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import getStylesFromShallowNode from './get-styles-from-shallow-node';

it('getStylesFromShallowNode returns object', () => {
	const wrapper = shallow(
		<div style={{ display: 'none' }}></div>
	);
	expect(typeof getStylesFromShallowNode(wrapper)).toEqual('object');
});

it('getStylesFromShallowNode returns object including style', () => {
	const wrapper = shallow(
		<div style={{ display: 'none' }}></div>
	);
	expect(getStylesFromShallowNode(wrapper).display).toEqual('none');
});

it('getStylesFromShallowNode returns empty object when not style attr is set', () => {
	const wrapper = shallow(
		<div></div>
	);
	expect(Object.keys(getStylesFromShallowNode(wrapper)).length).toEqual(0);
});

