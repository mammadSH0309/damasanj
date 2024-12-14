import { Grid } from '@mui/material'
import React from 'react'

import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import useApiParams from '../store'
import { Api } from '../query/sedasima/rasadOnline'
import LoadingProgress from './LoadingProgress'
import useNumPersian from '../customhook/useNumPersian'

function AmarKoli({ url , param , key}) {

 
    const {params , setParams} = useApiParams()
    const {data , isLoading , error , refetch , isFetching } = Api(key , url , param? param : params)

  
  if(isLoading) return <LoadingProgress/>
  if(isFetching) return <LoadingProgress/>
  if(error) return <>{error.message}</>


  return (
    <Grid container columns={12}>
           <Grid item container>
            </Grid> 
               <Grid item container className='max-h-screen pt-10' md lg={12}>
               <Grid item md={12} className='  ' lg={5}>
                    <div className='flex justify-start text-slate-300  pr-3  h-8'>
                        مصرف
                    </div>
                    <div className='flex items-center justify-center'>
                    <div className='flex items-center gap-x-2  pr-8  justify-center  '>
                     <span className='text-1xl '>
                      {
                        useNumPersian(data.sum_like_count)
                      }
                     </span>
                    <span><FaArrowUp style={{color:'green' , fontSize: 20}} /></span>
                     </div>
                    </div>
                </Grid>
                <Grid item className=' flex justify-center pr-6 h-[169px] bg '  lg={1}>
                    {/* <Divider orientation='vertical' sx={{height : '50px' , marginTop : '20px'}} /> */}
                    <div className='w-2 h-20 bg-slate-400 '>

                    </div>
                </Grid> 
                <Grid item md={12}  lg={5}>              
                     <div className='flex justify-start  text-slate-300 pr-3 h-8'>
                     انتشار
                    </div>
                    <div className='flex justify-center items-center '>
                    <div className='flex items-center gap-x-2 pr-4 justify-center  '>
                     <span className='text-1xl px-1'>{
                        useNumPersian(data.enteshar)
                        }</span>
                    <span><FaArrowDown style={{color:'red' , fontSize: 20}} /></span>
                     </div>
                    </div>
                </Grid>
               </Grid>
            </Grid>
  )
}

export default AmarKoli
