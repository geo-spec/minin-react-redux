import {CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}
export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch =>  {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

export function hideAlert(text) {
  return {
    type: HIDE_ALERT
  }
}

export function fetchPosts() {

  return async dispatch => {
    try {
      dispatch(showLoader())
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const json = await response.json()
      // пример искуственной задержки
      setTimeout(() => {
        dispatch({type: FETCH_POSTS, payload: json})
        dispatch(hideLoader())
      }, 500) // 5000 милисекунд
    } catch (e) {
        dispatch(showAlert('Some error'))
        dispatch(hideLoader())
    }
  }
}



