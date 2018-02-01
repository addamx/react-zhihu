import React from 'react'

export default ({handleTextChange, handleAskQuestion}) => {
  return (
    <div>
      <h5>写下你的问题</h5>
      <div>描述精确的问题更易得到解答</div>
      <input onChange={v => handleTextChange(v)} name="title" placeholder="问题标题" />
      <textarea onChange={v => handleTextChange(v)} name="desc" placeholder="问题描述（可选）" />
    </div>
  )
}
