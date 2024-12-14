import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

function LoadingProgress() {
  return (
    <div className='flex justify-center items-center w-full h-full '>
      <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />
    </div>
  )
}

export default LoadingProgress
