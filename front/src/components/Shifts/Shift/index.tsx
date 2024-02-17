import { formatTimeWithoutTimezone } from '../../../utils'

type Shift = {
  shift_id: number
  facility_id: number
  facility_name: string
  shift_date: string
  start_time: string
  end_time: string
}

type ShiftProps = {
  shift: Shift
  isSelected: boolean
  onClick: (shift: Shift) => void
}

const Shift = ({ shift, isSelected, onClick }: ShiftProps) => {
  const { facility_name, shift_date, start_time, end_time } = shift

  const formattedStartTime = formatTimeWithoutTimezone(
    new Date(`${shift_date}T${start_time}`)
  )
  const formattedEndTime = formatTimeWithoutTimezone(
    new Date(`${shift_date}T${end_time}`)
  )

  return (
    <article
      onClick={() => onClick(shift)}
      className={`block  cursor-pointer rounded-lg border ${
        isSelected
          ? 'bg-emerald-600 hover:bg-emerald-700'
          : 'bg-gray-800 hover:bg-gray-700'
      }  border-gray-700  p-6 shadow duration-700`}
    >
      <h3 className='mb-2 text-2xl font-bold tracking-tight text-white'>
        {facility_name}
      </h3>
      <span className='block text-white'>{shift_date}</span>
      <span className='block text-white'>
        {formattedStartTime} - {formattedEndTime}
      </span>
    </article>
  )
}

export default Shift
