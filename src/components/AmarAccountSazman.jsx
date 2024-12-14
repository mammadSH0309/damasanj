import { Grid } from '@mui/material'
import React from 'react'
import PaperCharts from './PaperCharts'
import { LuEye } from 'react-icons/lu'
import useApiParams from '../store'
import LoadingProgress from './LoadingProgress'
import { Api } from '../query/sedasima/rasadOnline'
import useNumPersian from '../customhook/useNumPersian'
import { SlUserFollow } from "react-icons/sl";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaCreativeCommonsShare } from "react-icons/fa";
function AmarAccountSazman({param , key , url}) {
    const {params , setParams} = useApiParams()
  const {data , isLoading , error , isFetching } = Api(key , url , param? param : params)
  if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>
  return (

    <>
       <Grid className=' bg  w-full pl-4' lg={4}>
               <div className=' group  '>
               <PaperCharts bgtitle={'bg-[#0715d3]'}  bgcolor={'#c8e4fb'} height={'h-[100px]'}  chart={
                <>
                   <div dir='rtl' className='   flex'>
                    <div className='border bg-[#c8e4fb] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[65px] rounded-lg mr-4 mt-4'>
                        <SlUserFollow style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
                    </div>
                    <div className='flex-col  mt-4 mr-3'>
                        <div className='font-bold text-[25px] bg'>
                        {useNumPersian(data?.sum_follower_count)}
                        </div>
                        <div className='text-sm'>
                            مجموع دنبال کننده
                        </div>
                    </div>
                   </div>
                </>
            }/>
               </div>
            </Grid>
            <Grid className=' w-full '  lg={4}>
            <PaperCharts  bgtitle={'bg-[#0715d3]'} bgcolor={'#c8e4fb'} height={'h-[100px]'}  chart={
                <>
                   <div dir='rtl' className='   flex'>
                    <div className='border bg-[#c8e4fb] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[65px] rounded-lg mr-4 mt-4'>
                        <FaCreativeCommonsShare style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
                    </div>
                    <div className='flex-col  mt-4 mr-3'>
                        <div className='font-bold text-[25px] bg'>
                        {useNumPersian(data?.sum_count)}
                        </div>
                        <div className='text-sm'>
                            مجموع انتشار
                        </div>
                    </div>
                   </div>
                </>
            }/>
            </Grid>
            <Grid className=' w-full pr-4' lg={4}>
            <PaperCharts bgtitle={'bg-[#0715d3]'} bgcolor={'#c8e4fb'} height={'h-[100px]'}  chart={
                <>
                   <div dir='rtl' className='   flex'>
                    <div className='border bg-[#c8e4fb] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[65px] rounded-lg mr-4 mt-4'>
                        <MdOutlineAccountCircle style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
                    </div>
                    <div className='flex-col  mt-4 mr-3'>
                        <div className='font-bold text-[25px] bg'>
                        {useNumPersian(data?.count_channel_name)}
                        </div>
                        <div className='text-sm'>
                            تعداد اکانت 
                        </div>
                    </div>
                   </div>
                </>
            }/>
            </Grid>
    </>

  )
}

export default AmarAccountSazman
