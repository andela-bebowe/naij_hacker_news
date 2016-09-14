import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS, SELECT_CATEGORY } from '../actions'

function selectedCategory(state = 'all', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category
    default:
      return state
  }
}

function posts(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
        receivedAt: action.receivedAt
      })
    default:
      return state
  }
}

function postsByHN(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.category]: posts(state[action.category], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByHN,
  selectedCategory
})

export default rootReducer
