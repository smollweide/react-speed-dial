import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import getDomFromString from './get-dom-from-string';
import getStylesFromDomNode from './get-styles-from-dom-node';

it('getStylesFromDomNode returns object', () => {
	const wrapper = getDomFromString('<div style="display:none;"></div>');
	expect(typeof getStylesFromDomNode(wrapper)).toEqual('object');
});

it('getStylesFromDomNode returns object including style', () => {
	const wrapper = getDomFromString('<div style="display:none;"></div>');
	expect(getStylesFromDomNode(wrapper).display).toEqual('none');
});

it('getStylesFromDomNode returns empty object when not style attr is set', () => {
	const wrapper = document.createElement('div');
	expect(Object.keys(getStylesFromDomNode(wrapper)).length).toEqual(0);
});

