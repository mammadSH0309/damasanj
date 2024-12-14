import {Grid} from '@mui/material'
import React, { useEffect } from 'react'
import LineChartAll from '../../../components/LineChartAll'
import HeatMapChart from '../../../components/Charts/HeatMapChart'
import PaperCharts from '../../../components/PaperCharts'
import { ColorOtaghVaziatLight, ColorOtaghVaziatMain } from '../../../Theme'
import AmarKoli from '../../../components/AmarKoli'
import MasadighMoj from '../../../components/MasadighMoj'
import { RavandEnteshar } from '../../../dataStatic/RavandEntesharMoj'
import BarColumnChartAll from '../../../components/Charts/BarColumnChartAll'
import useApiParams from '../../../store'
import PostHayeBartarOtagh from '../../../components/PostHayeBartarOtagh'
import PieChartAll from '../../../components/Charts/PieChartAll'
import GhotbNama from '../../../components/GhotbNama'

import BarChartStackedAll from '../../../components/BarChartStackedAll'
import Programs from '../../../components/sedasima/operators/Programs'
import ClearFilterOtaghVaziat from '../../../components/Filter/ClearFilterOtaghVaziat'
import FilterModalOtaghVaziat from '../../../components/Filter/FilterModalOtaghVaziat'
import AbrEbarat from '../../../components/Charts/AbrEbarat'
function OtaghVaziatPage() {

 
    const {params , setParams , initParams} = useApiParams()

    useEffect(()=>{
        initParams({
            'ch' : '',
            'prog' : '',
            'ti' : '',
            'reg' : '',
            'tag' : '',
            'user' : "",
            'plat' : "",
            'ex' : "",
            'top' : "",
            'poli' : "",
            'day' : "30",
        })
    },[])
    const urls = {
        amar : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/amar/', 
        konesh : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/konesh/',
        bestpost : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/bestpost/',
        groups : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/groups/',
        ravand : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/ravand/',
        platform : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/platform/',
        tasvir : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/tasvir/',
        masadigh : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/mesdag/',
        ehsas : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/ehsas/',
        jaryan : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/jaryan/',
        abr : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/abr/',
        ghotb : 'http://10.32.227.125:8000/rasadsedasima/vazeeyat/ghotb/'
    }

  return (
    <Grid container className=' px-[18px] pt-2 pb-2   '>
         <div className='absolute z-10 bottom-16 left-4'>
            <FilterModalOtaghVaziat/>
        </div>
        <div className='absolute z-10  bottom-2 left-4 '>
            <ClearFilterOtaghVaziat/>
        </div>
        <Grid item sm={12} md={3} lg={3} className=' px-2 '>
            <Grid item className='pt-2'>    
            <PaperCharts bgtitle={ColorOtaghVaziatMain} title={'آمار های کلی'} height={'h-[203px]'} 
            chart={
                <>        
                 <AmarKoli url={urls.amar}/>
                </>
            } />
            </Grid>         
            <Grid className='pt-4'>
             <PaperCharts bgtitle={ColorOtaghVaziatMain} title={'فراوانی جریانات'} height={'h-[296px]'} 
             chart={
                <>

                 <PieChartAll  url={urls.jaryan} height={'220px'}/>
                </>
             } />           
            </Grid>
            <Grid className='pt-4'  >
            <PaperCharts bgtitle={ColorOtaghVaziatMain} height={'h-[294px]'} title={'فراوانی پلتفرم'} 
            chart={
                <>
               
                <PieChartAll url={urls.platform} height={"240px"} />         
                </>
            }/>           
            </Grid>
        </Grid>
        <Grid item className='' container sm={12} md={9} lg={9}>
         <Grid lg={4} item className='pt-2 h-[420px]  px-2 '>
            <Grid>
            <PaperCharts bgtitle={ColorOtaghVaziatMain}  height={'h-[519px]'} title={'مصادیق موج'} chart={
                <>
                <MasadighMoj url={urls.masadigh}/>
                </>
            }/>       
            </Grid>
         </Grid>
         <Grid   className='p-1  mr-auto    ' lg={8}>
            <Grid container className=''>
            <Grid item className='p-1' lg={8}>
                <PaperCharts bgtitle={ColorOtaghVaziatMain} height={'h-[297px]'} title={'تصویر چهره'} 
                chart={<>
   
                 <Programs height={'h-[265px]'} url={urls.tasvir}/>
                 </>
                 }
                />       
            </Grid>       
            <Grid item className='p-1 px-2   ' lg={4}>
                <PaperCharts bgtitle={ColorOtaghVaziatMain} height={'h-[297px]'} title={'قطب نما'} chart={
                    <>
                    <GhotbNama url={urls.ghotb}/>
                    </>

                }/>     
            </Grid>
            </Grid>
            <Grid lg={12}  className=' p-1 mr-auto pt-2  ' >
                <PaperCharts bgtitle={ColorOtaghVaziatMain} height={'h-[207px]'} title={'کنشگران جریان ساز'} 
                chart={
                    <>
                    <BarColumnChartAll url={urls.konesh} color={ColorOtaghVaziatLight} 
                      colorBar={'#e9cbcb'}
                      marginTop={50} marginRight={50} marginLeft={60}  height={173}  padding={0.42}
                    />
                    </>      
                }
                />     
            </Grid>
       
         </Grid>
         <Grid container   className=''>
            <Grid className=' pt-1 px-2 ' lg={4}>
                <PaperCharts bgtitle={ColorOtaghVaziatMain} height={'h-[300px]'} title={'فراوانی گروه ها'} 
                chart={
                    <>
                    <PieChartAll height={'260px'} url={urls.groups}/>
                    </>
                }
                />      
            </Grid>

            <Grid className='px-2 pt-1'  lg={8}>
            <PaperCharts bgtitle={ColorOtaghVaziatMain} height={'h-[300px]'} title={'ابر عبارات'} chart={
                <>
                <div className='z-auto'>
           <Grid container>

           </Grid>
           <Grid>
           <AbrEbarat url={urls.abr} height={260} />
           </Grid>
           </div>
            </>
        }/>
          
            </Grid>
        </Grid>
        </Grid>
        <Grid container  lg={12} className='p-1 px-2'>
            <Grid className=' pl-2 pt-2' lg={6}>
            <PaperCharts bgtitle={ColorOtaghVaziatMain} height={'h-[250px]'} title={'فراوانی احساسات'} 
            chart={
                <>
                <BarChartStackedAll marginRight={50} marginTop={110} url={urls.ehsas}  type={'column'} height={'210px'} />
                </> 
            }/>
            </Grid>
            <Grid className='pr-2 pt-2'  lg={6}>
                <PaperCharts bgtitle={ColorOtaghVaziatMain} height={'h-[250px]'} title={'روند انتشار '} chart={
                    <>
                       <LineChartAll url={urls.ravand} color={ColorOtaghVaziatLight}  data={RavandEnteshar} type={'areaspline'}  height={210}/> 
                    </>
                }/>
            </Grid>

        </Grid>
        <Grid item className='px-2 pt-2' lg={6}>
            <PaperCharts bgtitle={ColorOtaghVaziatMain} height={'h-[350px]'} title={'فراوانی موضوعات'}
             chart={
                <>
                <Grid container columns={12} className='items-center'> 
                </Grid>
                <div>
  <HeatMapChart
  catX={
    [
          "شنبه",
           "یک شنبه",
          "دو شنبه",
           "سه شنبه",
           "چهار شنبه",
        
   
         ]
  }
  catY={
    ["ساترا", "سریال", "مدیران", "فضای مجازی", "حواشی"]
  }
  height={290}
  minColor={'#FFFFFF'} maxColor={'#770f0f'} />
                </div>
                </>
            }/>
        </Grid>
        <Grid className='px-2 pt-2 ' lg={6}> 
        <PaperCharts bgtitle={ColorOtaghVaziatMain} height={'h-[352px]'} title={'پست های برتر'} chart={
            <>
             <Grid container className='items-center  overflow-scroll no-scrollbar' >
            <Grid className='pl-4   py-2 overflow-hidden no-scrollbar' lg={6}>              
                </Grid>
                <Grid className='h-full' lg={12}>
            <div className='space-y-2 h-[300px]  w-[95%] mr-4   '>
            <PostHayeBartarOtagh url={urls.bestpost} height={'h-[290px]'}/>
            </div>
                </Grid>         
        </Grid>
            </>
        } />


        </Grid>
    </Grid>
    
  )
}

export default OtaghVaziatPage

