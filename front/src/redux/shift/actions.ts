import { Dispatch } from 'redux'
import ShiftActionsTypes from './actions-types'

export type SelectShift = {
  type: ShiftActionsTypes.SELECT_SHIFT
  payload: Shift
}

export type LoadShift = {
  type:
    | ShiftActionsTypes.FETCH_DATA_START
    | ShiftActionsTypes.FETCH_DATA_SUCCESS
    | ShiftActionsTypes.FETCH_DATA_FAILURE
  payload: Shift[] | string | null
}

export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: ShiftActionsTypes.FETCH_DATA_START })

      const response = await fetch('http://localhost:8000/api/shifts')
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data. Status: ${response.status} (${response.statusText})`
        )
      }
      const data = await response.json()

      dispatch({ type: ShiftActionsTypes.FETCH_DATA_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: ShiftActionsTypes.FETCH_DATA_FAILURE,
        payload:
          error instanceof Error ? error.message : 'Unknown error occurred',
      })
    }
  }
}

type ShiftActions = SelectShift | LoadShift

export default ShiftActions
