import React, { lazy, Suspense, useState } from 'react'
import LoadingProgress from '../LoadingProgress'
import { Api } from '../../query/sedasima/rasadOnline'
import { Grid } from '@mui/material'
import useApiParams from '../../store'
function PieChartAll({url ,  color , key , height , bishine  ,  margin ,  marginRight , marginLeft , marginTop , marginBot , param}) 
{



  const {params , setParams} = useApiParams()
  const {data , isLoading ,  isFetching } = Api(key , url , param  ? param : params )
  const LazyPie = lazy(()=> import('./PieChartMain'))

if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>

if(bishine){
if(data && !isLoading){
  const test = data?.data?.map((d)=>
    d.y
  )
   
  const total = test?.reduce((acc , current) => acc + current , 0)
    return(
   <>
                       <Grid lg={12} container className=' items-center  pr-3  w-full'>
                         <Grid lg={4} className=' flex-col '>
                         <div className='flex justify-center  '>
                            <div className='flex justify-center items-center gap-x-2 p-3'>
                             <span className='font-bold text-3xl'>
                              {total}
                             </span>
                             </div>
                         </div>
                         <div className='flex justify-center text-[15px]'>
                             بیشینه سهم
                         </div>
                         </Grid>
                        <Grid lg={8} >
                        <Suspense fallback={<LoadingProgress/>}>
   
                         <LazyPie  data={data} marginTop={marginTop} url={url}  height={height}/>
                         </Suspense>
                       
                        </Grid >
     </Grid>
   </>
  )
}
}
return (
  <div>
    <Suspense fallback={<LoadingProgress/>}>
  
    <LazyPie  data={data} marginRight={marginRight? marginRight : 10}  marginTop={marginTop?marginTop : 10} url={url}  height={height}/>
    </Suspense>
  </div>
)

}




export default PieChartAll
