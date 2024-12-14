import React from 'react'
import DamaSanjChart from './Charts/DamaSanjChart'
import { Grid } from '@mui/material'
import { Api } from '../query/sedasima/rasadOnline'
import LoadingProgress from './LoadingProgress'
import useNumPersian from '../customhook/useNumPersian'
import useApiParams from '../store'

function DamaSanjTasvirChehre({key , url , param}) {

  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , param ? param : params)


if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
  return (
    <>
          <div className=' flex-col '>
            <div  className='p-2 pt-4 flex justify-center'>
            <div className='gap-x-3 flex justify-center items-center' >
                <span className='font-bold text-4xl'>
                    {useNumPersian(data?.dama_sanj_today)}
                </span>
                <span>درجه</span>
            </div>
            </div>
            <div className='flex justify-center h-[200px]' >
                <DamaSanjChart data={data?.dama_sanj_today} />
                
            </div>
            <Grid container>
              <Grid className='p-1 pt-5' lg={6}>
              <div className='border bg-[#134B70]  h-[50] rounded-[25px]'>
                    <div className=' p-3 text-white flex items-center justify-between '>
                   <p className='text-[14px]'>دمای قبلی </p>
                   <p className='font-bold ' >
                    {useNumPersian(data?.dama_sanj_yesterday)}
                   </p>
                    </div>
                    
              </div>
              </Grid>
            <Grid className='p-1 pt-5' lg={6}>
            <div className='border  border-blue-300 bg-[#134B70] h-[50] rounded-[25px]'>
                    <div className=' p-3 text-white flex items-center justify-between '>
                   <p className='text-[14px]'>میانگین دما </p>
                   <p className='font-bold overflow-hidden '>
                    {useNumPersian(data?.dama_sanj_week)}
                   </p>
                    </div>
                    
              </div>
            </Grid>
            </Grid>
            </div>
    </>
  )
}

export default DamaSanjTasvirChehre
