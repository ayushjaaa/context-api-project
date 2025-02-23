import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./Reducer/CounterSlise"
export const store = configureStore({
    reducer:{
        terimsaz:counterReducer
    }
})