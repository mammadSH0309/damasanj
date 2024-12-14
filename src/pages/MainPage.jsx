import React, { useState } from 'react'
import { FaNewspaper } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, TextField, ThemeProvider, Tooltip, createTheme } from '@mui/material';
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link, Outlet, useLocation } from 'react-router-dom';
import {motion} from 'framer-motion'
import eita from '../assets/images/eita.svg'
import Soroush from '../assets/images/Soroush.svg'
import bale from '../assets/images/bale.svg'
import PaperCharts from '../components/PaperCharts'
import BarColumnChart from '../components/Charts/BarColumnChart';
import PieChartMain from '../components/Charts/PieChartMain';
import FilterZaman from '../components/FilterZaman';
import FilterPlatform from '../components/FilterPlatform';
import HeatMapChart from '../components/Charts/HeatMapChart';
import LineChartMulti from '../components/Charts/LineChartMulti';
import ForodPage from './forodPage';



const theme = createTheme({
  components : {
    MuiOutlinedInput : {

      styleOverrides :{
        root :{
          borderColor : 'coral'
        }
      }
    },
    MuiInputBase : {
      styleOverrides : {
        root : {
          borderStyle : 'solid',
          borderColor : 'coral',
          backgroundColor : '#E2F7F6'
        }
      }
    },
    MuiTextField : {
      variants : {
        
      },
      defaultProps : {
        dir : 'rtl',
        width: '100%'
      },
      styleOverrides : {
        root : {
          width : '100%',
          direction : 'rtl',
          paddingBottom : 20,
          borderColor :  'rgb(183 212 228 / var(--tw-border-opacity));',
          
        }
      } 
    }
  }
})

function MainPage() {


  
 

  return (
   <ThemeProvider theme={theme}>

  <ForodPage/>

    
    
   
  
   
    
   </ThemeProvider>
  )
}

export default MainPage



{/* <div className='   p-10 flex justify-center'>
    
    <div className= ' max-sm:grid max-sm:grid-cols-2 flex gap-10' >
      <div className='flex flex-col text-[#98c1d9]'>
          <div>
          
            <FaNewspaper className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
            
          </div>
          <div className='justify-center text-[#98c1d9] align-middle items-center w-full flex pl-2 font-bold text-2xl'>
          ۵٬۲۸۲٬۵۶۸
          </div>
          <div className='flex justify-center text-[#98c1d9] w-full text-lg'>
            محتوا
          </div>
    </div>

      <div className='flex flex-col text-[#98c1d9]'>
          <div>
            <AiOutlineLike className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
          </div>
          <div className='justify-center align-middle items-center w-full flex pl-1 font-bold text-2xl'>
          ۱۳۰٬۲۸۴
          </div>
          <div className='flex justify-center w-full text-lg'>
            لایک اینستاگرام
          </div>
      </div>

      <div className='flex flex-col text-[#98c1d9]'>
          <div>
            <CiTwitter className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
          </div>
          <div className='justify-center align-middle items-center w-full flex pl-1 font-bold text-2xl'>
          ۴۸۶٬۷۲۹
          </div>
          <div className='flex justify-center w-full text-lg'>
            لایک ایکس
          </div>
      </div>

      <div className='flex flex-col text-[#98c1d9]'>
          <div>
            <LuEye className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
          </div>
          <div className='justify-center align-middle items-center w-full flex pl- font-bold text-2xl'>
          ۸۳۶٬۹۰۲٬۹۳۶
          </div>
          <div className='flex justify-center w-full text-lg'>
          بازدید تلگرام
          </div>
      </div>


    </div>
  </div> */}