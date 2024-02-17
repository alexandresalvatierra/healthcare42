import OverlapActions from './actions'
import OverlapActionsTypes from './actions-types'

const initialState: OverlapState = {
  overlaps: {
    data: null,
    loading: false,
    error: null,
  },
}

const overlapReducer = (state = initialState, action: OverlapActions) => {
  switch (action.type) {
    case OverlapActionsTypes.FETCH_DATA_START:
      state.overlaps = {
        data: null,
        loading: true,
        error: null,
      }
      return {
        ...state,
        payload: state.overlaps,
      }
    case OverlapActionsTypes.FETCH_DATA_SUCCESS:
      state.overlaps = {
        loading: false,
        data: action.payload,
        error: null,
      }
      return {
        ...state,
        payload: state.overlaps,
      }
    case OverlapActionsTypes.FETCH_DATA_FAILURE:
      state.overlaps = {
        loading: false,
        data: null,
        error: action.payload?.toString() || 'Erro',
      }
      return {
        ...state,
        payload: state.overlaps,
      }
    default:
      return state
  }
}

export default overlapReducer
