export const required = (value: string | undefined): string | undefined => {
  if (!value || value === '') {
    return 'This field is required'
  }
  return
}

export const integer = (value: string | undefined): string | undefined => {
  if (value) {
    const isInteger = !isNaN(Number(value))
    if (!isInteger) {
      return 'This should be an integer'
    }
  }
  return 'This field is required'
}
