import React from 'react'
import { Field } from 'redux-form'
import { required } from 'utils/validation'
import { renderNumberInput } from './formFieldsCreators'

interface ConditionalFormFieldsProps {
  selectedDishType: 'pizza' | 'soup' | 'sandwich'
}

export const ConditionalFormFields: React.FC<ConditionalFormFieldsProps> = ({
  selectedDishType,
}) => {
  if (selectedDishType === 'pizza') {
    return (
      <>
        <Field
          name={'no_of_slices'}
          label={'Number of slices'}
          component={renderNumberInput}
          validate={required}
        />
        <br />
        <Field
          name={'diameter'}
          label={'Diameter'}
          inputProps={{ step: 0.1 }}
          component={renderNumberInput}
          validate={required}
        />
        <br />
      </>
    )
  }
  if (selectedDishType === 'soup') {
    return (
      <>
        <Field
          name={'spiciness_scale'}
          label={'Scale of spiciness (1-10)'}
          inputProps={{ min: 1, max: 10 }}
          component={renderNumberInput}
          validate={required}
        />
        <br />
      </>
    )
  }
  if (selectedDishType === 'sandwich') {
    return (
      <>
        <Field
          name={'slices_of_bread'}
          label={'Slices of bread'}
          component={renderNumberInput}
          validate={required}
        />
        <br />
      </>
    )
  }
  return null
}
