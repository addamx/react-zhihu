import { combineReducers } from 'redux-immutable';
import people from './people'
import question from './question'
import inbox from './inbox'
import notice from './notice'

const appReducers = combineReducers({
  people,
  question,
  inbox,
  notice
})

export default (state, action) => {
  //...global action
  return appReducers(state, action)
}



