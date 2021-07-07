import React, { useState } from 'react'
import DishesForm from 'components/form/DishesForm'
import { SubmissionError } from 'redux-form'
import { Box, Button, CircularProgress } from '@material-ui/core'

const handleSubmit = (
  values: Record<string, string | number>
): { errors: Record<string, string> | null } => {
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
  // return { errors: null }
  //Example error possibly returned from API
  return {
    errors: {
      preparation_time: 'Too long',
    },
  }
}

const App: React.FC = () => {
  const [sendingState, setSendingState] = useState<'idle' | 'pending' | 'completed'>('idle')
  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {sendingState === 'idle' && (
        <DishesForm
          onSubmit={(values: Record<string, string | number>) => {
            setSendingState('pending')
            const { errors } = handleSubmit(values)
            //Setting all errors to fields
            if (errors) {
              setSendingState('idle')
              throw new SubmissionError({ ...errors })
            }
            setTimeout(() => {
              setSendingState('completed')
            }, 1000)
          }}
        />
      )}
      {sendingState === 'pending' && <CircularProgress />}
      {sendingState === 'completed' && (
        <Box
          boxShadow={5}
          p={2}
          m={2}
          borderRadius={12}
          maxWidth={800}
          width={'60%'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          fontSize={24}
        >
          Dish ordered successfully.
          <Box mt={4}>
            <Button
              variant={'outlined'}
              onClick={() => {
                setSendingState('idle')
              }}
            >
              Another order
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default App
