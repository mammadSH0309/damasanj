import { Grid, Paper, Skeleton } from '@mui/material'
import { Gauge } from '@mui/x-charts'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import useApiParams from '../store'
import useNumPersian from '../customhook/useNumPersian'
import  { Api  } from '../query/sedasima/rasadOnline/index'
function AmarRasadBaztab({  url , key , height , param  }) {

    const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api('amar' , url  , param ? param : params )
  
      if (isLoading || isFetching) return <>
       <Grid lg={6} className='p-2'>
                    <Skeleton  sx={{borderRadius : '25px' , height : '300px'}} className=' ' >                      
                   </Skeleton>           
        </Grid>
        <Grid lg={6} className='p-2'>
                    <Skeleton  sx={{borderRadius : '25px' , height : '300px'}} className='  ' >  
                       
                    </Skeleton>
                   
        </Grid>
        
      </>;

     
  return (
    <>
    <Grid lg={6} className='p-2'>
                    <Paper sx={{borderRadius : '25px'}} className=' duration-300 rounded-[20px]  align-middle items-center h-[200px]  justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl ' >  
                        <div className='flex flex-col gap-y-1  text-[#98c1d9] '>
                        <div className='flex justify-center'> 
                            <Gauge width={100} height={100} value={data?.sum_count/100}   />
                            </div>
                            <div className='justify-center text-black align-middle items-center w-full flex pl- font-bold '>
                            {useNumPersian(data?.sum_count)}
                            </div>
                            <div className='flex text-black justify-center w-full '>
                            تعداد محتوا
                            </div>
                        </div>
                    </Paper>
                    </Grid>
                    <Grid lg={6} className='p-2'>
                    <Paper sx={{borderRadius : '25px'}} className=' duration-300 rounded-[20px]  align-middle items-center h-[200px]  justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl ' >
                       
                        <div className='flex flex-col gap-y-1  text-[#98c1d9] '>
                        <div className='flex justify-center'> 
                            <Gauge width={100} height={100}  value={data?.sum_view_count/100}   />
                            </div>
                            <div className='justify-center text-black align-middle items-center w-full flex pl- font-bold '>
                            {useNumPersian(data?.sum_view_count)}
                            </div>
                            <div className='flex justify-center text-black w-full '>
                             تعداد بازدید
                            </div>
                        </div>
                    </Paper>
                    </Grid>
                    <Grid lg={6} className='p-2'>
                    <Paper sx={{borderRadius : '25px'}} className=' duration-300 rounded-[20px]  align-middle items-center h-[200px]  justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl ' >
                       
                        <div className='flex flex-col gap-y-1 text-black '>
                        <div className='flex justify-center'> 
                            <Gauge width={100} height={100} value={30}   />
                            </div>
                            <div className='justify-center text-black align-middle items-center w-full flex pl- font-bold '>
                            {useNumPersian(data?.sum_like_count)} 
                            </div>
                            <div className='flex justify-center text-black w-full '>
                            تعداد لایک 
                            </div>
                        </div>
                    </Paper>
                    </Grid>
                    <Grid lg={6} className='p-2'>
                    <Paper sx={{borderRadius : '25px'}} className=' duration-300 rounded-[20px]  align-middle items-center h-[200px]  justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl ' >
                       
                        <div className='flex flex-col gap-y-1   text-black '>
                        <div className='flex justify-center'> 
                            <Gauge width={100} height={100} value={50}   />
                            </div>
                            <div className='justify-center text-black align-middle items-center w-full flex pl- font-bold '>
                            {useNumPersian(data?.count_unique_program)} 
                            </div> 
                            <div className='flex justify-center text-black w-full '>
                             منابع
                            </div>
                        </div>
                    </Paper>
                    </Grid>   
    </>
  )
}

export default AmarRasadBaztab
