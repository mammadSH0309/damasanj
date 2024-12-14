import React from 'react'
import PaperCharts from './PaperCharts'
import { LuEye } from 'react-icons/lu'
import { ColorForodPage } from '../Theme'

function CardMasrafForod() {
  return (
    <PaperCharts  bgcolor={ColorForodPage} rounded={'10px'} height={'h-[70px]'}  chart={
        <> 
           <div dir='rtl' className='h-[70px] my-auto items-center   flex'>
            <div className='border  transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[40px] rounded-lg mr-4 '>
                <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
            </div>
            <div className='flex-col   mr-3'>
                <div className=' text-black text-[14px] bg'>
                مجموع مصرف
                </div>
                <div className='text-sm font-bold text-black'>
                ۲۸۲۲
                </div>
            </div>
           </div>
        </>
    }/>
  )
}

export default CardMasrafForod
