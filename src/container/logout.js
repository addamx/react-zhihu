import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../action/user'

@connect(null, {
  logout
})
export default class Logout extends Component {
  constructor() {
    super();
    this.handlerLogout = this.handlerLogout.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.handlerLogout();
    }, 3000);
  }
  handlerLogout() {
    window.localStorage.removeItem('token');
    this.props.logout();
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h2>你已经退出</h2>
        
      </div>
    )
  }
}
