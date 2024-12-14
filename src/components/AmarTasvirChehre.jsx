import { Grid, Skeleton } from '@mui/material'
import React from 'react'
import { Api } from '../query/sedasima/rasadOnline'
import LoadingProgress from './LoadingProgress'
import useNumPersian from '../customhook/useNumPersian'
import useApiParams from '../store'

function AmarTasvirChehre({key , url , param}) {

  const {params , setParams} = useApiParams()
    
  const {data , isLoading ,  isFetching } = Api(key , url , param ? param : params )


if(isLoading) return (
  <>
  <div className='flex justify-center w-full '>
  <Grid className='justify-center flex gap-x-6 w-full' container lg={12}>
     <Skeleton className='pr-2 p-2 w-[121px]   ' lg={3}>           
     <div className='border  bg-[#134B70] w-[121px] h-[100px] rounded-[25px]'>
                    <div className=' p-3 text-white '>
                   <p>کاربران</p>
                    </div>
                    <div className='flex justify-center text-white items-center gap-x-2'>
                    <span className='font-bold text-2xl text-white'>
                        {useNumPersian(data?.karbaran)}
                    </span>
                
                    </div>
      </div>          
     </Skeleton>
     <Skeleton className='pr-2 p-2 w-[121px]' lg={3}>
     <div className='border  bg-[#134B70] w-[121px] h-[100px] rounded-[25px]'>
                    <div className=' p-3 text-white '>
                   <p>انتشار</p>
                    </div>
                    <div className='flex justify-center text-white items-center gap-x-2'>
                    <span className='font-bold text-2xl text-white'>
                    {useNumPersian(data?.enteshar)}
                    </span>
               
                    </div>
      </div>
     </Skeleton>
     <Skeleton className='pr-2 p-2 w-[121px]  ' lg={3}>  
                      
     </Skeleton>
     </Grid> 
  
  </div>
  </>
)
if(isFetching) return (
  <>
  <div className='flex justify-center w-full '>
  <Grid className='justify-center flex gap-x-6 w-full' container lg={12}>
     <Skeleton className='pr-2 p-2 w-[121px]   ' lg={3}>           
     <div className='border  bg-[#134B70] w-[121px] h-[100px] rounded-[25px]'>
                    <div className=' p-3 text-white '>
                   <p>کاربران</p>
                    </div>
                    <div className='flex justify-center text-white items-center gap-x-2'>
                    <span className='font-bold text-2xl text-white'>
                        {useNumPersian(data?.karbaran)}
                    </span>
                
                    </div>
      </div>          
     </Skeleton>
     <Skeleton className='pr-2 p-2 w-[121px]' lg={3}>
     <div className='border  bg-[#134B70] w-[121px] h-[100px] rounded-[25px]'>
                    <div className=' p-3 text-white '>
                   <p>انتشار</p>
                    </div>
                    <div className='flex justify-center text-white items-center gap-x-2'>
                    <span className='font-bold text-2xl text-white'>
                    {useNumPersian(data?.enteshar)}
                    </span>
               
                    </div>
      </div>
     </Skeleton>
     <Skeleton className='pr-2 p-2 w-[121px]  ' lg={3}>  
                      
     </Skeleton>
     </Grid> 
  
  </div>
  </>
)





  return (
   <>
       <Grid className='justify-center' container lg={12}>
     <Grid className='pr-2 p-2   ' lg={3}>           
     <div className='border  bg-[#134B70] h-[100px] rounded-[25px]'>
                    <div className=' p-3 text-white '>
                   <p>کاربران</p>
                    </div>
                    <div className='flex justify-center text-white items-center gap-x-2'>
                    <span className='font-bold text-2xl text-white'>
                        {useNumPersian(data?.karbaran)}
                    </span>
                
                    </div>
      </div>          
     </Grid>
     <Grid className='pr-2 p-2' lg={3}>
     <div className='border  bg-[#134B70] h-[100px] rounded-[25px]'>
                    <div className=' p-3 text-white '>
                   <p>انتشار</p>
                    </div>
                    <div className='flex justify-center text-white items-center gap-x-2'>
                    <span className='font-bold text-2xl text-white'>
                    {useNumPersian(data?.enteshar)}
                    </span>
               
                    </div>
      </div>
     </Grid>
     <Grid className='pr-2 p-2' lg={3}>  
                    <div className='border  bg-[#134B70] h-[100px] rounded-[25px]'>
                    <div className=' p-3 text-white '>
                   <p>مصرف</p>
                    </div>
                    <div className='flex justify-center text-white items-center gap-x-2'>
                    <span className='font-bold text-2xl text-white'>
                    {useNumPersian(data?.masraf)}
                    </span>
                
                    </div>
                    </div>          
     </Grid>
     </Grid>  
   </>
  )
}

export default AmarTasvirChehre
