import React from 'react'
import DishesForm from 'components/form/DishesForm'
import { Box } from '@material-ui/core'

const handleSubmit = (values: Record<string, string | number>): void => {
  const reqData: Record<string, string | number> = {}

  reqData.name = values.name
  reqData.preparation_time = values.preparation_time
  reqData.type = values.type

  // Extract needed values, we could also delete unnecessary data on type field change
  if (values.type === 'pizza') {
    reqData.no_of_slices = values.no_of_slices
    reqData.diameter = values.diameter
  }
  if (values.type === 'soup') {
    reqData.spiciness = values.spiciness
  }
  if (values.type === 'sandwich') {
    reqData.slices_of_bread = values.no_of_slices
  }
  console.log(reqData)
}

const App: React.FC = () => {
  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <DishesForm onSubmit={handleSubmit} />
    </Box>
  )
}

export default App
