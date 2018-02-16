import React, { Component } from 'react'
import SearchBar from '../component/searchBar'
import Ask from '../component/ask'
import { askQuestion } from '../action/question'
import { connect } from 'react-redux'

@connect(
  state => ({
    user: state.get('people').get('current'),
    noReadChat: state.get('inbox').get('noReadChat')
  }),
  {
    askQuestion
  }
)
export default class Header extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      desc: ''
    }
    this.handleAskQuestion = this.handleAskQuestion.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAskQuestion() {
    const isSuccess = this.props.askQuestion(this.state.title, this.state.desc)
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div>
          <button onClick={this.handleAskQuestion}>提问</button>
          <Ask handleTextChange={this.handleTextChange} />
        </div>
        <div>
          <span>chat-Icon {this.props.noReadChat}</span>
        </div>
      </div>
    )
  }
}
