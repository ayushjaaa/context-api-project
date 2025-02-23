import { configureStore } from "@reduxjs/toolkit";//1 time
import ProductSlice from "./Reducer/ProductSlice"//2 timr\
export const store =configureStore({
    reducer:{
        products:ProductSlice
    }
    //2. reducer:{
    //     products:ProductSlice
    // }
})
export default store