import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './root-reducer'
import { thunk } from 'redux-thunk'

const middleware = [thunk]

const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(...middleware))
)

export default store
