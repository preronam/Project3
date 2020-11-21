import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
            <div>
                <input className="username" placeholder="Username"/>
                     <input className="email" placeholder="Email"/>
                <input className="password" type="password" placeholder="Password"/>
                
            </div>
        )
    }
}

export default Signup
