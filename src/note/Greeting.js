import React, { Component } from 'react'

export class Greeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        };
    }


    render() {
        return (
            <>
                <Greeting2 isLoggedIn={true}/>
            </>
        )
    }
}
function Greeting2(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}


export default Greeting
