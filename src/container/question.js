import React, { Component } from 'react'
import AnswerList from '../component/answerList'
import { connect } from 'react-redux'
import { fetchQuestion } from '../action/question'

@connect(
  state => ({
    question: state.get('question').get('current'),
    answerList: state.get('question').get('current').get('answers')
  }),
  {
    fetchQuestion
  }
)
export default class Question extends Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <div className="question">{this.props.question.get('title')}</div>
        <AnswerList answerList={this.props.answerList} />
      </div>
    )
  }
}
