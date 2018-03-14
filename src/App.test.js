import React from 'react';
import ReactDOM from 'react-dom';
configure({ adapter: new Adapter() });
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

import App from './App';
 
it('should have a className attribute', () => {
  const renderedComponent = shallow(<App />);
    expect(renderedComponent.prop('className')).toBeDefined();
}); 
