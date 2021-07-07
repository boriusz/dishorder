import React from 'react'
import DishesForm from 'components/form/DishesForm'
import { Box } from '@material-ui/core'

const handleSubmit = (values: Record<string, string | number>): void => {
  const reqData: Record<string, string | number> = {}

  reqData.name = values.name

  if ((values.preparation_time as string).length === 5) {
    reqData.preparation_time = values.preparation_time + ':00'
  } else {
    reqData.preparation_time = values.preparation_time
  }
  reqData.type = values.type

  // Extract needed values, we could also delete unnecessary data on type field change
  if (values.type === 'pizza') {
    reqData.no_of_slices = Number(values.no_of_slices)
    reqData.diameter = Number(values.diameter)
  }
  if (values.type === 'soup') {
    reqData.spiciness = Number(values.spiciness)
  }
  if (values.type === 'sandwich') {
    reqData.slices_of_bread = Number(values.slices_of_bread)
  }
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
