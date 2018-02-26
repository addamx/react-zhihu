import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQuestionList } from '../action/question'
import QuestionList from '../component/questionList'

import NavBar from '../component/navBar'


@connect(
  state => ({
    user: state.get('people').get('current'),
    questionList: state.get('question').get('allQuestions'),
  }),
  {
    fetchQuestionList
  }
)
export default class Home extends Component {
  componentDidMount() {
    this.props.fetchQuestionList();
  }
  render() {
    const { questionList, user } = this.props;
    const userId = user.get('_id');

    return (
      <div>
        <NavBar />
        <QuestionList questionList={questionList} history={this.props.history} />
      </div>
    )
  }
}
