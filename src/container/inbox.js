import React, { Component } from 'react'
import { connect } from 'react-redux'
import { connectSocket, sendMessage } from '../action/inbox'

import { fetchUser } from '../action/user'

@connect(null, { connectSocket, sendMessage, fetchUser })
export default class Inbox extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchUser()
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>私信</h1>
        <button onClick={this.props.connectSocket}>connect serverSocket</button>
        <input onChange={this.handleTextChange} name="name" />
        <input onChange={this.handleTextChange} name="message"/>
        <button onClick={() => this.props.sendMessage(this.state.name, this.state.message)}>send msg</button>
      </div>
    )
  }
}
