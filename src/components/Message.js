import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor!'
        }
    }

    changeMsg() {
        this.setState({
            message: 'Thank you for subscribing!!'
        })
    }
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick = {() => this.changeMsg()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;