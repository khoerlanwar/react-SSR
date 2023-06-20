import { configureStore } from '@reduxjs/toolkit'
import countingValue from './store/countingValue'

export const store = configureStore({
  reducer: {
    counting: countingValue
  },
})