type Shift = {
  shift_id: number
  facility_id: number
  facility_name: string
  shift_date: string
  start_time: string
  end_time: string
}

type ShiftData = {
  loading: boolean
  data: Shift[] | string | null
  error: string | null
}

type ShiftState = {
  shifts: ShiftData
  shiftsSelected: Shift[]
}
