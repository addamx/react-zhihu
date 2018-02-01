import {
  GET_USER_INFO,
  USER_REGISTER,
  USER_LOGIN,
  USER_LOG_OUT,
  GET_USER_QUESTIONS
} from './type';
import axios from 'axios';
import { fromJS } from 'immutable'


export function login(name, pwd) {
  return async (dispatch) => {
    try {
      const res = await axios.post("/user/login", { name, pwd });
      if (res.status === 200 && res.data.code === 0) {
        dispatch({ type: USER_LOGIN, payload: fromJS(res.data.data) });
        window.localStorage.setItem('token', res.data.token)
        return true
      }
      if (res.status === 200 && res.data.code !== 0) {
        console.error(res.data.msg) //"用户名或密码错误" "请输入用户名或密码"
      }
      return false;
    } catch (error) {
      console.log(error)
    }
  }
}

export function register(name, pwd) {
  return async (dispatch) => {
    try {
      const res = await axios.post("/user/register", { name, pwd });
      if (res.status === 200 && res.data.code === 0) {
        dispatch({ type: USER_REGISTER, payload: fromJS(res.data.data) });
        window.localStorage.setItem('token', res.data.token)
        return true;
      }
      if (res.status === 200 && res.data.code !== 0) {
        console.error(res.data.msg) //"该用户已注册" "请输入用户名或密码"
        return false;
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export function fetchUser(userId) {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/user/info/${userId}`)
      if (res.status === 200 && res.data.code === 0) {
        // dispatch({ type: GET_USER_INFO, payload: fromJS(res.data.data) });
        return fromJS(res.data.data);
      }
    } catch (error) {
      console.log(error)
    }
  }
}
