import React, { Component } from 'react'
import LoginForm from '../component/loginForm'
import RegisterForm from '../component/registerForm'
import { login, register } from '../action/user'
import { connect } from 'react-redux'

@connect(state => ({
  current: state.get('people').get('current')
}), { login, register })
export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      pwd: '',
      route: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.onTab = this.onTab.bind(this)
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

  onTab(path) {
    this.props.history.push(path);
  }

  componentDidMount() {
    this.setState({route: this.props.location.pathname})
  }

  // 手动修改params后强制刷新state
  componentWillReceiveProps(nextProps) {
    this.setState({route: nextProps.location.pathname})
  }

  render() {

    let form;
    if (this.state.route === '/login') {
      form = <LoginForm handleLogin={this.handleLogin} handleTextChange={this.handleTextChange} value={{ name: this.state.name, pwd: this.state.pwd }} />
    } else {
      form = <RegisterForm handleRegister={this.handleRegister} handleTextChange={this.handleTextChange} value={{ name: this.state.name, pwd: this.state.pwd }} />
    }
    return (
      <div>
        <nav><a onClick={()=>this.onTab("login")}>登录</a><a onClick={()=>this.onTab("register")}>注册</a></nav>
        {form}
      </div>
    )
  }
}
