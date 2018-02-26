import React, { Component } from 'react'
import SearchBar from '../component/searchBar'
import Ask from '../component/ask'
import InboxIcon from './inboxIcon'
import NoticeIcon from './noticeIcon'
import UserIcon from './userIcon'
import { askQuestion } from '../action/question'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

@connect(
  state => ({
    user: state.get('people').get('current'),
    noReadChat: state.get('inbox').get('noReadChat'),
    chatList: state.get('inbox').get('chatList')
  }),
  {
    askQuestion
  }
)
export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      desc: ''
    }
    this.handleAskQuestion = this.handleAskQuestion.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAskQuestion() {
    if (this.state.title.trim()) {
      this.props.askQuestion(this.state.title, this.state.desc)
    }
  }

  render() {
    const { user, noReadChat } = this.props;

    let header;
    if (user.size) {
      header = (
        <div>
          <div>
            <button onClick={this.handleAskQuestion}>提问</button>
            <Ask handleTextChange={this.handleTextChange} />
          </div>
          <NoticeIcon />
          <InboxIcon noReadChat={noReadChat} />
          <UserIcon user={user} />
        </div>
      )
    } else {
      header = (
        <div>
            <Link to="/login">登录</Link>
            <Link to="/register">注册</Link>
        </div>
      )
    }
    return (
      <div>
        <SearchBar />
        {header}      
      </div>
    )
  }
}
