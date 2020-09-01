import React from 'react';
import { shallow } from 'enzyme';
import SiteParse from './SiteParse';

describe('SiteParse', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<SiteParse />);
    expect(wrapper).toMatchSnapshot();
  });
});
