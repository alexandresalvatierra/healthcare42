import { useSelector, useDispatch } from 'react-redux'
import Shift from './Shift'
import { RootReducer } from '../../redux/root-reducer'
import ShiftActions, { fetchData } from '../../redux/shift/actions'
import ShiftActionsTypes from '../../redux/shift/actions-types'
import { useEffect, useState } from 'react'

const Shifts = () => {
  const dispatch = useDispatch()
  const { shifts } = useSelector(
    (rootReducer: RootReducer) => rootReducer.shiftReducer
  )
  const [selectedCards, setSelectedCards] = useState<number[]>([])

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (shifts.loading) {
    return <div>Loading...</div>
  }

  if (shifts.error) {
    return <div>Error: {shifts.error}</div>
  }

  const handleClickShift = (shift: Shift) => {
    if (selectedCards.includes(shift.shift_id)) {
      setSelectedCards(
        selectedCards.filter((cardId) => cardId !== shift.shift_id)
      )
    } else {
      const arrSelectedCards = [...selectedCards, shift.shift_id]

      if (arrSelectedCards.length > 2) {
        arrSelectedCards.shift()
      }

      setSelectedCards(arrSelectedCards)
    }

    const action: ShiftActions = {
      type: ShiftActionsTypes.SELECT_SHIFT,
      payload: shift,
    }
    dispatch(action)
  }

  return (
    <>
      <section className='max-w-8xl m-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
        {shifts.data && typeof shifts.data === 'object'
          ? shifts.data.map((shift) => (
              <Shift
                key={shift.shift_id}
                shift={shift}
                isSelected={selectedCards.includes(shift.shift_id)}
                onClick={handleClickShift}
              />
            ))
          : ''}
      </section>
    </>
  )
}

export default Shifts
