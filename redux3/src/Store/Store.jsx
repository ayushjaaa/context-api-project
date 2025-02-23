import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './Reducers/counterSlice.jsx'

export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
    }
})
