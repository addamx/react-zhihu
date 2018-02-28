import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchQuestionList } from '../action/question'
import QuestionList from '../component/questionList'




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
      <div className={`page page-${this.constructor.name}`}>
        <QuestionList questionList={questionList} history={this.props.history} />
      </div>
    )
  }
}
