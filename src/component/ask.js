import React from 'react'

export default ({handleTextChange, handleAskQuestion, toggleAsk}) => {
  return (
    <div className="modal-content">
      <i onClick={() => toggleAsk(false)}>[X]</i>
      <h5>写下你的问题</h5>
      <p>描述精确的问题更易得到解答</p>
      <input onChange={v => handleTextChange(v)} name="title" placeholder="问题标题" />
      <textarea onChange={v => handleTextChange(v)} name="desc" placeholder="问题描述（可选）" />
      <button onClick={handleAskQuestion}>提交</button>
    </div>
  )
}
