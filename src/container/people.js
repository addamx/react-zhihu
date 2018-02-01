import React, { Component } from 'react'
import AnswerList from '../component/answerList'
import QuestionList from '../component/questionList'
import { fetchUser } from '../action/user'
import { connect } from 'react-redux'
import { fromJS } from 'immutable'

@connect(
  null,
  { fetchUser }
)
export default class People extends Component {
  constructor() {
    super()
    this.state = {
      user: fromJS({
        name: '',
        answers: [],
        questions: []
      })
    }
  }
  async componentDidMount() {
    const userId = this.props.match.params.id;
    const res = await this.props.fetchUser(userId);
    this.setState({ user: res })
  }
  render() {
    return (
      <div>
        <h1>{this.state.user.get('name')}的个人主页</h1>
        <AnswerList answerList={this.state.user.get('answers')} />
        <QuestionList questionList={this.state.user.get('questions')} />
      </div>
    )
  }
}
