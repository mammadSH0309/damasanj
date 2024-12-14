import React from 'react'
import not from '../assets/images/not.png'
import { Link, useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
function NotFound() {

  const navigate = useNavigate();

  return (
    <Grid container className='flex '>
        <Grid lg={6}>
        <div className='flex-1 '>
            <img src={not} width={800} style={{paddingRight : 70}}  />
        </div>
        </Grid>
        
        <Grid lg={6}>
        <div className=' text-lg w-full mb-auto  mt-auto h-full  pt-[50%] pr-[40%]  '>
            <div> 
                صفحه مورد نظر یافت نشد 
            </div>
        <Link to={''}>
        <div onClick={()=> navigate(-1)} className=' text-[#98c1d9]'>
           برگشت به صفحه قبل
        </div>
        </Link>
        </div>
        </Grid>
        
    </Grid>
  )
}

export default NotFound
