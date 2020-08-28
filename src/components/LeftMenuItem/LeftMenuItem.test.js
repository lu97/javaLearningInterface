import React from 'react';
import { shallow } from 'enzyme';
import LeftMenuItem from './LeftMenuItem';

describe('LeftMenuItem', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LeftMenuItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
