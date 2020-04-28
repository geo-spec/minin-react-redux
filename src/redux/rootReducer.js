import {combineReducers} from "redux";
import {postsReducer} from './postsReducer'
import {appReducer} from './appReducer'
//  @redux step 2
//именованный экпорт
export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer
  // @redux step 3
})
//