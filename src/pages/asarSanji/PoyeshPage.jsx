import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import axios from 'axios'
function PoyeshPage() {
    const [chart , setChart] = useState()


    useEffect(()=>{
      axios.get('http://10.32.227.24:8000/instagram/mostactivemedia/get')
      .then((data)=> setChart(data.data))
      
    }, [])
  return (
    
        <>
 
        
      <Grid container  className=' p-6 transition-all duration-300   -translate-y-64 '>
      <Grid md={6} lg={6} className=''>
      <motion.div 
 initial={{ opacity: 0, scale: 0.5 }}
 animate={{ opacity: 1, scale: 1 ,  }}
 transition={{
   duration: 0.8,
   delay: 0.5,
   ease: [0, 0.71, 0.2, 1.01]
 }}
>
              <div  className=' text-[#98C1D9] font-semibold'> 
              محتوای تولیدی
              
              </div>
              <div className='border h-96 border-[#b7d4e4] rounded-md p-4'>
             
              {/* fetch API */}
              {/* <LoadingCharts/> */}
      
      
              </div></motion.div>

      </Grid>
      <Grid lg={6}>
         <motion.div
 initial={{ opacity: 0, scale: 0.5 }}
 animate={{ opacity: 1, scale: 1 ,  }}
 transition={{
   duration: 0.8,
   delay: 0.5,
   ease: [0, 0.71, 0.2, 1.01]
 }}
>
              <div  className=' text-[#98C1D9] font-semibold'> 
             محتوای ارسالی
              </div>
              <div className='border h-96 border-[#b7d4e4] rounded-md p-4'>
              <ChartTest series={chart?.series} cat={chart?.categories}/>
              {/* fetch API */}
              {/* <LoadingCharts/> */}
      
      
              </div></motion.div>
      </Grid>
      
      </Grid>
  
        </>
  )
}

export default PoyeshPage
