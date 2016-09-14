import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_CATEGORY = 'SELECT_CATEGORY'

function requestPosts(query) {
  return {
    type: REQUEST_POSTS,
    query
  }
}

function receivePosts(category, posts) {
  return {
    type: RECEIVE_POSTS,
    category,
    posts,
    receivedAt: Date.now()
  }
}

export function selectCategory(category) {
  return {
    type: SELECT_CATEGORY,
    category
  }
}

function fetchPosts(query) {
  let req_query = "Africa, Nigeria " + query
  return dispatch => {
    dispatch(requestPosts(query))
    return fetch(`http://hn.algolia.com/api/v1/search_by_date?query=${req_query}`)
      .then(response => response.json())
      .then(posts => dispatch(receivePosts(query, posts)))
  }
}

function shouldFetchPosts(state, category) {
  const posts = state.postsByHN[category]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  else if (posts.receivedAt < (Date.now() - 3600)) {
    return true
  }
}

export function fetchPostsIfNeeded(query) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), query)) {
      return dispatch(fetchPosts(query))
    }
  }
}
