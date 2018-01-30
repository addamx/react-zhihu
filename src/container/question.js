import React, { Component } from 'react'
import AnswerList from '../component/answerList'

export default class Question extends Component {
  render() {
    return (
      <div>
        <div class="question">如何理解event loop</div>
        <AnswerList />
      </div>
    )
  }
}
