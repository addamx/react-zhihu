import React, { Component } from 'react'
import AnswerList from '../component/answerList'
import { connect } from 'react-redux'
import { fetchQuestion } from '../action/question'
import { addAnswer } from '../action/answer'
import AnswerEditor from '../component/answerEditor'

@connect(
  state => ({
    question: state.get('question').get('current'),
    answerList: state.get('question').get('current').get('answers')
  }),
  {
    fetchQuestion,
    addAnswer
  }
)
export default class Question extends Component {
  constructor(){
    super()
    this.state = {
      content: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleAddAnswer = this.handleAddAnswer.bind(this)
  }
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.id);
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAddAnswer() {
    const isSuccess = this.props.addAnswer(this.state.content, this.props.question.get('_id'))
  }
  render() {
    return (
      <div>
        <div className="question">{this.props.question.get('title')}</div>
        <AnswerList answerList={this.props.answerList} />
        <AnswerEditor handleTextChange={this.handleTextChange} handleAddAnswer={this.handleAddAnswer} />
      </div>
    )
  }
}
