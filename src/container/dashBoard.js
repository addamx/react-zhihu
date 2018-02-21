import React, { Component } from 'react'
import QuestionList from '../component/questionList'
import { connect } from 'react-redux'
import { fetchQuestionList } from '../action/question'
import { fetchUser } from '../action/user'
import { fetchChatList } from '../action/inbox'
import InboxIcon from '../component/inboxIcon'


@connect(
  state => ({
    questionList: state.get('question').get('allQuestions'),
    noReadChat: state.get('inbox').get('noReadChat'),
    chatList: state.get('inbox').get('chatList')
  }),
  {
    fetchUser,
    fetchChatList,
    fetchQuestionList
  }
)
export default class DashBoard extends Component {
  async componentDidMount() {
    await this.props.fetchUser();
    await this.props.fetchChatList();
    this.props.fetchQuestionList();
  }
  render() {
    const { questionList } = this.props;
    return (
      <div>
        <InboxIcon noReadChat={this.props.noReadChat} />
        <QuestionList questionList={questionList} />
      </div>
    )
  }
}
