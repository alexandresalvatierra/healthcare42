import { Dispatch } from 'redux'
import OverlapActionsTypes from './actions-types'

export type LoadOverlap = {
  type:
    | OverlapActionsTypes.FETCH_DATA_START
    | OverlapActionsTypes.FETCH_DATA_SUCCESS
    | OverlapActionsTypes.FETCH_DATA_FAILURE
  payload: Overlap | string | null
}

export const fetchData = (shiftA: number, shiftB: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: OverlapActionsTypes.FETCH_DATA_START })

      const response = await fetch(
        'http://localhost:8000/api/shifts/calculate-overlap',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ shiftA, shiftB }),
        }
      )
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data. Status: ${response.status} (${response.statusText})`
        )
      }
      const data = await response.json()

      dispatch({ type: OverlapActionsTypes.FETCH_DATA_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: OverlapActionsTypes.FETCH_DATA_FAILURE,
        payload:
          error instanceof Error ? error.message : 'Unknown error occurred',
      })
    }
  }
}

type OverlapActions = LoadOverlap

export default OverlapActions
