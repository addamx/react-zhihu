import { GET_QUESTION_LIST, GET_QUESTION } from '../../action/type';
import { Map, List } from "immutable";

const initialState = Map({
  allQuestions: List(),
  current: Map({
    answers: List()
  })
})

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_QUESTION_LIST:
      return state.set('allQuestions', action.payload);
    case GET_QUESTION:
      return state.set('current', action.payload)

    default:
      return state
  }
}
