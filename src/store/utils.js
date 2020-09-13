import { createSlice } from '@reduxjs/toolkit'

const utilsSlice = createSlice({
  name: 'utils',
  initialState: {
    dimensions: {}
  },
  reducers: {
    updateDimensions (state, action) {
      const dimensions = action.payload
      state.dimensions = dimensions
    }
  }
})

export const { updateDimensions } = utilsSlice.actions

export default utilsSlice.reducer
