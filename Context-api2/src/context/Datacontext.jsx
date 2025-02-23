import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const dets = createContext(null)
const Datacontext = (props) => {
    const [first, setfirst] = useState("HELLO")
return (
    <dets.Provider value={[first,setfirst]}>{props.children}</dets.Provider>
)
}

export default Datacontext
