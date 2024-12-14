import { Grid } from '@mui/material'
import React from 'react'

function PostHayeBartarForod({data}) {
  return (
    <Grid container>
        <div className='border w-full  rounded-[25px] p-1 border-[#c8e4fb] '>
    <Grid columns={12} className='p-2 flex items-center' container>
        <Grid  lg={7} md={5} sm={4}>
       
        <div className='text-[15px] w-[340px] text-justify   no-scrollbar h-10        no-scrollbar overscroll-y-contain overflow-scroll break-words'>
        {data.title}
        </div>
        </Grid>
        <Grid lg={3} md={3} sm={1}>
            <div className='p-1 pr-[80px]  flex justify-center   text-[10px]'>
              {data.shbake} 
            </div>
        </Grid>
        <Grid lg={2} md={2} sm={12}>
        <div className='p-2   flex justify-center mt-[2px] '>
             <div className='flex-col justify-center text-[13px] items-center align-middle'> 
             <p className=''>
             {data.count}  
             </p>
             </div>
            </div>
        </Grid>
    </Grid>
    
</div>
    </Grid>
  )
}

export default PostHayeBartarForod
