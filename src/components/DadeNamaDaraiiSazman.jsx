import { Grid } from '@mui/material'
import React from 'react'
import PaperCharts from './PaperCharts'
import { LuEye } from 'react-icons/lu'
import useApiParams from '../store'

import LoadingProgress from './LoadingProgress'
import { Api } from '../query/sedasima/rasadOnline'
import useNumPersian from '../customhook/useNumPersian'

function DadeNamaDaraiiSazman({key , url , param }) {

    const {params , setParams} = useApiParams()
    const {data , isLoading ,  isFetching } = Api(key , url , param ? param : params )

  
  if(isLoading) return <LoadingProgress/>
  if(isFetching) return <LoadingProgress/>
  

    
  
  return (
    <Grid container className='h-full justify-center items-center align-middle my-auto  mt-10'>
        
    <>
    <Grid className='p-2  ' item lg={5}>
      
<PaperCharts  bgtitle={'bg-[#d9107f]'} bgcolor={'#f8bfdf'} rounded={'10px'} height={'h-[100px]'}  chart={
  <>
     <div dir='rtl' className='   flex'>
      <div className='border bg-[#f8bfdf] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[60px] rounded-lg mr-4 mt-4'>
          <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
      </div>
      <div className='flex-col  mt-4 mr-3'>
          <div className='font-bold text-white text-[25px] bg'>
            {useNumPersian(data?.count_channel_name)}
          </div>
          <div className='text-sm text-white'>
          تعداد کانال
          </div>
      </div>
     </div>
  </>
}/>
    
          </Grid>
          <Grid  className='p-2  ' item lg={5}>
      
<PaperCharts  bgtitle={'bg-[#d9107f]'} bgcolor={'#f8bfdf'} rounded={'10px'} height={'h-[100px]'}  chart={
  <>
     <div dir='rtl' className='   flex'>
      <div className='border bg-[#f8bfdf] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[60px] rounded-lg mr-4 mt-4'>
          <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
      </div>
      <div className='flex-col  mt-4 mr-3'>
          <div className='font-bold text-white text-[25px] bg'>
            {useNumPersian(data?.count_programe_name)}
          </div>
          <div className='text-sm text-white'>
            تعداد برنامه 
          </div>
      </div>
     </div>
  </>
}/>
    
          </Grid>
          <Grid className='p-2  ' item lg={5}>
      
<PaperCharts  bgtitle={'bg-[#d9107f]'} bgcolor={'#f8bfdf'} rounded={'10px'} height={'h-[100px]'}  chart={
  <>
     <div dir='rtl' className='   flex'>
      <div className='border bg-[#f8bfdf] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[60px] rounded-lg mr-4 mt-4'>
          <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
      </div>
      <div className='flex-col  mt-4 mr-3'>
          <div className='font-bold text-white text-[25px] bg'>
            {useNumPersian(data?.sum_view_count)}
          </div>
          <div className='text-sm text-white'>
            تعداد بازدید
          </div>
      </div>
     </div>
  </>
}/>
    
          </Grid>
          <Grid  className='p-2  ' item lg={5}>
      
<PaperCharts  bgtitle={'bg-[#d9107f]'} bgcolor={'#f8bfdf'} rounded={'10px'} height={'h-[100px]'}  chart={
  <>
     <div dir='rtl' className='   flex'>
      <div className='border bg-[#f8bfdf] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[60px] rounded-lg mr-4 mt-4'>
          <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
      </div>
      <div className='flex-col  mt-4 mr-3'>
          <div className='font-bold text-white text-[25px] bg'>
          {useNumPersian(data?.count_id)}
          </div>
          <div className='text-sm text-white'>
            تعداد محتوا
          </div>
      </div>
     </div>
  </>
}/>
    
          </Grid>
    </>

   
       
    
      
       
    </Grid>
  )
}

export default DadeNamaDaraiiSazman
