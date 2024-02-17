export const convertDateToUTC = (date: Date): Date => {
  const localHours = date.getHours()
  const localMinutes = date.getMinutes()
  const localSeconds = date.getSeconds()
  const localMilliseconds = date.getMilliseconds()

  date.setUTCHours(localHours)
  date.setUTCMinutes(localMinutes)
  date.setUTCSeconds(localSeconds)
  date.setUTCMilliseconds(localMilliseconds)

  return date
}

export const checkDateInRange = (
  date: Date,
  initialDate: Date,
  finalDate: Date
): boolean => {
  if (
    date.valueOf() >= initialDate.valueOf() &&
    date.valueOf() <= finalDate.valueOf()
  ) {
    return true
  } else {
    return false
  }
}

export const formatTimeWithoutTimezone = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  }
  return date.toLocaleTimeString('en-US', options)
}
