import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true };

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }));
        this.setState((prevState) => ( 
            console.log('123' ,prevState)
        ));
    }

    render() {
        return (<>
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        </>)
    }
}
