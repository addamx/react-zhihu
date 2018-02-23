import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatList from '../component/chatList'

@connect(state => ({
  chatList: state.get('inbox').get('chatList')
}))
export default class Inbox extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this);
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
        <ChatList chatList={this.props.chatList} />
      </div>
    )
  }
}
