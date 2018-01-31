import React from 'react';
import QuestionItem from './questionItem'


export default ({ questionList }) => {
  return (
    <ul>
      {
        questionList.map( (el,index) => (
          <li key={index}><QuestionItem {...el} /></li>
        ))
      }
    </ul>
  )
}
