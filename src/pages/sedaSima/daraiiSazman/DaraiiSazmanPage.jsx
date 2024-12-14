import { Grid} from '@mui/material'
import React, { useEffect} from 'react'
import PaperCharts from '../../../components/PaperCharts'
import PieChartAll from '../../../components/Charts/PieChartAll'
import useApiParams from '../../../store'
import Programs from '../../../components/sedasima/operators/Programs'
import DadeNamaDaraiiSazman from '../../../components/DadeNamaDaraiiSazman'
import LineChartAll from '../../../components/LineChartAll'
import BarColumnChartAll from '../../../components/Charts/BarColumnChartAll'
import FilterDaraiiSazman from '../../../components/Filter/FilterDaraiiSazman'
import ClearFilterDaraiiSazman from '../../../components/Filter/ClearFilterDaraiiSazman'

function DaraiiSazmanPage() {

      

  
    const {params , setParams , initParams} = useApiParams()

    useEffect(()=>{
        initParams(
            {  
            'ch' : '',
            'tag' : '',
            'poli' : '',
            'top' : '',
            'ex' : '',
            'reg' : '',
            'plat' : '',
            'user' : '',
            'prog' : '',
            'ti' : '',
            'day' : '365'
        }
    )
    }, [])
      
  const urls = {
    amar : 'http://10.32.227.125:8000/rasadsedasima/darayee/amar/',
    platform : 'http://10.32.227.125:8000/rasadsedasima/darayee/platform/',
    faravani : 'http://10.32.227.125:8000/rasadsedasima/darayee/faravani/',
    programs : 'http://10.32.227.125:8000/rasadsedasima/darayee/programes/',
    channels : 'http://10.32.227.125:8000/rasadsedasima/darayee/channels/',
    besttitle : 'http://10.32.227.125:8000/rasadsedasima/darayee/besttitle/',
    ravandview : 'http://10.32.227.125:8000/rasadsedasima/darayee/ravandview/',
    ravandenteshar : 'http://10.32.227.125:8000/rasadsedasima/darayee/ravandenteshar/',
}

  return (
   <>
   <Grid container className=''>
    
   <div className='absolute bottom-2 left-4'>
      <ClearFilterDaraiiSazman/>
      </div>
      <div className='absolute bottom-16 left-4'>
        <FilterDaraiiSazman/>
      </div>
   <Grid container className='px-2  '>
    <Grid lg={8}>
        <Grid container>
            <Grid lg={4}>
            <Grid item className='p-2'> 
            <PaperCharts  bgtitle={'bg-[#d9107f]'}  title={'فراوانی سال'} height={'h-[350px]'} chart={
                <>
               <PieChartAll url={urls.faravani} height={'259px'}/>
                </>
            }/>
            </Grid>

            </Grid>
            <Grid lg={8}>
            <Grid item className='p-2'>
            <PaperCharts  bgtitle={'bg-[#d9107f]'}  height={'h-[350px]'} title={'نمای برنامه ها'}  
    chart={
        <>
        <Programs url={urls.programs} height={'h-[317px]'}/>
        </>
    }

    />
            </Grid>
            </Grid>
            <Grid lg={4}>
            <Grid item className='p-2'> 
            <PaperCharts  bgtitle={'bg-[#d9107f]'}  title={'فراوانی پلتفرم'} height={'h-[300px]'} chart={
                <>
                  <PieChartAll url={urls.platform}  height={240} marginTop={30}/>
                </>
            }/>

            </Grid>

            </Grid>
            <Grid lg={8}>
            <Grid item className='p-2'>
            <PaperCharts bgtitle={'bg-[#d9107f]'}  height={'h-[300px]'} title={'محتوای پربازدید'} chart={
        <>
        <BarColumnChartAll url={urls.besttitle} height={'260px'} marginRight={50} marginTop={50}/>
        </>
       } />
            </Grid>
            </Grid>
            <Grid lg={6}>
            <Grid item className='p-2'> 
            <PaperCharts bgtitle={'bg-[#d9107f]'}  height={'h-[300px]'} title={'روند بازدید'} chart={
        <>
        <LineChartAll url={urls.ravandview} marginRight={50} marginTop={50} height={'260px'}/>
        </>
     }/> 


            </Grid>

            </Grid>
            <Grid lg={6}>
            <Grid item className='p-2'>
            <PaperCharts bgtitle={'bg-[#d9107f]'}  height={'h-[300px]'} title={'روند انتشار'} chart={
        <>
        <LineChartAll url={urls.ravandenteshar} marginRight={50} marginTop={50} height={'260px'}/>
        </>
     }/> 

            </Grid>
            </Grid>
        </Grid>
    </Grid>
    <Grid lg={4}>
    <Grid  className='p-2  '  > 
    <PaperCharts bgtitle={'bg-[#d9107f]'} height={'h-[350px]'} title={'داده نما'}
    chart={
        <>
        <DadeNamaDaraiiSazman url={urls.amar}/>
        </>
    }
    />
    </Grid>
    <Grid className='p-2   ' >
    <PaperCharts bgtitle={'bg-[#d9107f]'}  height={'h-[617px]'} title={'نمای کانال ها'} chart={
        <>
        <Programs url={urls.channels} height={'h-[585px]'}/>
        </>
     }/> 
   
    </Grid>

    </Grid>
   </Grid>
   </Grid>
   </>
  )
}

export default DaraiiSazmanPage


