import React, { Component } from 'react'
import QuestionList from '../component/questionList'
import { connect } from 'react-redux'
import { fetchQuestionList } from '../action/question'
import { fetchUser } from '../action/user'
import { fetchChatList } from '../action/inbox'
import NavBar from '../component/navBar'


@connect(
  state => ({
    questionList: state.get('question').get('allQuestions')
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
        <NavBar />
        <QuestionList questionList={questionList} />
      </div>
    )
  }
}
