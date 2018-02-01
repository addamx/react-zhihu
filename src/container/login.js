import React, { Component } from 'react'
import LoginForm from '../component/loginForm'
import RegisterForm from '../component/registerForm'
import { login, register } from '../action/user'
import { connect } from 'react-redux'

@connect(state => ({
  current: state.get('people').get('current')
}),{ login, register })
export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      pwd: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }


  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleLogin() {
    const isSuccess = await this.props.login(this.state.name, this.state.pwd)
    isSuccess && this.props.history.push(`/people/${this.props.current.get('_id')}`)
  }

  async handleRegister() {
    const isSuccess = await this.props.register(this.state.name, this.state.pwd)
    isSuccess && this.props.history.push(`/people/${this.props.current.get('_id')}`)
  }

  render() {
    return (
      <div>
        <LoginForm handleLogin={this.handleLogin} handleTextChange={this.handleTextChange} value={{name: this.state.name, pwd: this.state.pwd}} />
        <RegisterForm handleRegister={this.handleRegister} handleTextChange={this.handleTextChange} value={{name: this.state.name, pwd: this.state.pwd}} />
      </div>
    )
  }
}
