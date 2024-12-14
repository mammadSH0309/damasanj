import React, { useEffect, useLayoutEffect} from 'react'
import {
    ColorBaztabTVMain, ColorBaztabTVLight}
    from '../../../Theme'
    import PieChartAll from '../../../components/Charts/PieChartAll';
import Amar from '../../../components/sedasima/operators/Amar'
import { Grid } from '@mui/material'
import PaperCharts from '../../../components/PaperCharts'
import Programs from '../../../components/sedasima/operators/Programs'
import DadeNama from '../../../components/sedasima/operators/DadeNama'
import BarColumnChartAll from '../../../components/Charts/BarColumnChartAll';
import useApiParams from '../../../store';
import ClearFilterButton from '../../../components/ClearFilterButton';
import FilterRasadBaztabTV from '../../../components/Filter/FilterRasadBaztabTV';
function MasrafeOperatorPage() { 
     
  const urls = {
    amar : 'http://10.32.227.125:8000/rasadsedasima/oprator/amar/',
    bestChannel : 'http://10.32.227.125:8000/rasadsedasima/oprator/bestchannel/',
    bestProgram : 'http://10.32.227.125:8000/rasadsedasima/oprator/bestprograme/',
    programs : 'http://10.32.227.125:8000/rasadsedasima/oprator/programes/',
    dadenama : 'http://10.32.227.125:8000/rasadsedasima/oprator/dadehnama/',
    masrafSalane : 'http://10.32.227.125:8000/rasadsedasima/oprator/masraf/',
}

const {params , setParams, initParams} = useApiParams()

useEffect(()=>{
    initParams({  
        'reg' : 'سیما', 
        'ch' : '',
        'ti' : '',
        'user' : '',
        'ex' : '',
        'top' : '',
        'poli' : '',
        'tag' : '',
        'plat' : '',
        'day' : '180',
        'prog' : ''
    })
}, [])




    return (
        <Grid className='p-2 px-[18px] pt-2 ' container>
        <div className='absolute left-4 bottom-2 z-10'>
        <ClearFilterButton/>
        </div>
        <div className='absolute bottom-16 z-10 left-4'>
        <FilterRasadBaztabTV/>
        </div> 
        <Grid container columns={12} className='h-fit ' lg={6}>
        <Grid  lg={6} className='p-2  ' >
        <PaperCharts bgtitle={ColorBaztabTVMain}  height={'h-[405px]'} title={'برنامه ها'} chart={
               <Programs url={urls.programs} height={'h-[345px]'}  color={ColorBaztabTVLight} />
            }/>
          
    
        </Grid>
        <Grid className='' lg={6}>
        <Grid className='p-2'>
        <PaperCharts bgtitle={ColorBaztabTVMain} height={'h-[194px]'} title={'آمار کلی'} chart={
               <Amar  url={urls.amar} color={ColorBaztabTVLight} />
            } />
        </Grid>
            <Grid  className='w-full p-2 '>
            <PaperCharts bgtitle={ColorBaztabTVMain}  height={'h-[195px]'} title={'مصرف سالانه'} chart={
               <>
               <PieChartAll  height={150} url={urls.masrafSalane} color={ColorBaztabTVLight} />
               </>
            }/>
           
        </Grid>
      
        </Grid>
    
      
        </Grid>
        <Grid className='p-2' lg={6}>
            <PaperCharts bgtitle={ColorBaztabTVMain}  height={'h-[406px]'} title={'داده نما'} chart={
                <DadeNama color={ColorBaztabTVLight} url={urls.dadenama}  />
            }/>
    
        </Grid>
        <Grid  className='' container lg={12}>
            <Grid className='p-2' lg={4}>
                <PaperCharts  bgtitle={ColorBaztabTVMain}  height={'h-[344px]'} title={'رشد ماهانه'} chart={
                    <>
                    </>
                }/>
         
            </Grid>
    
            <Grid className='p-2' lg={4}>
                <PaperCharts bgtitle={ColorBaztabTVMain}  height={'h-[344px]'} title={'برترین برنامه ها'} chart={
                  <>
           
                  <BarColumnChartAll marginRight={50} marginTop={50} color={ColorBaztabTVLight} height={300} url={urls.bestProgram}/>
                  </>
                } />
          
            </Grid>
    
            <Grid className='p-2' lg={4}>
                <PaperCharts bgtitle={ColorBaztabTVMain}  height={'h-[344px]'} title={'برترین شبکه ها '} chart={<>
                <BarColumnChartAll marginRight={50} marginTop={50} color={ColorBaztabTVLight} height={300} url={urls.bestChannel}/>
                </>}/>
      
            </Grid>
        </Grid>
    </Grid>
  )
}

export default MasrafeOperatorPage
