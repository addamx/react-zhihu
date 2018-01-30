import React from 'react';
import QuestionItem from './questionItem'



export default () => {
  const questionList = [{title: 'react有哪些优化方案?'}, {title: 'ES6有哪些新特性'}]
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
