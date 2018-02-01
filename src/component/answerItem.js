import React from 'react'
import moment from 'moment'

export default ({content, author, date}) => {
  return (
    <div>
      {content}
      {author}
      {moment(date).format('YYYY-MM-DD')}
    </div>
  )
}
