import { GET_QUESTION_LIST } from '../../action/type';
import { Map, List } from "immutable";

const initialState = Map({
  allQuestions: List([{title:'wen1'}, {title:'wen2'}])
})

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_QUESTION_LIST:
      return state.set('allQuestions', action.payload);

    default:
      return state
  }
}
