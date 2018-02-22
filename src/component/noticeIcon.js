import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect( state => ({
  noticeList: state.get('notice')
}))
export default class componentName extends Component {
  render() {
    const { noticeList } = this.props;
    return (
      <ul>
        {
          noticeList.map(el => (
            <li key={el.get('_id')} className={`notice-${el.get('type')}`}>{el.get('content')}</li>
          ))
        }
      </ul>
    )
  }
}
