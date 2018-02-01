import { combineReducers } from 'redux-immutable';
import people from './people'
import question from './question'

const appReducers = combineReducers({
  people,
  question
})

export default (state, action) => {
  //...global action
  return appReducers(state, action)
}



