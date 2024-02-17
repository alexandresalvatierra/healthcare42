import { combineReducers } from 'redux'

import shiftReducer from './shift/reducer'
import overlapReducer from './overlap/reducer'

export type RootState = {
  shift: ShiftState
}

const rootReducer = combineReducers({ shiftReducer, overlapReducer })

export type RootReducer = ReturnType<typeof rootReducer>

export default rootReducer
