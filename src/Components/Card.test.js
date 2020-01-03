import {shallow, mount, render} from 'enzyme';
import React from 'react'
import Card from './Card';

// mount full renders and needs jsdom
// render doesnt need a full dom api
it('.expect to render Card component', () => {
    expect(shallow(<Card />).length).toEqual(1);
    expect(shallow(<Card />)).toMatchSnapshot();
})
