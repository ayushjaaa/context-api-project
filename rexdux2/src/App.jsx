import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
 const d = useSelector((state)=>state);
 console.log(d)
  return (
    <div>
      hshs
    </div>
  )
}

export default App
