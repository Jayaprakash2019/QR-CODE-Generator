import React from 'react'

export const functionSample = (props) => {
    const { handleClick } = props;

  return (
    <>
    <p>Here you can create button below</p>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}
