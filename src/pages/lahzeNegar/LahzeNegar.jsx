import React, {  useState } from 'react'
import {Grid } from '@mui/material'
import SliderTest from '../../components/Charts/SliderTest'
import DataTest from '../../components/Charts/DataTest'
import PaperCharts from '../../components/PaperCharts'
import AkhbarLahzeNegar from '../../components/AkhbarLahzeNegar'
import { FaCircleNotch } from "react-icons/fa";
import RevayateAval from '../../components/RevayateAval'
function RasadNegar(props) { 


  return (
    <>
    <Grid container className='px-[18px] pt-2'>
      <Grid className='p-2 items-center' lg={12}>
          <div className='border p-3 rounded-[25px]'>
            <Grid container className='flex items-center '>
                <Grid >
                <FaCircleNotch className='animate-spin-medium' style={{fontSize : 25 , color : 'red' }}/>
                </Grid>
                <Grid lg={11}  className=' ' >
                  <RevayateAval/>
                </Grid>
            </Grid>
          </div>
      </Grid>
      <Grid className='p-2' lg={4}>
        <div >
        <PaperCharts title={'اخبار جریانساز'} bgtitle={'bg-blue-700'} height={'h-[700px]'} chart={
          <>
          <Grid className='flex-col space-y-2 p-2 overflow-scroll no-scrollbar h-[660px]'>
          <AkhbarLahzeNegar  data={DataTest} />
        </Grid>
          </>
        }/>
        </div>
      </Grid>
      <Grid  lg={4}>
      <Grid className='p-2'>
      <PaperCharts title={'اخبار پرمصرف'} bgtitle={'bg-green-400'} height={'h-fit'} chart={
        <>
        <div className=''>
        <SliderTest data={DataTest}/>
        </div>
       
        </>
      } />
      </Grid>
      <Grid className='p-2 flex justify-center'>
      <PaperCharts title={'اخبار لحظه ای'} bgcolor={'bg-green-600'} bgtitle={'bg-red-700'} height={'h-[555px]'} chart={
        <>
        <Grid className='flex-col space-y-2 p-2 overflow-scroll no-scrollbar h-[520px]'>
          <AkhbarLahzeNegar data={DataTest}/>
        </Grid>
        </>
      }/>
      </Grid>
      </Grid>
      <Grid className='p-2'  lg={4}>
      <PaperCharts title={'اخبار رصد ویژه'} bgtitle={'bg-orange-500'} height={'h-[700px]'}  chart={
        <>
         <Grid className='flex-col space-y-2 p-2 overflow-scroll no-scrollbar h-[660px]'>
          <AkhbarLahzeNegar data={DataTest}/>
        </Grid>
        </>
      }/>
      </Grid>
    </Grid>
    </>
   
  )
}


 
export default RasadNegar
 