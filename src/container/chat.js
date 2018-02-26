import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChat } from '../action/inbox'
import { sendMessage, fetchUser, setCurrentChat } from '../action/inbox'

@connect(state => ({
  chatList: state.get('inbox').get('chatList'),
  messageList: state.get('inbox').get('messageList'),
  userId: state.get('people').get('current').get('_id'),
  talker: state.get('inbox').get('currentTalker'),
  currentChat: state.get('inbox').get('currentChat')
}), {
  sendMessage,
  fetchUser,
  setCurrentChat
})
export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      chat: []
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    let chatId = this.props.match.params.id;
    let talkerId = chatId.replace(this.props.userId, '');
    //获取聊天对象id    
    this.props.fetchUser(talkerId);
    
    //获取当前聊天记录
    this.props.setCurrentChat(chatId);
  }


  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  }

  submitMessage() {
    if (this.state.message) {
      this.props.sendMessage(this.props.talker.toJS(),  this.state.message, true)
    }
  }

  render() {
    const chat = this.props.currentChat;
    const talker = this.props.talker
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

    
  }
}
