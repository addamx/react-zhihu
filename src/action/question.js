import {
  GET_QUESTION_LIST,
  GET_QUESTION,
  ADD_QUESTION
} from './type';
import axios from 'axios';
import { fromJS } from 'immutable'

export function fetchQuestionList() {
  return async dispatch => {
    try {
      const res = await axios.get('/question/allquestions');
      if(res.status === 200 && res.data.code === 0) {
        dispatch({type: GET_QUESTION_LIST, payload: fromJS(res.data.data)})
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export function fetchQuestion(questionId) {
  return async dispatch => {
    try {
      const res = await axios.get(`/question/view/${questionId}`);
      if(res.status === 200 && res.data.code === 0) {
        dispatch({type: GET_QUESTION, payload: fromJS(res.data.data)})
      }
    } catch (error) {
      console.log(error)
    }
  }
}