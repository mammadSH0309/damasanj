import React, { lazy, Suspense, useEffect, useState } from 'react'
import {Grid } from '@mui/material'
import PaperCharts from '../../../components/PaperCharts'
import ShabakeSlider from '../../../components/ShabakeSlider'
import { ColorBarnameOstaniLight, ColorBarnameOstaniMain } from '../../../Theme'
import AmarKoliRasadBarnameOstani from '../../../components/AmarKoliRasadBarnameOstani'
import BarChartHorizonAll from '../../../components/Charts/BarChartHorizonAll'
import BarColumnChartAll from '../../../components/Charts/BarColumnChartAll'
import Programs from '../../../components/sedasima/operators/Programs'
import LineChartAll from '../../../components/LineChartAll'
import PieChartAll from '../../../components/Charts/PieChartAll'
import useApiParams from '../../../store'
import ClearFilterBarnameOstani from '../../../components/Filter/ClearFilterBarnameOstani'
import AbrEbarat from '../../../components/Charts/AbrEbarat'
import FilterRasadBarnameOstani from '../../../components/Filter/FilterRasadBarnameOstani'

function RasadOnlineOstaniPage() {

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



    const urls = {
        amar : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/amar/',
        bestChannel : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/bestchannel/',
        bestProgram : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/bestprograme/',
        programs : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/programes/',
        bestMedia : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/bestmedia/',
        ravand : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/ravandenteshar/',
        platform : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/platform/',
        channels : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/channels/',
        abr : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/abr/', 
        shabake : 'http://10.32.227.125:8000/home/image/all/'
      
    }
    
  return (
    <Grid container className='p-2 px-[18px] pt-2 '>
       <div className='absolute bottom-16 left-4 z-50'>
        <FilterRasadBarnameOstani/>
      </div>
      <div className='absolute bottom-2 left-4 z-50'>
      <ClearFilterBarnameOstani/> 
      </div>
    <Grid lg={12}>   
  
    </Grid>
    <Grid container className='flex ' lg={12}>    
            <Grid className='p-1     ' lg={9}>         
            <ShabakeSlider url={urls.shabake} param={{'sh' : 'ostani', 'ti' : ''}}/>
            </Grid>         
            <Grid className='p-2' lg={3}>
            <PaperCharts bgtitle={ColorBarnameOstaniMain} height={'h-[240px]'} title={'آمار های کلی'}
            chart={<>
           <div className='flex justify-center items-center h-[240px]'>
           <AmarKoliRasadBarnameOstani  url={urls.amar}/>
           </div>
            </>}
            />
            </Grid>
                <Grid container lg={12}>
                <Grid className='' lg={3}>
                    <Grid className='p-2' >
                    <PaperCharts bgtitle={ColorBarnameOstaniMain}  title={'ابر عبارات'} height={'h-[347px]'} 
                    chart={
                        <>
                       
                        { <AbrEbarat url={urls.abr} height={310} />}
                        
                          
                        </>
                    }
                    />
                    </Grid>
                    <Grid className='p-2' >
                    <PaperCharts  bgtitle={ColorBarnameOstaniMain}  title={'برترین شبکه ها'} height={'h-[718px]'} 
                    chart={
                        <>
                           <Programs url={urls.channels} height={'h-[670px]'}/>
                        </>
                    }
                    />
                    </Grid>
                 
                </Grid>
                <Grid className='p-2' lg={9}>
                    <PaperCharts  bgtitle={ColorBarnameOstaniMain}
                    height={'h-[350px]'} 
                    title={'برترین برنامه ها   '}
                    chart={
                        <>                  
                        <BarColumnChartAll marginRight={50} marginTop={50}  color={ColorBarnameOstaniLight} url={urls.bestProgram} height={310}/>                       
                        </>

                }
                    />
                     <Grid  className='pt-4 '  container lg={12}>
                   
                   <Grid className='pl-4' lg={6}>
                   <PaperCharts bgtitle={ColorBarnameOstaniMain} title={'رسانه های برتر'} height={'h-[350px]'}  chart={
                    <>
                      {/* <RasaneBartar/>  */}
                      <BarChartHorizonAll  color={ColorBarnameOstaniLight}  url={urls.bestMedia} height={310} marginTop={20}/> 
                    </>
                   }/>
                   </Grid>
                   <Grid className='' lg={6}>
                   <PaperCharts bgtitle={ColorBarnameOstaniMain} title={'برنامه'} height={'h-[350px]'} chart={ 
                     <Grid  >
                          <Grid className=' w-full ' lg={12}>
                     
                          <Programs url={urls.programs} height={'h-[292px]'} width={490}/>
                     </Grid>                  
                 </Grid>
                   } />
                 
                   </Grid> 
                   <Grid className='pt-4' container lg={12}>
                   <Grid className='pl-4' lg={4}>
                   <PaperCharts bgtitle={ColorBarnameOstaniMain}  title={'سهم پلتفرم'} height={'h-[350px]'} chart={
                    <PieChartAll url={urls.platform} param={params}  height={280}/>
                     }/>
                   </Grid>
                   <Grid className='' lg={8}>
                   <PaperCharts bgtitle={ColorBarnameOstaniMain} title={'روند ها'} height={'h-[350px]'}
                   chart={
                    <>
                    <LineChartAll color={ColorBarnameOstaniLight} url={urls.ravand} height={300} type={'areaspline'}/> 
                    </>
                   }
                   />
                   </Grid>
                   </Grid>
               </Grid>
                </Grid>
               
                </Grid>
                
             
    </Grid>
    </Grid>
  )
}

export default RasadOnlineOstaniPage



