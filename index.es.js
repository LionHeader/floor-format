/**
 * Truncate extra zeros at the end of floating-point numbers.
 * @param { (String|Number) } value
 * @param { String= } unit - the unit of number
 * @param { String= } seperator - the seperator between number and unit
*/
const floorTrim = (value, unit, seperator = '') => {
  let formatterValue = value
  let resultString = `${value}`
  if (resultString && /\.\d{1,}$/.test(resultString)) {
    let decimalValues = resultString.split('.')
    let zeroIndex = decimalValues[1].search(/0{1,}$/)
    if (zeroIndex !== -1) {
      formatterValue = `${decimalValues[0]}${zeroIndex === 0 ? '' : `.${decimalValues[1].slice(0, zeroIndex)}`}`
    }
  }
  return `${formatterValue}${unit ? `${seperator}${unit}` : ''}`
}

/**
 * Format a floating-point number to a specified number of floating-point numbers.
 * @param { Number } value
 * @param { Number= } digit
 * @param { String= } format - ceil/floor/round, default value is ceil
 * @param { Object= } options - unit & seperator
*/
const formatFloor = (value, digit = 2, format = 'ceil', options = {}) => {
  const formatMethod = {
    ceil: val => (Math.ceil(val * Math.pow(10, digit)) / Math.pow(10, digit)),
    floor: val => (Math.floor(val * Math.pow(10, digit)) / Math.pow(10, digit)),
    round: val => (Math.round(val * Math.pow(10, digit)) / Math.pow(10, digit))
  }
  let formatterValue = typeof value === 'string' ? value : value.toString()
  let resultValue = formatMethod[format === 'normal' ? 'floor' : format](formatterValue)
  return Number(floorTrim(resultValue, options.unit, options.seperator))
}

module.exports = {
  floorTrim,
  formatFloor
}
