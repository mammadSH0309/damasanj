import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function BazgashtPage() {

    const navigate = useNavigate()

  return (
    
    <Button onClick={navigate(-1)} variant='outlined' >
        برگشت
    </Button>
   
  )
}

export default BazgashtPage
