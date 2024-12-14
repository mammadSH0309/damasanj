import { CircularProgress } from '@mui/material'
import React from 'react'

function LoadingCharts() {
  return (
    <div className='justify-center w-full flex align-middle h-full items-center ' >
          <CircularProgress />
    </div>
  )
}

export default LoadingCharts
