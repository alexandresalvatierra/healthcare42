type Overlap = {
  overlapMinutes: number
  maxOverlapThreshold: number
  exceedsThreshold: boolean
}

type OverlapData = {
  loading: boolean
  data: Overlap | string | null
  error: string | null
}

type OverlapState = {
  overlaps: OverlapData
}
