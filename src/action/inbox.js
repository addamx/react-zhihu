import io from 'socket.io-client';
import { GET_CHATLIST, SEND_MESSAGE, READ_MESSAGE } from './type'

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
      socket.on("receiveMessage", data => {
        console.log(data);
      });


      //测试服务器回应
      socket.on('systemlog', data => {
        console.log(data)
      })
    } catch (error) {
      console.error(error)
    }
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
            let fromMe;
            if (msg.from._id === userId && !msg.fromReaded) {
              fromMe = true;
              noReadMsg++
            } else if(msg.to._id === userId && !msg.toReaded){
              fromMe = false;
              noReadMsg++
            }

          _messageList.push({ fromMe, ...rest });
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
    const chatId = [userId, talker.get('_id')].sort().join('')
    dispatch({type: SEND_MESSAGE, payload: {chatId, date: Date(), message, talker}})
    socket.emit('sendMessage', { to: talker.get('_id'), message, chatId, date: Date() });
  }
}


