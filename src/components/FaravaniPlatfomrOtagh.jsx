import { Grid } from '@mui/material'
import React, { useState } from 'react'
import FilterZaman from './FilterZaman'
import { ColorOtaghVaziatLight } from '../Theme'
import { FaravaniPlatformEmroz , FaravaniPlatformHafte } from '../dataStatic/FaravaniPlatform'
import PieChartMain from './Charts/PieChartMain'
function FaravaniPlatfomrOtagh() {


    const [platfomrEmroz] = useState(FaravaniPlatformEmroz)
    const [platfomrHafte] = useState(FaravaniPlatformHafte)
    const [zaman , setZamam] = useState('امروز')
const handleData = ()=>{
    if(zaman == 'امروز') {
        return ( 
            platfomrEmroz
        )
    }else if(zaman == 'هفته') {
       return (
        platfomrHafte
       )
    }else {
      retrun (
        
      )
    }
}
const handleZaman = (e)=> {
    setZamam(e.target.value)
    console.log(e.target.value)
}

  return (
    <>
    <Grid container>
       

       <Grid lg={6} className='flex justify-start align-middle pt-[20px] items-center p-3'>
     <FilterZaman value={zaman} onChange={handleZaman}  color={ColorOtaghVaziatLight}/>
       </Grid >
       </Grid> 
          <div className=''>
           <PieChartMain  data={handleData()} height={190}/>
          </div>
    </>
  )
}

export default FaravaniPlatfomrOtagh
