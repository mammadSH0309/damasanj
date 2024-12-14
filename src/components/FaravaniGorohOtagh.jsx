import { Grid } from '@mui/material'
import React from 'react'
import FilterZaman from './FilterZaman'
import { ColorOtaghVaziatLight } from '../Theme'
import RadialBar from './Charts/RadialBar'
import {FaravaniGoroh} from '../dataStatic/FaravaniGoroh'
function FaravaniGorohOtagh() {
  return (
    <>
    <Grid container>
            <Grid lg={6} className='flex justify-start items-center p-5'>
      <FilterZaman color={ColorOtaghVaziatLight}/>
        </Grid > 

        <Grid lg={6} className='flex justify-end align-middle pt-[20px] items-center p-5'>
        <FilterZaman color={ColorOtaghVaziatLight}/>
        </Grid >
                </Grid> 
           <div className=''>
            <RadialBar data={FaravaniGoroh} height={190} />
           </div>
    </>
  )
}

export default FaravaniGorohOtagh
