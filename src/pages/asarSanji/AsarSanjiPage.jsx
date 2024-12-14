import { Divider, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import tes from '../../assets/images/tes.png'
import { FaNewspaper } from "react-icons/fa6";
import PoyeshPage from './PoyeshPage';
function AsarSanjiPage() {


  const data = [
    'دعوت',
    'شهید جمهور',
    'من و امام',
    'شهید خدمت'
  ]

  const [chart , setChart] = useState()





const {pathname} = useLocation()

const path = pathname.split('/')[2]

  return (
    <>
    <Grid container className='p-4'>
    
    <Grid className='mt-10' md={12} lg={12}>
      <motion.div
  
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: path? 0 : 1, scale: 1 }}
    transition={{
    duration: path? 2 : 0.5,
   
    ease: [0, 0.71, 0.2, 1.01]
  }}
  >
<div>
  <div className=' mx-32 text-[#b7d4e4]'>
    
    <span className='mr-[]'>
    پویش
    </span>
    <Divider sx={{marginTop : 1 }}/>
      
    
    
  </div>
<div className=' max-sm:flex-col lg:flex xl:flex  mx-32 gap-6  m-2 flex  justify-center  border border-[#b7d4e4] '>
{data.map((data)=>(
  <>
  <Link to={'poyesh'}>
<div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

  <div>
  <img src={tes}  style={{fontSize : 20}} className={` ${path == 'telegram' ? 'text-[#98c1d9]' : ''} w-[120px] hover:-rotate-3     rounded text-[#7796ab] p-1 transition duration-300`}/>
  </div>
  <div className={ ` ${path == 'telegram' ? 'text-[#98c1d9] ' : ''} text-[#7796ab] items-center justify-center flex  w-full  transition duration-300`}>
    {data}
  </div>

</div>
</Link>
  </>
))}
<div> 
</div>
</div>
</div>
</motion.div>
    </Grid> 
    <Grid className={`mt-10 duration-[750ms] ${path ? '-translate-y-72' : null } ` } md={12} lg={12}>
    <motion.div
 initial={{ opacity: 0, scale: 0.5 }}
 animate={{ opacity: 1, scale: 1 ,  }}
 transition={{
   duration: 0.8,
   delay: 0.5,
   ease: [0, 0.71, 0.2, 1.01]
 }}
>
<div className='   p-2 flex justify-center'>
    
    <div className= ' items-center align-middle max-sm:grid max-sm:grid-cols-2 flex gap-8' >
      <div className='flex flex-col items-center align-middle duration-300  p-2 rounded-md hover:transition-all hover:duration-300 hover:shadow-2xl text-[#98c1d9]'>
          <div>
          
          <FaNewspaper className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
            
          </div>
          <div className='justify-center text-[#98c1d9] align-middle items-center w-full flex pl-2 font-bold text-2xl'>
          ۲۲۲٬۵۲۸
          </div>
          <div className='flex  text-wrap justify-center text-[#98c1d9] w-full text-lg'>
            میزان انتشار آخرین پویش
          </div>
      </div>

      <div className='flex flex-col items-center align-middle duration-300  p-2 rounded-md hover:transition-all hover:duration-300 hover:shadow-2xl text-[#98c1d9]'>
          <div>
          
          <FaNewspaper className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
            
          </div>
          <div className='justify-center text-[#98c1d9] align-middle items-center w-full flex pl-2 font-bold text-2xl'>
          ۵٬۲۸۲٬۵۶۸
          </div>
          <div className='flex justify-center text-[#98c1d9] w-full text-lg'>
            میزان انتشار
          </div>
      </div>

      <div className='flex flex-col items-center align-middle duration-300  p-2 rounded-md hover:transition-all hover:duration-300 hover:shadow-2xl text-[#98c1d9]'>
          <div>
          
          <FaNewspaper className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
            
          </div>
          <div className='justify-center text-[#98c1d9] align-middle items-center w-full flex pl-2 font-bold text-2xl'>
          ۵
          </div>
          <div className='flex justify-center text-[#98c1d9] w-full text-lg'>
            تعداد پویش
          </div>
      </div>
    </div>
  </div>
    </motion.div>
    </Grid>
  {path ? <PoyeshPage/>: null}

 </Grid>
    
    </>
  )
}


export default AsarSanjiPage



