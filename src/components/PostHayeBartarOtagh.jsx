import React from 'react'
import { Api } from '../query/sedasima/rasadOnline'
import LoadingProgress from './LoadingProgress'
import useApiParams from '../store'
import { Grid } from '@mui/material'
import useNumPersian from '../customhook/useNumPersian'

function PostHayeBartarOtagh({ url , param , key , height}) {

    
    const {params , setParams} = useApiParams()
    const {data , isLoading , error , refetch , isFetching } = Api(key , url , param? param : params)

  
  if(isLoading) return <LoadingProgress/>
  if(isFetching) return <LoadingProgress/>
  if(error) return <>{error.message}</>

  return (
    
      data?.map((data , index)=> (
         <>
          <div key={index} id={index} className='border overflow-hidden no-scrollbar   rounded-[20px] p-1 border-[#c8e4fb] '>
             <Grid columns={12} className='p-2   flex items-center' container>
                 <Grid  lg={7}>
       
                 <div className='text-[13px] w-[340px]    no-scrollbar h-10        no-scrollbar overscroll-y-contain overflow-scroll break-words'>
                 {data?.description}
                 </div>
                 </Grid>
                 <Grid lg={3}>
                     <div className='p-1  flex justify-center  text-[12px]'>
                     {data?.username}
                     </div>
                 </Grid>
                 <Grid lg={2}>
                 <div className='p-2   flex justify-center mt-[2px] '>
                      <div className='flex-col  text-[13px] items-center align-middle'> 
                      <p className=''>
                      {useNumPersian(data?.like_count)}  
                      </p>
                      </div>
                     </div>
                 </Grid>
             </Grid>
             
         </div>
         </>
        ))
    
  )
}

export default PostHayeBartarOtagh
