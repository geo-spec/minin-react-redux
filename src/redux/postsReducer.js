// @redux step 3

// состояние по-умолчанию, если вдруг state не определен
import {CREATE_POST} from "./types";

const initialState = {
  posts: [],
  fetchedPosts: []

}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      // копия state, важно для имутабельности
      return {...state, posts: state.posts.concat([action.payload])}
      //оба метода идентичны для развертывания свойств
      //  копируем предыдущей стейт и добавляем в него новый post
      //return {...state, posts: [...state.posts, action.payload] }
    default: return state
    // reducer всегда по-умолчанию возвращает state

  }
}

