import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default ({title, questionId, author, date}) => {
  return (
    <div>
      <Link to={`/question/${questionId}`}>{title}-{author}-{moment(date).format('YYYY-MM-DD')}</Link>
    </div>
  )
}
