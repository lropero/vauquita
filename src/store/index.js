import { configureStore } from '@reduxjs/toolkit'

import utils from './utils'

const store = configureStore({
  devTools: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  reducer: { utils }
})

export default store
