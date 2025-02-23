import React from 'react'
import {useSelector} from "react-redux"
import Two from './componte/two'
function App() {
  const d = useSelector((state) => state)
  console.log(d)
  return (
    <div>
   <Two/>
    </div>
  )
}

export default App
