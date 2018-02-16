import React, { Component } from 'react'
import QuestionList from '../component/questionList'
import { connect } from 'react-redux'
import { fetchQuestionList } from '../action/question'
import Header from './header'


@connect(
  state => ({
    questionList: state.get('question').get('allQuestions')
  }),
  {
    fetchQuestionList
  }
)
export default class DashBoard extends Component {
  componentDidMount() {
    this.props.fetchQuestionList();
  }
  render() {
    const { questionList } = this.props;
    return (
      <div>
        <Header />
        <QuestionList questionList={questionList} />
      </div>
    )
  }
}
