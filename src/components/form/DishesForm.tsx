import React from 'react'
import { Field, reduxForm, SubmitHandler } from 'redux-form'
import { Box, Button, MenuItem } from '@material-ui/core'
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form/lib/Field'
import { ConditionalFormFields } from 'components/form/ConditionalFormFields'
import { preparationValid, required } from 'utils/validation'
import {
  renderDurationInput,
  renderSelectField,
  renderTextField,
} from 'components/form/formFieldsCreators'
import { useAppSelector } from '../../app/hooks'

interface DishesFormProps {
  handleSubmit: SubmitHandler<Record<string, unknown>, Record<string, unknown>>
  pristine: boolean
  submitting: boolean
}

export interface FieldProps {
  input: WrappedFieldInputProps
  meta: WrappedFieldMetaProps
  label: string
}

const DishesForm: React.FC<DishesFormProps> = ({ handleSubmit, pristine, submitting }) => {
  const selectedDishType = useAppSelector((state) => state?.form?.dishes?.values?.type ?? null)
  return (
    <Box width={'100%'} maxWidth={600} boxShadow={5} p={2} m={2} borderRadius={12}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Field name={'name'} component={renderTextField} label={'Dish name'} validate={required} />
        <br />
        <Field
          name={'preparation_time'}
          component={renderDurationInput}
          label={'Preparation time'}
          validate={preparationValid}
        />
        <br />
        <Field name={'type'} component={renderSelectField} label={'Dish type'} validate={required}>
          <MenuItem value={'pizza'}>Pizza</MenuItem>
          <MenuItem value={'soup'}>Soup</MenuItem>
          <MenuItem value={'sandwich'}>Sandwich</MenuItem>
        </Field>
        <br />
        {selectedDishType && <ConditionalFormFields selectedDishType={selectedDishType} />}
        <Button type={'submit'} disabled={pristine || submitting} variant={'contained'}>
          Submit
        </Button>
      </form>
    </Box>
  )
}

export default reduxForm({
  form: 'dishes',
})(DishesForm)
