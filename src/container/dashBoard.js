import React, { Component } from 'react'
import Header from '../component/header'
import QuestionList from '../component/questionList'
import { connect } from 'react-redux'


@connect(
  state => ({
    questionList: state.get('questions').get('allQuestions')
  })
)
export default class DashBoard extends Component {
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
