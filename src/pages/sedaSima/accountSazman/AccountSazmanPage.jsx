import {Chip, Grid, Stack, Switch, Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import PaperCharts from '../../../components/PaperCharts'
import { LuEye } from "react-icons/lu";
import LineChartMulti from '../../../components/Charts/LineChartMulti'
import useApiParams from '../../../store'
import Programs from '../../../components/sedasima/operators/Programs'
import BarColumnChartAll from '../../../components/Charts/BarColumnChartAll'
import PieChartAll from '../../../components/Charts/PieChartAll';
import FilterAccountSazman from '../../../components/Filter/FilterAccountSazman';
import LineChartAll from '../../../components/LineChartAll'
import AmarAccountSazman from '../../../components/AmarAccountSazman';
import ClearFilterButton from '../../../components/ClearFilterButton';
import _ from 'lodash';
function AccountSazmanPage() {

    const urls = {
        accountList : 'http://10.32.227.125:8000/rasadsedasima/account/list/',
        bestChannel : 'http://10.32.227.125:8000/rasadsedasima/account/bestchannel/',
        bestProg : 'http://10.32.227.125:8000/rasadsedasima/account/bestprograme/' ,
        platform : 'http://10.32.227.125:8000/rasadsedasima/account/platform/',
        ravand : 'http://10.32.227.125:8000/rasadsedasima/account/ravandenteshar/',
        amar : 'http://10.32.227.125:8000/rasadsedasima/account/amar/', 
        region : 'http://10.32.227.125:8000/rasadsedasima/account/region/',
    }

    const {params , setParams , initParams} = useApiParams()
    
   
 
    useEffect(()=>{
        initParams({  
            'reg' : '', 
            'ti' : '', 
            'user' : '', 
            'ex' : '',
            'top' : '',
            'poli' : '', 
            'tag' : '',   
            'ch' : '',
            'plat' : '',
            'prog' : '',
            'ord' : 'count'
        })
    }, [])


  return (
   <Grid className='px-[18px] pt-2' container>
 
      <div className='absolute bottom-2 left-4'>
      <ClearFilterButton/>
      </div>
      <div className='absolute bottom-16 left-4'>
        <FilterAccountSazman/>
      </div>
    <Grid className='p-2 space-y-4'  lg={4}>
    <PaperCharts bgtitle={'bg-[#0715d3]'} title={'شبکه های برتر'}  height={'h-[350px]'}  chart={
            <>
        <BarColumnChartAll color={'#c8e4fb'}
      
         height={'280px'} url={urls.bestChannel} marginRight={50} marginTop={50}/>
            </>
        }/>


        
                <PaperCharts bgtitle={'bg-[#0715d3]'}  title={' برنامه های برتر'}  height={'h-[408px]'}  chart={
            <>
     
        <BarColumnChartAll color={'#c8e4fb'}  height={'360px'} url={urls.bestProg} marginRight={50} marginTop={50}/>
            </>
        }/>
    </Grid>
    <Grid  container lg={8} >

        <Grid className='p-2' lg={12}>
        <PaperCharts bgtitle={'bg-[#0715d3]'} title={'اکانت های سازمان'} height={'h-[350px]'} chart={
            <>
            <Programs url={urls.accountList} height={'h-[318px]'}/>
            </>
        }/>
        </Grid>
        <Grid  lg={12} className=' flex      ' container>
            <Grid container className='p-2'>
            <AmarAccountSazman  url={urls.amar}/>
            </Grid>
            <Grid className=' p-2' lg={4}>
            <PaperCharts bgtitle={'bg-[#0715d3]'} height={'h-[290px]'} title={'فراوانی اکانت های هر بخش'}   chart={
            <>    
            <PieChartAll  height={'250px'} url={urls.region} param={{
                'reg' : '', 
                'ch' : '',
                'plat' : '',
                'prog' : '',
                'ord' : 'count'
                }}  
           />

            </>
        }/>
            </Grid>
            <Grid className=' p-2' lg={4}>
            <PaperCharts bgtitle={'bg-[#0715d3]'} height={'h-[290px]'} title={'فراوانی پلتفرم برحسب تعداد اکانت '}   chart={
            <>    
            <PieChartAll  height={'250px'} url={urls.platform} param={{
                'reg' : '', 
                'ch' : '',
                'plat' : '',
                'prog' : '',
                'ord' : 'count'
                }}  
           />

            </>
        }/>
            </Grid>
            <Grid className=' p-2' lg={4}>
            <PaperCharts bgtitle={'bg-[#0715d3]'}  height={'h-[290px]'} title={'روند ایجاد اکانت'} chart={
            <>
                <LineChartAll url={urls.ravand} marginTop={100} marginRight={50}  type={'areaspline'} color={'#c8e4fb'}  height={'250px'} /> 
                </>
            }/>
            </Grid>
            
        </Grid>
    </Grid>
   </Grid>
  )
}

export default AccountSazmanPage
