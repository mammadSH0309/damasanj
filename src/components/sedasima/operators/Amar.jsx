import React from 'react'

import LoadingProgress from '../../LoadingProgress'
import useApiParams from '../../../store'
import { Api } from '../../../query/sedasima/rasadOnline'
import useNumPersian from '../../../customhook/useNumPersian'
function Amar({  url , key}) {


  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , params)
if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>

    return (
      <>
      <div className=' px-3'>
    
    <div className='flex flex-col pt-6  align-middle    items-center w-full    text-[#98c1d9]'>
  
    <div className='flex justify-between  text-[#98c1d9] w-full  items-center  bg text-[14px] text-center ' >
       <div className=''>میزان بازدید</div>
   
    </div>
    </div>
    <div className='justify-between'>
    <div className='justify-end  pl-3  gap-1  text-[#98c1d9] align-middle items-center w-full flex font-bold '>
    <div className='flex justify-start  w-full'>
    </div>
    <span className='text-[10px] font-Calibri bg-green-300 border border-green-500 px-2  rounded-[4px] '>
    ۵۶%+
    </span>
    <span className='text-xl text-stone-400 '>
    {useNumPersian(data?.sum_view_count)}
    </span>
    </div>
    </div>
    <div className='flex flex-col  align-middle   w-22 pt-3   text-[#98c1d9]'>
    <div className='flex justify-Start text-[#98c1d9] w-full bg text-[14px] text-center ' >
      مدت زمان بازدید
    </div>
    </div>
    <div>
    <div className='justify-end p-2  pl-3  gap-1  text-[#98c1d9] align-middle items-center w-full flex font-bold '>
    <span className='text-[10px] font-Calibri bg-red-300 border border-red-500 px-2  rounded-[4px] '>
    ۵۶%+
    </span>
    <span className='text-xl text-stone-400 '>
    {useNumPersian(data?.sum_duration)}
    </span>
    </div>
    </div>
 </div>
     </>
  )
}

export default Amar
