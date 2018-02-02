import React, { Component } from 'react'
import { connect } from 'react-redux'
import { connectSocket, sendMessage } from '../action/inbox'

@connect(null, { connectSocket, sendMessage })
export default class Inbox extends Component {
  render() {
    return (
      <div>
        <h1>私信</h1>
        <button onClick={this.props.connectSocket}>connect serverSocket</button>
        <button onClick={() => this.props.sendMessage('123', 'Hello!')}>send msg</button>
      </div>
    )
  }
}
