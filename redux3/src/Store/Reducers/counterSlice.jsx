import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {  // Use 'reducers' here instead of 'reducer'
    increment: (state) => {
      state.data.push(action.payload)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export default counterSlice.reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions
