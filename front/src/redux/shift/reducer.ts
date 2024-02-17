import ShiftActions from './actions'
import ShiftActionsTypes from './actions-types'

const initialState: ShiftState = {
  shifts: {
    data: [],
    loading: false,
    error: null,
  },
  shiftsSelected: [],
}

const shiftReducer = (state = initialState, action: ShiftActions) => {
  switch (action.type) {
    case ShiftActionsTypes.FETCH_DATA_START:
      state.shifts = {
        data: [],
        loading: true,
        error: null,
      }
      return {
        ...state,
        payload: state.shifts,
      }
    case ShiftActionsTypes.FETCH_DATA_SUCCESS:
      state.shifts = {
        loading: false,
        data: action.payload,
        error: null,
      }
      return {
        ...state,
        payload: state.shifts,
      }
    case ShiftActionsTypes.FETCH_DATA_FAILURE:
      state.shifts = {
        loading: false,
        data: [],
        error: action.payload?.toString() || 'Erro',
      }
      return {
        ...state,
        payload: state.shifts,
      }
    case ShiftActionsTypes.SELECT_SHIFT: {
      const shiftIsExists = state.shiftsSelected.some(
        (shift) => shift.shift_id === action.payload.shift_id
      )

      if (shiftIsExists) {
        state.shiftsSelected = state.shiftsSelected.filter(
          (shift) => shift.shift_id !== action.payload.shift_id
        )

        return {
          ...state,
          payload: state.shiftsSelected,
        }
      }

      state.shiftsSelected = [...state.shiftsSelected, action.payload]

      if (state.shiftsSelected.length > 2) {
        state.shiftsSelected.shift()
      }

      return { ...state, payload: state.shiftsSelected }
    }
    default:
      return state
  }
}

export default shiftReducer
