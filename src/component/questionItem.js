import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Author from './common/author'

export default ({title, questionId, author, date, history}) => {
  return (
    <div>
      <div title={`/question/${questionId}`}>{title}-<Author author={author} history={history} />-{moment(date).format('YYYY-MM-DD')}</div>
    </div>
  )
}

