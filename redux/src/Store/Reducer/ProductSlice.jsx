import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    data :[
   {id:2,name:"ayush"},
   {id:3,name:"ankit"}

    ]
};
const ProductSlice = createSlice({
    name:"products",
    initialState
});
export default ProductSlice.reducer