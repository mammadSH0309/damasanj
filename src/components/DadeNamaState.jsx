import React from 'react'
import useNumPersian from '../customhook/useNumPersian'
function DadeNamaState({data}) {
 
  return (
   <>
   <div className='flex gap-x-3 justify-start p-2'>
            <div className='flex flex-col  align-middle   w-20 p-2   '>
            <div className='justify-center text-stone-400 align-middle items-center w-full flex font-bold text-1xl'>
            {useNumPersian(data?.sum_duration)}
            </div>
            <div className='flex justify-center text-stone-400 text-[12px] w-full bg  text-center ' >
                مدت زمان 
            </div>
            </div>

            

            <div className='flex flex-col *:  w-20 p-2   text-[#98c1d9]'>
            <div className='justify-center text-stone-400  w-full flex font-bold text-1xl'>
            {useNumPersian(data?.max_view_count)}
            </div>
            <div className='flex justify-center  w-full text-stone-400 text-[12px] text-center'>
                بیشینه بازدید
            </div>
            </div>
            </div>
            <div className='flex gap-x-3  justify-start p-2'>
            <div className='flex flex-col  align-middle   w-20 p-2   text-[#98c1d9]'>
            <div className='justify-center text-stone-400 align-middle items-center w-full flex font-bold text-1xl'>
            {useNumPersian(data?.sum_view_count)}
            </div>
            <div className='flex justify-center text-stone-400 text-[12px] w-full  text-center'>
                میزان بازدید
            </div>
            </div>
            <div className='flex flex-col  align-middle   w-20 p-2   text-[#98c1d9]'>
            <div className='justify-center text-stone-400  align-middle items-center w-full flex font-bold '>
            {useNumPersian(data?.count_programe)}
            </div>
            <div className='flex justify-center  w-full text-stone-400 text-[12px] text-center'>
                محتوا
            </div>
            </div>
            </div>
   </>
            
  )
}

export default DadeNamaState
