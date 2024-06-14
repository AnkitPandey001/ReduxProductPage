import React from 'react'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  )
}

export default Spinner
