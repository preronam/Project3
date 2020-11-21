import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
                <input className="email" placeholder="Email"/>
                <input className="password" type="password" placeholder="Password"/>
                
                
            </div>
        )
    }
}

export default Login
