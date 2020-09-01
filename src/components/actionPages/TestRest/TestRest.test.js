import React from 'react';
import { shallow } from 'enzyme';
import TestRest from './TestRest';

describe('TestRest', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<TestRest />);
    expect(wrapper).toMatchSnapshot();
  });
});
