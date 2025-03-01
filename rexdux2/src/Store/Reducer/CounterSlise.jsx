import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
  };
  export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
          },
          decrement: (state) => {
            state.value -= 1
          },
          incrementByAmount: (state, action) => {
            console.log(action)
            state.value += action.payload
          },
    }
  })
  export default counterSlice.reducer// taki store mai reeduce add kar sake kyo ke pahle step mai reduce khali ho ga ikie bad bhare ge reduce ko//

export const {increment,decrement,incrementByAmount} = counterSlice.actions;