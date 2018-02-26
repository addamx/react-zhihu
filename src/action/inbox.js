import io from 'socket.io-client';
import { GET_CHATLIST, GET_USER, SEND_MESSAGE, READ_MESSAGE, SET_CURRENTCHAT } from './type'

import axios from 'axios';

let socket = null;

export function connectSocket() {
  return (dispatch, state) => {
    try {
      const token = window.localStorage.getItem('token');

      socket = io('ws://127.0.0.1:1510', {
        query: { token: token }
      })
      //连接服务器
      socket.on('connect', () => {
        socket.emit('user', 'addams')
      });
      //接收聊天消息
      socket.on('receiveMessage', data => {
        const userId = state().get('people').get('current').get('_id');
        const chatId = data.chatId;
        dispatch({type: SEND_MESSAGE, payload: {chatId, date: Date(), fromMe: false, message:data.message, talker: data.from, readed: false}})

      });
      //接收聊天对象的名字
      socket.on('getUser', user => {
        dispatch({ type: GET_USER, payload: user });
      })


      //测试服务器回应
      socket.on('systemlog', data => {
        console.log(data)
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export function fetchUser(userId) {
  return dispatch => {
    socket.emit('fetchUser', userId);
  }
}

export function fetchChatList() {
  return async (dispatch, state) => {
    try {
      const res = await axios.get('/inbox/all');
      if(res.status === 200 && res.data.code === 0) {
        const userId = state().get('people').get('current').get('_id');
        const _chatList = res.data.data;

        let noReadChat = 0;
        let chatList = [];
        let _messageList = [];
        _chatList.forEach(chat => {
          let noReadMsg = 0;
          const {messageList, talkers, ...rest} = chat;
          const talkerId = chat.chatId.replace(userId, '');
          const talker = talkers.find(el => {
            return el._id === talkerId
          })

          messageList.forEach(msg => {
            const { fromReaded, toReaded, from, to, ...rest } = msg;
            let fromMe = true;
            let readed = false;
            if (msg.to._id === userId) {
              fromMe = false;
              if(!msg.toReaded) {
                noReadMsg++;
              } else {
                readed = true;
              }
            }

          _messageList.push({ fromMe, readed, ...rest });
          })
          chat.noReadChat = noReadMsg
          if (noReadMsg ) {noReadChat = noReadChat + noReadMsg}

          chatList.push({talker, noReadMsg, ...rest});
        })
        dispatch({type: GET_CHATLIST, payload: {noReadChat, chatList, messageList: _messageList}})
      }
    } catch (error) {
      console.log(error)
    }
  }
}


export function sendMessage(talker, message) {
  return (dispatch, state) => {
    const userId = state().get('people').get('current').get('_id');
    const chatId = [userId, talker._id].sort().join('')
    dispatch({type: SEND_MESSAGE, payload: {chatId, date: Date(), fromMe: true, message, talker}})
    socket.emit('sendMessage', { to: talker._id, message, chatId, date: Date(), readed: true });
  }
}

//设置当前聊天内容
export function setCurrentChat(chatId) {
  return (dispatch, state) => {
    const currentChat = state().get('inbox').get('messageList').filter(el => {
      return el.get('chatId') === chatId;
    });
    socket.emit('readChat', chatId);
    dispatch({type: SET_CURRENTCHAT, payload: currentChat})
  }
}