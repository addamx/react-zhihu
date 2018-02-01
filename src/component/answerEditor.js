import React from 'react'

export default ({handleAddAnswer, handleTextChange}) => {
  return (
    <div>
      <textarea onChange={handleTextChange} name="content" placeholder="请参考知乎回答规范" />

      <button onClick={handleAddAnswer} >提交回答</button>
    </div>
  )
}
