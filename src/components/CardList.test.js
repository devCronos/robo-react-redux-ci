import {shallow, mount, render} from 'enzyme';
import React from 'react'
import CardList from './CardList';

// mount full renders and needs jsdom
// render doesnt need a full dom api
it('.expect to render CardList component', () => {

    const mockRobots = [
        {
            id:1,
            name: 'John Snow',
            email: 'john@mail.com'
        }
    ]

    expect(shallow(<CardList robots={mockRobots} />).length).toEqual(1);
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})
