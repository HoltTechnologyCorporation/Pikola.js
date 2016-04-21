import resolution from '../resolution'

export default {

  MIN: 0,

  resolution: resolution.Month,
  name: 'Month',

  datepart: ({
    date
  }) => date.getMonth(),

  every: ({
    date,
    interval
  }) => {
    const seconds = date.getMonth()

    const result = new Date(date)
    result.setMonth(seconds + (interval || 1))

    return result
  }
}