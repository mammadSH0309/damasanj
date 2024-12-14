import React from 'react'
import { LuRadar } from 'react-icons/lu'
import useApiParams from '../store'
import { Api } from '../query/sedasima/rasadOnline'
import LoadingProgress from './LoadingProgress'

function GhotbNama({url , key , param}) {
 const list  = [
  'ارام' , 
  ''
 ]
     
  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , param? param : params)

if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>
  return (
   <>
    <div className='flex flex-col  text-[#98c1d9] '>
    <div className='justify-center h-[140px] align-middle items-center w-full flex font-Calibri font-bold '>
    <span>
    <LuRadar  className={`${data?.vazeeyat == 'آرام'  && 'animate-spin-veryslow ' } 
    ${data?.vazeeyat == 'بحرانی'  && 'animate-spin-slow ' } 
    ${data?.vazeeyat == 'نیمه بحرانی'  && 'animate-spin-medium ' } 
    ${data?.vazeeyat == 'بحرانی'  && 'animate-spin-fast ' }`}    
    
    style={{  color : 'orange' , width : 200 , height : 130}} sx={{color : 'secondary' , fontFamily : 'font-Calibri' }}  />
    </span>
    
    </div>
    
    <div className='text-[13px]  justify-center mx-auto mt-5 space-y-1'>
    <div className='flex w-full   gap-3'>
    <span className='w-20'>تعداد انتشار</span>
    <span className='text-black font-bold'> 
    {data?.enteshar}
    </span>
    </div>
    <div  className='flex  w-full  gap-3'>
    <span className='w-20'>میزان مصرف</span>
    <span className='text-black font-bold'> 
    {data?.masraf}
    </span>
    </div>
     <div className='flex w-full   gap-3'>
     <span className='w-20'>زمان شروع</span>
     <span className='text-black font-bold'> 
     {data?.zaman} دقیقه پیش
    </span>
     </div>
     <div className='flex w-full   gap-3'>
     <span className='w-20'>وضعیت</span>
     <span className='text-black font-bold'> 
     {data?.vazeeyat}
    </span>
     </div>
    </div>


 
</div>
   </>
  )
}

export default GhotbNama
