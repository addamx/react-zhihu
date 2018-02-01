import React, { Component } from 'react'
import AnswerList from '../component/answerList'
import QuestionList from '../component/questionList'
import { fetchUser } from '../action/user'
import { connect } from 'react-redux'
import { fromJS } from 'immutable'

@connect(null, { fetchUser })
export default class People extends Component {
  constructor() {
    super()
    this.state = {
      people: fromJS({
        name: '',
        answers: [],
        questions: []
      })
    }
  }
  async componentDidMount() {
    const res = await this.props.fetchUser(this.props.match.params.id);
    this.setState({people: res})
    console.log(this.state.people.toJS())
  }
  render() {
    return (
      <div>
        <h1>{this.state.people.get('name')}的个人主页</h1>
        <AnswerList answerList={this.state.people.get('answers')} />
        <QuestionList questionList={this.state.people.get('questions')} />
      </div>
    )
  }
}
