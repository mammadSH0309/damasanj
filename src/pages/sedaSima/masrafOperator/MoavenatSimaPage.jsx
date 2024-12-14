
import {Grid} from '@mui/material'
import React, { useEffect } from 'react'
import PaperCharts from '../../../components/PaperCharts'
import { ColorMasrafOperatorLight, ColorMasrafOperatorMain } from '../../../Theme'
import useApiParams from '../../../store'
import Programs from '../../../components/sedasima/operators/Programs'
import PieChartAll from '../../../components/Charts/PieChartAll'
import DadeNama from '../../../components/sedasima/operators/DadeNama'
import BarColumnChartAll from '../../../components/Charts/BarColumnChartAll'
import Amar from '../../../components/sedasima/operators/Amar'
import ClearFilterButton from '../../../components/ClearFilterButton'
import FilterRasadBaztabTV from '../../../components/Filter/FilterRasadBaztabTV'
function MoavenatSimaPage() {
  const urls = {
    amar : 'http://10.32.227.125:8000/rasadsedasima/oprator/amar/',
    bestChannel : 'http://10.32.227.125:8000/rasadsedasima/oprator/bestchannel/',
    bestProgram : 'http://10.32.227.125:8000/rasadsedasima/oprator/bestprograme/',
    programs : 'http://10.32.227.125:8000/rasadsedasima/oprator/programes/',
    dadenama : 'http://10.32.227.125:8000/rasadsedasima/oprator/dadehnama/',
    masrafSalane : 'http://10.32.227.125:8000/rasadsedasima/oprator/masraf/',
}
  const {params , setParams , initParams} = useApiParams()

  useEffect(()=>{
    initParams({  
           'reg' : 'سیما',
            'ti' : '',
            'tag' : '', 
          'ch' : '',
          'plat' : '',
          'day' : '365',
          'prog' : ''
      })
  }, [])
  
 


  return (
    <Grid className='p-2 px-[18px] pt-2 ' container>
    <div className='absolute bottom-2 left-4 z-10'>
    <ClearFilterButton/>
    </div>
    <div className='absolute bottom-16 left-4 z-10'>
    <FilterRasadBaztabTV/>
    </div>
    <Grid container columns={12} className='h-fit ' lg={6}>
    <Grid  lg={6} className='p-2  ' >
    <PaperCharts bgtitle={ColorMasrafOperatorMain}  height={'h-[405px]'} title={'برنامه ها'} chart={
           <Programs url={urls.programs} height={'h-[355px]'}  color={ColorMasrafOperatorLight} />
        }/>
      

    </Grid>
    <Grid className='' lg={6}>
    <Grid className='p-2'>
    <PaperCharts bgtitle={ColorMasrafOperatorMain} height={'h-[194px]'} title={'آمار کلی'} chart={
           <Amar url={urls.amar} color={ColorMasrafOperatorLight} />
        } />
    </Grid>
        <Grid  className='w-full p-2 '>
        <PaperCharts bgtitle={ColorMasrafOperatorMain}  height={'h-[195px]'} title={'مصرف سالانه'} chart={
           <>
           <PieChartAll height={150} url={urls.masrafSalane} color={ColorMasrafOperatorLight} />
           </>
        }/>
       
    </Grid>
  
    </Grid>

  
    </Grid>
    <Grid className='p-2' lg={6}>
        <PaperCharts bgtitle={ColorMasrafOperatorMain}  height={'h-[406px]'} title={'داده نما'} chart={
            <DadeNama  url={urls.dadenama} color={ColorMasrafOperatorLight} />
        }/>

    </Grid>
    <Grid  className='' container lg={12}>
        <Grid className='p-2' lg={4}>
            <PaperCharts bgtitle={ColorMasrafOperatorMain}  height={'h-[344px]'} title={'رشد ماهانه'} chart={
                <>
                </>
            }/>
     
        </Grid>

        <Grid className='p-2' lg={4}>
            <PaperCharts bgtitle={ColorMasrafOperatorMain}  height={'h-[344px]'} title={'برترین برنامه ها'} chart={
              <>
       
              <BarColumnChartAll color={ColorMasrafOperatorLight} height={300} url={urls.bestProgram}/>
              </>
            } />
      
        </Grid>

        <Grid className='p-2' lg={4}>
            <PaperCharts bgtitle={ColorMasrafOperatorMain}  height={'h-[344px]'} title={'برترین شبکه ها '} chart={<>
            <BarColumnChartAll color={ColorMasrafOperatorLight} height={300} url={urls.bestChannel}/>
            </>}/>
  
        </Grid>
    </Grid>
</Grid>


  )
}

export default MoavenatSimaPage
