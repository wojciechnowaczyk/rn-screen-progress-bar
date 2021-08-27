import React from 'react';
import {shallow} from 'enzyme';
import {expect, it} from '@jest/globals';
import {ProgressBar} from '../../src/components/ProgressBar';

describe('Progress Bar Component', () => {
  let component;
  beforeEach(() => {
    const props = {
      currentOffset: 0,
      componenHeight: 0,
    };
    component = shallow(<ProgressBar {...props} />);
  });
  it('should render Progress Bar component', () => {
    expect(component.find('#ProgressBarBox').length).toBe(1);
  });

  it('should render the percentage tex', () => {
    let props = {
      percentage: true,
    };
    component = shallow(<ProgressBar {...props} />);
    expect(component.find('#ProgressPercentage').length).toBe(1);
  });

  it('shouldnt render the percentage tex', () => {
    let props = {
      percentage: false,
    };
    component = shallow(<ProgressBar {...props} />);
    expect(component.find('#ProgressPercentage').length).toBe(0);
  });

  it('should render progress box default color', () => {
    console.log(component.find('#ProgressBarBox').props());
    expect(
      component.find('#ProgressBarBox').props().style.backgroundColor,
    ).toEqual('white');
  });

  it('should render progress box props color', () => {
    let props = {
      backgroundColor: '#a8dadc',
    };
    component = shallow(<ProgressBar {...props} />);
    expect(
      component.find('#ProgressBarBox').props().style.backgroundColor,
    ).toEqual('#a8dadc');
  });
});
