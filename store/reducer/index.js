import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import msg from './msg/index'

// export default combineReducers({
//     msg
// })

const combinedReducer = combineReducers({
  msg
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }
    if (state.count) nextState.count = state.count // preserve count value on client side navigation
    return nextState
  } else {
    // TODU
    // 直接在这里导入reducer会导致页面服务器端“补水时拿不到每个页面state然后保存”
    // return combineReducers({
    //   msg
    // });
    return combinedReducer(state, action)
  }
}

export default reducer
