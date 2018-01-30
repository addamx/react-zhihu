import React from 'react'

export default () => {
  return (
    <form>
      <input placeholder="用户名" />
      <input type="password" placeholder="密码" />
      <input type="password" placeholder="再次输入密码" />
      <button type="submit">登录</button>
    </form>
  )
}
