import React, { useEffect } from 'react'

import LoadingProgress from './LoadingProgress'

import useNumPersian from '../customhook/useNumPersian'
import useApiParams from '../store'
import { Api } from '../query/sedasima/rasadOnline'

function AmarKoliRasadBarnameOstani({url , key ,param }) {



  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , param? param : params)


if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>
 

  return (
    <>
            <div className='h-[210px] items-center '>
            <div className='justify-center items-center h-full align-middle '>
             <div className='flex gap-x-14 justify-center items-center p-2'>
                <div className='flex flex-col  align-middle   w-20 p-2   '>
                <div className='justify-center text-stone-400 align-middle items-center w-full flex font-bold text-2xl'>
                {useNumPersian(data?.count_unique_program)} 
                </div>
                <div className='flex justify-center text-stone-400 text-[12px] w-full bg  text-center ' >
                    منابع  
                </div>
                </div>
                <div className='flex flex-col justify-center *:  w-20 p-2   text-[#98c1d9]'>
                <div className='justify-center text-stone-400  w-full flex font-bold text-2xl'>
                {useNumPersian(data?.sum_like_count)}
                </div>
                <div className='flex justify-center  w-full text-stone-400 text-[12px] text-center'>
                    تعداد لایک 
                </div>
                </div>
                </div>
                <div className='flex gap-x-14 justify-center p-2'>
                <div className='flex flex-col  align-middle   w-20 p-2   text-[#98c1d9]'>
                <div className='justify-center text-stone-400 align-middle items-center w-full flex font-bold text-2xl'>
                {useNumPersian(data?.sum_view_count)}
                </div>
                <div className='flex justify-center text-stone-400 text-[12px] w-full  text-center'>
                    میزان بازدید
                </div>
                </div>

                

                <div className='flex flex-col  align-middle   w-20 p-2   text-[#98c1d9]'>
                <div className='justify-center text-stone-400  align-middle items-center w-ful text-2xl flex font-bold '>
                {useNumPersian(data?.sum_count)}
                </div>
                <div className='flex justify-center  w-full text-stone-400 text-[12px] text-center'>
                    محتوا
                </div>
                </div>
                </div>
             </div>
            </div>
    </>
  )
}

export default AmarKoliRasadBarnameOstani
