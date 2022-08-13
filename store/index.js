import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './sagas'

// const sagaMiddleware = createSagaMiddleware()
// const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)
// const store = createStoreWithMiddleware(reducer)

// sagaMiddleware.run(rootSaga)

// export default store

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer, applyMiddleware(sagaMiddleware))
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
