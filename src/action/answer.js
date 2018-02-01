import { fetchQuestion } from './question'
import axios from 'axios';

export function addAnswer(content, questionId) {
  return async (dispatch) => {
    try {
      const res = await axios.post("/answer/add", { content, questionId });
      if (res.status === 200 && res.data.code === 0) {
        dispatch(fetchQuestion(questionId))
        return true;
      }
    } catch (error) {
      console.log(error)
      return false;
    }
  }
}