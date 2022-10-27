import React, { Component } from 'react'

export class LoginControl  extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        };
    }
    
    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>    
        }else{
            button = <LoginButton onClick={this.handleLoginClick}/>    
        }

        return (
            <div>
                {button}
            </div>
        )
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default LoginControl 


