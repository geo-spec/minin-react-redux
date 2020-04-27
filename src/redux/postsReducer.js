// @redux step 3

// состояние по-умолчанию, если вдруг state не определен
const initialState = {
  posts: [],
  fetchedPosts: []

}

export const postsReducer = (state = initialState, action) => {
  // reducer всегда по-умолчанию возвращает state
  return state
}

