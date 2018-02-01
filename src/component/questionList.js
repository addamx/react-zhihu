import React from 'react';
import QuestionItem from './questionItem'


export default ({ questionList }) => {
  return (
    <ul>
      {
        questionList.map( (el,index) => (
          <li key={index}>
            <QuestionItem
              title={el.get('title')}
              questionId={el.get('_id')}
              author={el.get('author').get('name')}
              date={el.get('date')}
            />
          </li>
        ))
      }
    </ul>
  )
}
