import React from 'react'

const NewSample = (props) => {
   const { handleClick } = props
  return (
    <>
    <p>Here you can create button below</p>
    <button onClick={handleClick}>Click Me</button>
    </>  )
}

export default NewSample