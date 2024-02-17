import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../redux/root-reducer'
import { fetchData } from '../../redux/overlap/actions'
import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Overlap = () => {
  const dispatch = useDispatch()
  const { shiftsSelected } = useSelector(
    (rootReducer: RootReducer) => rootReducer.shiftReducer
  )
  const { overlaps } = useSelector(
    (rootReducer: RootReducer) => rootReducer.overlapReducer
  )
  const [shiftA, setShiftA] = useState(0)
  const [shiftB, setShiftB] = useState(0)

  useEffect(() => {
    async function fetchTestData() {
      await dispatch(fetchData(shiftA, shiftB))
    }
    if (shiftA && shiftB) {
      fetchTestData()
    }
  }, [dispatch, shiftA, shiftB])

  const handleClickSubmit = () => {
    if (shiftsSelected.length !== 2) {
      toast.warn('Feel free to choose any two shift boxes!')
      return
    }

    setShiftA(shiftsSelected[0].shift_id)
    setShiftB(shiftsSelected[1].shift_id)
  }

  return (
    <>
      <h2 className='m-4'>
        Select two shift boxes, click a button to compare them, and the total
        overlapping minutes will be calculated.
      </h2>
      <article className='mb-8 flex w-full items-center justify-between rounded-lg border border-gray-700 bg-gray-900 p-6 shadow'>
        <div className='text-left'>
          <h3 className='mb-2 text-2xl font-bold tracking-tight text-white'>
            Overlap Minutes:{' '}
            <span className='font-bold capitalize'>
              {overlaps.data && typeof overlaps.data === 'object'
                ? String(overlaps.data.overlapMinutes)
                : '0'}
            </span>
          </h3>
          <span className='block text-white'>
            Max Overlap Threshold:{' '}
            <span className='font-bold capitalize'>
              {overlaps.data && typeof overlaps.data === 'object'
                ? String(overlaps.data.maxOverlapThreshold)
                : '0'}
            </span>
          </span>
          <span className='block text-white'>
            Exceeds Overlap Threshold:{' '}
            <span className='font-bold capitalize'>
              {overlaps.data && typeof overlaps.data === 'object'
                ? String(overlaps.data.exceedsThreshold)
                : 'False'}
            </span>
          </span>
        </div>
        <div>
          {!overlaps.loading && !overlaps.error ? (
            <a
              className='inline-flex cursor-pointer items-center rounded-lg bg-emerald-600 px-4 py-2 text-center text-lg font-medium text-white duration-700 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300'
              onClick={handleClickSubmit}
            >
              Submit
            </a>
          ) : overlaps.loading ? (
            <div>Loading</div>
          ) : (
            <div>Error: {overlaps.error}</div>
          )}
        </div>
      </article>
      <ToastContainer
        position='top-center'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme='dark'
      />
    </>
  )
}

export default Overlap
