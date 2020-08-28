import React from 'react';
import { shallow } from 'enzyme';
import ActionPage from './ActionPage';

describe('ActionPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ActionPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
