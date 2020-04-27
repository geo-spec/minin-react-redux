import {combineReducers} from "redux";
import {postsReducer} from './postsReducer'
//  @redux step 2
//именованный экпорт
export const rootReducer = combineReducers({
  posts: postsReducer
  // @redux step 3

})
//