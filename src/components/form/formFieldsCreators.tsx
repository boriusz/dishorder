import React from 'react'
import type { FieldProps } from './DishesForm'
import { FormControl, FormHelperText, InputLabel, Select, TextField } from '@material-ui/core'

export const renderDurationInput: React.FC<FieldProps> = ({
  label,
  input,
  meta: { touched, error, invalid },
}) => (
  <TextField
    id="time"
    {...input}
    label={label}
    type="time"
    error={touched && invalid}
    helperText={touched && error}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 1,
    }}
  />
)
const renderFormHelper: React.FC<{ touched: boolean; error: string }> = ({ touched, error }) => {
  if (!(touched && error)) {
    return null
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}
export const renderSelectField: React.FC<FieldProps> = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && !!error}>
    <InputLabel htmlFor="type-input">{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        id: 'type-input',
      }}
    >
      {children}
    </Select>
    {renderFormHelper({ touched, error })}
  </FormControl>
)
export const renderTextField: React.FC<FieldProps> = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    fullWidth={true}
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)
export const renderNumberInput: React.FC<
  FieldProps & { inputProps?: { min: number; max: number } | { step: number } }
> = ({ input, label, meta: { error, touched, invalid }, inputProps }) => (
  <TextField
    label={label}
    {...input}
    helperText={touched && error}
    error={touched && invalid}
    type={'number'}
    InputLabelProps={{
      shrink: true,
    }}
    InputProps={{
      inputProps,
    }}
  />
)
