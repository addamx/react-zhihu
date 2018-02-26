import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { fetchUser } from '../../action/user'
import { connect } from 'react-redux'

@connect(state => ({
  userId: state.get('people').get('current').get('_id')
}), {
  fetchUser
})
export default class Author extends Component {
  constructor() {
    super();
    this.state = {
      questionCount:  -1,
      answerCount: -1,
      modalShown: false
    }
    this.handlerOnHover = this.handlerOnHover.bind(this);
    this.handlerOnHoverOut = this.handlerOnHoverOut.bind(this);
    this.handlerOnClick = this.handlerOnClick.bind(this);
  }

  async handlerOnHover() {
    if(this.state.questionCount === -1) {
      const res = await this.props.fetchUser(this.props.author.get('_id'));
      this.setState({
        questionCount: res.get('questions').size,
        answerCount: res.get('answers').size
      })
    }
    this.setState({
      modalShown: true
    })
  }

  handlerOnHoverOut() {
    this.setState({
      modalShown: false
    })
  }

  handlerOnClick() {
    const chatId = [this.props.userId, this.props.author.get('_id')].sort().join('');
    console.log(this.props)
    this.props.history.push(`/chat/${chatId}`)
  }

  render() {
    const {questionCount, answerCount, modalShown} = this.state;

    let modal = null;
    if (questionCount !== -1) {
      modal = 
        <div className="author-modal" style={{display: modalShown ? 'block' : 'none'}}>
          <h5 className="modal-top">{this.props.author.get('name')}</h5>
          <div className="author-detail">
            <table>
              <thead>
                <tr>
                  <td>提问</td>
                  <td>回答</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{questionCount}</td>
                  <td>{answerCount}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {
            this.props.userId && this.props.userId !== this.props.author.get('_id') &&
            <div className="modal-bottom"><button className="primary" onClick={this.handlerOnClick}>发送私信</button></div>
          }
        </div>
    }
    return (
      <div className="author" onMouseOver={this.handlerOnHover} onMouseOut={this.handlerOnHoverOut}>
        <Link to={`/people/${this.props.author.get('_id')}`}>{this.props.author.get('name')}</Link>
        {modal}
      </div>
    )
  }
}
