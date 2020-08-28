import React from 'react';
import { shallow } from 'enzyme';
import LeftMenu from './LeftMenu';

describe('LeftMenu', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<LeftMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
