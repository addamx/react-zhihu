import {
  GET_QUESTION_LIST,
  ADD_QUESTION
} from './type';
import axios from 'axios';

export function fetchQuestionList() {
  return async dispatch => {
    try {
      const res = await axios.get('/question/allquestions');
      console.log(res);
      if(res.status === 200 && res.data.code === 0) {
        dispatch({type: GET_QUESTION_LIST, payload: res.fromJS(res.data.data)})
      }
    } catch (error) {
      
    }
  }
}