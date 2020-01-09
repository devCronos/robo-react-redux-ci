import {shallow, mount, render} from 'enzyme';
import React from 'react'
import CounterButton from './CounterButton';

// mount full renders and needs jsdom
// render doesnt need a full dom api
it('.expect to render CounterButton component', () => {

    const mockRobots = 'red';

    expect(shallow(<CounterButton color={mockRobots} />).length).toEqual(1);
    expect(shallow(<CounterButton color={mockRobots} />)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
    const mockRobots = 'red';
    const wrapper = shallow(<CounterButton color={mockRobots} />);

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 1});

})