import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './user'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})