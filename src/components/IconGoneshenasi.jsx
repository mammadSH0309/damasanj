import React from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'

function IconGoneshenasi() {
  return (
    <div className='flex items-center h-[100px] justify-center gap-x-20'>
      
      <div className='flex-col text-[#586a97] '>
                <div className='flex justify-center  transition-all duration-200'>
                <BiMessageDetail  style={{fontSize : 30}} />
                </div>
                <div className='flex text-[13px] justify-center'>
                  پیام ها
                </div>
                </div>
              
              
                <div className='flex-col text-[#586a97] '>
                <div className='flex justify-center  transition-all duration-200'>
                <IoSettingsOutline style={{fontSize : 30}} />
                </div>
                <div className='flex text-[13px] justify-center'>
                  پیام ها
                </div>
                </div>
             
                <div className='flex-col text-[#586a97] '>
                <div className='flex justify-center  transition-all duration-200'>
                <IoMdNotificationsOutline style={{fontSize : 30}} />
                </div>
                <div className='flex text-[13px] justify-center'>
                  پیام ها
                </div>
                </div>
              
                <div className='flex-col text-[#586a97] '>
                <div className='flex justify-center  transition-all duration-200'>
                <BiMessageDetail style={{fontSize : 30}} />
                </div>
                <div className='flex text-[13px] justify-center'>
                  پیام ها
                </div>
                </div>
    </div>
  )
}

export default IconGoneshenasi
