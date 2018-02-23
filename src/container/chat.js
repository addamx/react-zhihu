import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChat } from '../action/inbox'
import { sendMessage } from '../action/inbox'

@connect(state => ({
  chatList: state.get('inbox').get('chatList'),
  messageList: state.get('inbox').get('messageList'),
  userId: state.get('people').get('current').get('_id')
}), {
  sendMessage
})
export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      chat: [],
      talker: {}
    }
  }

  componentDidMount() {
    let chatId = this.props.match.params.id;
    const chat = this.props.messageList.filter(el => {
      return el.get('chatId') === chatId;
    });
    const talker = this.props.chatList.find(el => {
      return el.get('chatId') === chatId;
    }).get('talker');
    this.setState({
      chat,
      talker,
      message: ''
    })
    this.handleTextChange = this.handleTextChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }


  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  }

  submitMessage() {
    if (this.state.message) {
      this.props.sendMessage(this.state.talker,  this.state.message)
    }
  }

  render() {
    const { chat, talker } = this.state;
    if (talker.size) {
      return (
        <div>
          <ul>
            {
              chat.map((el, index) => (
                <li key={index}>
                  {el.get('fromMe') ? '我' : talker.get('name') }
                  : {el.get('message')}
                </li>
              ))
            }
          </ul>
          <div>
            <input onChange={this.handleTextChange} type="text" name="message" />
            <button onClick={this.submitMessage}>回复</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>正在读取...</div>
      )
    }
    
  }
}
