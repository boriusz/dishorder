import { FORM_PREP_TIME_LENGTH, FORM_SCALE_MAX, FORM_SCALE_MIN } from './constants'

export const required = (value: string | undefined): string | undefined => {
  if (!value || value === '') {
    return 'This field is required'
  }
  return
}

export const integer = (value: string | undefined): string | undefined => {
  if (!value || value === '') {
    return 'This field is required'
  }
  const asNumber = Number(value)
  const isNumber = !isNaN(asNumber)
  if (isNumber) {
    const isInteger = Number.isInteger(asNumber)
    if (!isInteger) {
      return 'Incorrect number, expected integer'
    }
  }
}

export const floatOrInt = (value: string | undefined): string | undefined => {
  if (!value || value === '') {
    return 'This field is required'
  }
  const asNumber = Number(value)
  const isNumber = !isNaN(asNumber)
  if (!isNumber) {
    return 'This should be a number'
  }
}

export const betweenScaleValues = (value: string | undefined): string | undefined => {
  if (!value || value === '') {
    return 'This field is required'
  }
  const asNumber = Number(value)
  if (!isNaN(asNumber)) {
    if (asNumber < FORM_SCALE_MIN || asNumber > FORM_SCALE_MAX) {
      return 'Value out of bounds'
    }
  }
}

export const preparationValid = (value: string | undefined): string | undefined => {
  if (value?.length !== FORM_PREP_TIME_LENGTH && value?.length !== FORM_PREP_TIME_LENGTH - 3) {
    return 'Incorrect data'
  }
}
