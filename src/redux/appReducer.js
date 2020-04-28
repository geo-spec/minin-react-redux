import {HIDE_LOADER, SHOW_LOADER} from "./types";

const initialState = {
  loading: false
}

export const appReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      console.log('HIDE_LOADER')
      return {...state, loading: false}
    default: return state

  }
}