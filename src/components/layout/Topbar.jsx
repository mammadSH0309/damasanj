import React from 'react'
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import PersonIcon from '@mui/icons-material/Person';
import { Box, IconButton, TextField } from '@mui/material';
import { MdOutlineMenu } from "react-icons/md";
import MenuTopbar from '../MenuTopbar';
import { HiAdjustments } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDoubleLeft } from "react-icons/hi";
function Topbar({state , open}) {






  return (
    <div className='bg-white h-14 shadow-2xl d z-50 shadow-blue-100'>
      <div className='flex items-center h-full p-1 justify-between ' >
      <div className='transition hover:-translate-y-1 w-full duration-200' >
         <IconButton onClick={state}  sx={{display : {sm : 'none' , md : 'block'}}} >
          {open  ? <HiChevronDoubleRight  className='text-[#98c1d9]' /> :  <HiChevronDoubleLeft  className='text-[#98c1d9]' /> }
          </IconButton>
        </div>
      <div className='p-8 text-slate-400 flex gap-1    transition' >
        <div className='transition hover:-translate-y-1 w-full duration-200' >
          <IconButton  >
          <Brightness3Icon  className='text-[#98c1d9]' />
          </IconButton>
        </div>
        <div className='transition hover:-translate-y-1 w-full duration-200' >
          <IconButton>
          <HomeIcon className='text-[#98c1d9]'/>
          </IconButton>
        </div>
        <div className='transition hover:-translate-y-1 w-full duration-200'>
        <MenuTopbar/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Topbar
