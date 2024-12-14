import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { TbBrandTelegram } from "react-icons/tb";
import DataTest from './Charts/DataTest';
function AkhbarLahzeNegar({data }) {

  const [data1 , setData1] = useState(
    DataTest
  )
  const [state  , setState] = useState(null)

  const togglePost = (id) => {
    if(id === state) {
      setState(null)
    } else setState(id)
    // setState(state === id ? null : id)
  }
  return (
   data?.map((data , index)=> (
    <>
     <Grid  key={data.id} lg={12} container className='border h-fit   transition-all duration-300 border-blue-200  rounded-[25px]'>
     <Grid  lg={12} className='text-[12px] flex justify-between p-4 pr-3 w-6    h-2   items-center  break-words  ' >
        <div className='flex items-center'>
        <span>
            <TbBrandTelegram />
        </span>
        <span>
        {data.channel_name}
        </span>
        </div>
        <div>
        <Grid className='text-[12px] flex p-2  gap-x-2  items-center px-3 rounded-[25px]   '
      lg={12}> 
      <div className='   text-[12px] pt-1 text-stone-300     '>
        {data.release_date_post}
      </div>
       </Grid>
        </div>
      </Grid>
    <Grid  lg={12}  className='p-2  ' >
      <Grid  onClick={()=> {togglePost(data.id)}}    className={`no-scrollbar text-justify px-3 text-[15px] ${state === data.id  ?  'h-full' : 'h-[90px]'} transition-all duration-300 text-[13px]   overflow-scroll break-words`}
        >
            {data.text_clean}
        </Grid>
      
     
    </Grid>
   
    </Grid>
    </>
   ))
  )
}

export default AkhbarLahzeNegar
