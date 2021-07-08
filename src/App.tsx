import React, { useState } from 'react'
import DishesForm from 'components/form/DishesForm'
import { Box, Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { handleSubmit } from './utils/formSubmission'
import { reset, SubmissionError } from 'redux-form'
import { AppDispatch } from './app/store'

const Alert: React.FC<AlertProps> = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const App: React.FC = () => {
  const [completed, setCompleted] = useState(false)
  const [result, setResult] = useState<Record<string, string | number> | null>(null)
  return (
    <Box
      width={'100%'}
      height={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <DishesForm
        onSubmit={async (values: Record<string, string | number>, dispatch: AppDispatch) => {
          try {
            const data = await handleSubmit(values)
            setResult(data)
            setCompleted(true)
            dispatch(reset('dishes'))
            return data
          } catch (e) {
            throw new SubmissionError(e)
          }
        }}
      />
      <Snackbar open={completed} autoHideDuration={6000} onClose={() => setCompleted(false)}>
        <Alert onClose={() => setCompleted(false)} severity="success">
          Ordered successfully. Order id: {result?.id}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default App
