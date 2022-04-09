import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userDetails'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})