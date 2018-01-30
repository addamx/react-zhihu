import React from 'react'
import Answer from './answer'

export default () => {
  const answerList = [{content: '1个eventloop->多个task queue'}, {content: '一个事件循环eventloop可以多个任务队列'}];
  return (
    <ul>
      {
        answerList.map( (el,index) => (
          <li key={index}><Answer {...el} /></li>
        ) )
      }
    </ul>
  )
}
