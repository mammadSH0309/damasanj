import React, { useEffect} from 'react'
import {
    ColorBarnameOstaniMain ,
    ColorBarnameOstaniLight,
}
    from '../../../Theme'
import Amar from '../../../components/sedasima/operators/Amar'
import { Grid } from '@mui/material'
import PaperCharts from '../../../components/PaperCharts'
import Programs from '../../../components/sedasima/operators/Programs'
import DadeNama from '../../../components/sedasima/operators/DadeNama'
import BarColumnChartAll from '../../../components/Charts/BarColumnChartAll'
import PieChartAll from '../../../components/Charts/PieChartAll'
import useApiParams from '../../../store'
import ClearFilterButton from '../../../components/ClearFilterButton'
import FilterRasadBarnameOstani from '../../../components/Filter/FilterRasadBarnameOstani'
import ClearFilterBarnameOstani from '../../../components/Filter/ClearFilterBarnameOstani'

function MasrafOperatorOstaniPage() {
   
 
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
        'ti' : '', 
        'user' : '',
        'ex' : '', 
        'poli' : '',
        'tag' : '',
          'reg' : 'استانی', 
          'ch' : '',
          'plat' : '',
          'prog' : '',
          'day' : '180'
    })
}, [])




  return (
    <Grid className='p-2 px-[18px] pt-2 ' container>
         <div className='absolute bottom-16 left-4 z-50'>
        <FilterRasadBarnameOstani/>
      </div>
      <div className='absolute bottom-2 left-4 z-50'>
      <ClearFilterBarnameOstani/> 
      </div>
    <Grid container columns={12} className='h-fit ' lg={6}>
    <Grid item  lg={6} className='p-2  ' >
    <PaperCharts bgtitle={ColorBarnameOstaniMain}  height={'h-[405px]'} title={'برنامه ها'} chart={
           <Programs url={urls.programs} height={'h-[355px]'}  color={ColorBarnameOstaniLight} />
        }/>
      

    </Grid>
    <Grid item className='' lg={6}>
    <Grid item className='p-2'>
    <PaperCharts bgtitle={ColorBarnameOstaniMain} height={'h-[194px]'} title={'آمار کلی'} chart={
           <Amar url={urls.amar} color={ColorBarnameOstaniLight} />
        } />
    </Grid>
        <Grid  className='w-full p-2 '>
        <PaperCharts bgtitle={ColorBarnameOstaniMain}  height={'h-[195px]'} title={'مصرف سالانه'} chart={
           <>
           <PieChartAll height={150} url={urls.masrafSalane} color={ColorBarnameOstaniLight} />
           </>
        }/>
       
    </Grid>
  
    </Grid>

  
    </Grid>
    <Grid className='p-2' lg={6}>
        <PaperCharts bgtitle={ColorBarnameOstaniMain}  height={'h-[406px]'} title={'داده نما'} chart={
            <DadeNama color={ColorBarnameOstaniLight} url={urls.dadenama}  />
        }/>

    </Grid>
    <Grid  className='' container lg={12}>
        <Grid className='p-2' lg={4}>
            <PaperCharts bgtitle={ColorBarnameOstaniMain}  height={'h-[344px]'} title={'رشد ماهانه'} chart={
                <>
                
                </>
            }/>
     
        </Grid>

        <Grid className='p-2' lg={4}>
            <PaperCharts bgtitle={ColorBarnameOstaniMain}  height={'h-[344px]'} title={'برترین برنامه ها'} chart={
              <>
       
              <BarColumnChartAll marginRight={50} marginTop={50} color={ColorBarnameOstaniLight} height={300} url={urls.bestProgram}/>
              </>
            } />
      
        </Grid>

        <Grid className='p-2' lg={4}>
            <PaperCharts bgtitle={ColorBarnameOstaniMain}  height={'h-[344px]'} title={'برترین شبکه ها '} chart={<>
            <BarColumnChartAll marginRight={50} marginTop={50} color={ColorBarnameOstaniLight} height={300} url={urls.bestChannel}/>
            </>}/>
  
        </Grid>
    </Grid>
</Grid>
  )
}

export default MasrafOperatorOstaniPage
