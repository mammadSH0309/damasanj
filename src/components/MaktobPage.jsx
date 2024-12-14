import React from 'react'
import useApiParams from '../store'
import { Api } from '../query/sedasima/rasadOnline'
import LoadingProgress from './LoadingProgress'
import CardMaktob from '../components/CardMaktob'
import { Grid } from '@mui/material'
function MaktobPage({key , url , param , cartName}) {

    const {params , setParams} = useApiParams()

  
    const {data , isLoading ,  isFetching } = Api( key , url  , param ? param : params )

  if(isLoading) return <LoadingProgress/>
  if(isFetching) return <LoadingProgress/>
  return (
    <Grid lg={12} className='  gap-4 '>
        <Grid container  lg={12}  className='pt-8 justify-center gap-4   '>
  
  {data?.map((data)=> (
      <>
 
 <CardMaktob colordec={'text-#01a6ac'} colorsize={'text-#01a6ac'} colortitle={'text-#01a6ac'} color={'bg-[#89dee0]'} data={data}/>
     
      </>
  ))}
  

  
 </Grid>
    </Grid>
  )
}

export default MaktobPage
