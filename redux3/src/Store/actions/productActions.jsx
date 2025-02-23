// import { increment } from "../Reducers/counterSlice";
// export const add = add//   when u want to change anthing in action

export {add} from "../Reducers/counterSlice"

export const asyncremove = () => (dispatch,getState)=>{
    const state = getState();
    setTimeout(()=>{
        dispatch(remove())
    },200)
}