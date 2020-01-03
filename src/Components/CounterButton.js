import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.count!== nextState.count){
            return true;
        }
        return true;
    }

    updateCount = () => {
        this.setState(state =>  ({count: state.count+1})) //recommended 
    }
    
    render() {
        return (
            <button id='counter' color={this.props.color} onClick={this.updateCount}>count: {this.state.count} </button>
        );
    }
}

export default CounterButton;