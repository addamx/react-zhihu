import { Map, List, fromJS } from "immutable";
import { GET_CHATLIST, SEND_MESSAGE, READ_MESSAGE, GET_USER, SET_CURRENTCHAT } from '../../action/type'

const initState = fromJS({
  noReadChat: 0, //未读消息数目
  chatList: [
    // {
    //   chatId: '',
    //   noReadMsg: 0,
    //   talker: '',
    //   date: '',
    // }
  ],
  messageList: [
    // {
    //   chatId: '',
    //   from: '',
    //   to: '',
    //   message: '',
    //   date: '',
    //   readed: false
    // }
  ],
  currentTalker: {
    name: '',
    _id: ''
  },
  currentChat: []
})

export default (state = initState, action) => {
  switch (action.type) {
    case GET_CHATLIST:          
      return state.merge(action.payload)

    case SET_CURRENTCHAT:
      return state.merge({currentChat: action.payload});

    case GET_USER:
      return state.merge({currentTalker: action.payload})

    case SEND_MESSAGE:
    
      var { chatId, date, message, fromMe, readed, talker } = action.payload
      var noReadChat = state.get('noReadChat') + 1;
      var chatList = state.get('chatList');
      var newMsg = Map({ chatId, fromMe, date, message, readed });
      var messageList = state.get('messageList').push(newMsg);
      
      const chatIndex = chatList.findKey((v, index, arr) => v.get('chatId') === chatId);

      var result;

      //正在和对应的ID聊天
      if (talker._id === state.get('currentTalker').get('_id')) {
        readed = true;
        var currentChat = state.get('currentChat').push(newMsg.set('readed', true));
        result = {currentChat};
      }
      //有聊天记录
      if (chatIndex !== -1) {
          result = { messageList, ...result};
      } else {
      //无聊天记录
        var chatList = chatList.push(
            Map({
              date,
              chatId,
              talker,
              readed,
              noReadMsg: 1,
            })
          );
        result = { noReadChat, chatList, messageList, ...result };
      }
      
      return state.merge(result);
    
    default:
      return state;
  }
}