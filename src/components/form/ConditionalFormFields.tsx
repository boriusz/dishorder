import React from 'react'
import { Field } from 'redux-form'
import { betweenScaleValues, floatOrInt, integer } from 'utils/validation'
import { renderNumberInput } from './formFieldsCreators'
import { FORM_SCALE_MAX, FORM_SCALE_MIN } from '../../utils/constants'

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
          validate={integer}
        />
        <br />
        <Field
          name={'diameter'}
          label={'Diameter'}
          inputProps={{ step: 0.1 }}
          component={renderNumberInput}
          validate={floatOrInt}
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
          label={`Scale of spiciness (${FORM_SCALE_MIN}-${FORM_SCALE_MAX})`}
          inputProps={{ min: FORM_SCALE_MIN, max: FORM_SCALE_MAX }}
          component={renderNumberInput}
          validate={betweenScaleValues}
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
          validate={integer}
        />
        <br />
      </>
    )
  }
  return null
}
