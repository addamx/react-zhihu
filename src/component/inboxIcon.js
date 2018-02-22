import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

@connect(state => ({
  noReadChat: state.get('inbox').get('noReadChat')
}))
export default class InboxIcon extends Component {

  render() {
    return (
      <div>
        <i><Link to="/inbox">inbox-icon {this.props.noReadChat}</Link></i>
      </div>
    )
  }
}
