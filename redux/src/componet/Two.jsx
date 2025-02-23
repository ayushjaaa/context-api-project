import React from 'react'
import useSelector from 'react-redux'

const Two = () => {
const products = useSelector((state)=> state.products)
console.log(products)
  return (
    <div>
      
    </div>
  )
}

export default Two
