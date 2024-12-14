import { Avatar, Grid } from '@mui/material'
import React, { useEffect } from 'react'

import LineChartAll from '../../../components/LineChartAll'


import PaperCharts from '../../../components/PaperCharts'
import ClearFilterOtaghVaziat from '../../../components/Filter/ClearFilterOtaghVaziat'

import PieChartAll from '../../../components/Charts/PieChartAll'
import Programs from '../../../components/sedasima/operators/Programs'
import PostHayeBartarOtagh from '../../../components/PostHayeBartarOtagh'
import BarColumnChartAll from '../../../components/Charts/BarColumnChartAll'
import AmarTasvirChehre from '../../../components/AmarTasvirChehre'
import DamaSanjTasvirChehre from '../../../components/DamaSanjTasvirChehre'
import AvatarListTasvirChehre from '../../../components/AvatarListTasvirChehre'
import useApiParams from '../../../store';
import ImageTasvirChehre from '../../../components/imageTasvirChehre';
import FilterModalTasvirChehre from '../../../components/Filter/FilterModalTasvirChehre'



function TasvirChehrePage() {

  const {params , setParams , initParams } = useApiParams()
  useEffect(()=>{
    initParams({  
          'user' : '', 
           'ex' : '',
           'ch' : '',
           'prog' : '',
           'tag' : 'جبلی',
           'plat' : '',
           'reg' : '',
           'top' : '',
           'ti' : 'جبلی',
           'sh' : 'ashkhas',
           'poli' : '',
           'day' : '30'
       })
   }, [])
 
 
 
    const urls = {
        amar : 'http://10.32.227.125:8000/rasadsedasima/chehre/amar/', 
        konesh : 'http://10.32.227.125:8000/rasadsedasima/chehre/konesh/',
        jaryan : 'http://10.32.227.125:8000/rasadsedasima/chehre/jaryan/',
        bestpost : 'http://10.32.227.125:8000/rasadsedasima/chehre/bestpost/',
        groups : 'http://10.32.227.125:8000/rasadsedasima/chehre/groups/',
        ravand : 'http://10.32.227.125:8000/rasadsedasima/chehre/ravand/',
        platform : 'http://10.32.227.125:8000/rasadsedasima/chehre/platform/',
        tasvir : 'http://10.32.227.125:8000/rasadsedasima/chehre/sayer/',
        masadigh : 'http://10.32.227.125:8000/rasadsedasima/chehre/mesdag/',
        ehsas : 'http://10.32.227.125:8000/rasadsedasima/chehre/ehsas/',
        abr : 'http://10.32.227.125:8000/rasadsedasima/chehre/abr/',
        image : 'http://10.32.227.125:8000/home/image/all/',
        ghotb : 'http://10.32.227.125:8000/rasadsedasima/chehre/ghotb/'
    }

  return (
    <Grid container className=''> 
      <div className='absolute z-10  bottom-[70px] left-4'>
        <ClearFilterOtaghVaziat/>
      </div>
      <div className='absolute z-10 bottom-[125px] left-4'>
        <FilterModalTasvirChehre/>
      </div>
      <div className='absolute z-10 bottom-4 left-4 '>
        <AvatarListTasvirChehre url={urls.image} param={{'ti' : '' , 'sh' : 'ashkhas'}}/>
      </div>
    <Grid container className='p-2  bg-gradient-to-r bg-[#EEEEEE] h-[370px]' lg={12}>
     <Grid container className='h-full' lg={6}>   
     <Grid  className='p-2  '  lg={12}>
     <PaperCharts  bgtitle={'bg-[#134B70]'} height={'h-[190px]'} title={'روند انتشار محتوا'} chart={
            <>    
            <LineChartAll height={'150px'} marginTop={50} marginRight={50} type={'spline'}
               param={{
                'user' : '', 
                'tag' : 'جبلی',
                'plat' : '',
                'sh' : 'ashkhas',
                'day' : '30'
        }}
             url={urls.amar}/>
            </>
          }/>   
     </Grid>
     <AmarTasvirChehre url={urls.amar} 
      param={{
        'user' : '', 
   
        'tag' : 'جبلی',
        'plat' : '',
        'sh' : 'ashkhas',
        'day' : '30'
}}
     />
     </Grid>
     <Grid container lg={6}>
        <Grid lg={6}> 
            <div className='pt-4  justify-center flex     '>
              <div className=' '>

              <div className=' '>
              <ImageTasvirChehre
              url={urls.image}/>
              </div>
        
              </div>
            </div>
        
        </Grid>
        <Grid lg={6}>
        <DamaSanjTasvirChehre url={urls.amar} 
        param={{
                 'user' : '', 
      
                 'tag' : 'جبلی',
                 'plat' : '',
                 'sh' : 'ashkhas',
                 'day' : '30'
        }}
        />
        </Grid>
       
     </Grid>


     
    <Grid container lg={12} className=' pt-4'>
        <Grid className='p-2' lg={6}>
 <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-[416px]'} title={'پست های برتر'} chart={
            <>
               <Grid className='overflow-scroll h-[380px] no-scrollbar'>
               <Grid className='h-full ' lg={12}>
            <div className='space-y-2 h-[300px]  w-[95%] mr-4 pt-2   '>
            <PostHayeBartarOtagh url={urls.bestpost} height={'h-[290px]'}/>
            </div>

                </Grid>
               </Grid>
            
            </>
          }/>
    
      
        
        </Grid>





        <Grid lg={4}>
        <Grid className='p-2'>
          <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-[200px]'} title={'سهم پلتفرم'} chart={
            <>
     <Grid container lg={12} >
     <Grid lg={12} className='p-2 flex justify-center items-center align-middle '>
                
    </Grid>
                    <Grid lg={12} container className=' items-center  pr-3  w-full'>
  
          <PieChartAll
           param={{
            'user' : '',
            'ex' : '', 
            'tag' : 'جبلی',
            'plat' : '',
            'sh' : 'ashkhas',
            'day' : '30'
   }}
           bishine={true} backgroundColor={'#f8fafc'} url={urls.platform} height={'130px'}/>
                    
    </Grid>
     </Grid>
            
        
        
            </>
          }/>
 
  
          </Grid> 

          <Grid className='p-2' >
      
        <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-[200px]'} title={'سهم جریانات'} chart={
            <>
              <Grid container lg={12} >
     <Grid lg={12} className='p-2 flex justify-center items-center align-middle '>
                
    </Grid>
                    <Grid lg={12} container className=' items-center  pr-3  w-full'>
  
          <PieChartAll bishine={true} backgroundColor={'#f8fafc'} url={urls.jaryan} height={'130px'}/>
                    
    </Grid>
     </Grid>
        
            </>
          }/>
          </Grid>
        </Grid>
        <Grid className='p-2' lg={2}>
        <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-full'} title={'فراوانی عبارات'} chart={
            <>
                <Programs url={urls.abr} height={'h-[384px]'}/>
            </>
          }/>
       
        </Grid>
        <Grid lg={6} className='p-2'>
            <Grid>
            <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-[260px]'} title={' روند مثبت و منفی محتوا'} chart={
            <>
               <div className='p-2'>

                    <div className='mr-[1px]  '>
                    <LineChartAll url={urls.ehsas}   type={'areaspline'}  height={218}
                     param={{
                      'user' : '', 
                      'tag' : 'جبلی',
                      'plat' : '',
                      'sh' : 'ashkhas',
                      'day' : '30'
             }}
                    /> 
                    </div> 
                   </div>
            </>
          }/>
            
            </Grid>

            
            <Grid  className='pt-4'>
            <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-[260px]'} title={'گزارش سایرین'} chart={
            <>
                <Grid lg={12} container>
<Grid container lg={12}>
<> 
      <Programs url={urls.tasvir}  height={'h-[228px]'}/></>
</Grid>
</Grid>
            </>
          }/>
            
             
            </Grid> 
            </Grid>
        
            <Grid className='p-2 space-y-4' lg={6}>
          
          <Grid>
          <PaperCharts bgtitle={'bg-[#FF7F3E]'} height={'h-[260px]'} title={'کنشگران جریان ساز'} 
                chart={
                    <>
                    <BarColumnChartAll url={urls.konesh} 
                      color={'#ff9f6e'}
                      marginTop={50} marginRight={50} marginLeft={60}  height={220}  padding={0.42}
                    />
                    </>      
                }
                /> 
     
    
          </Grid>
      
     
          <Grid>
          <PaperCharts   bgtitle={'bg-[#FF7F3E]'} height={'h-[260px]'} title={'گروه های اثر گذار'} chart={
            <>
  
          <BarColumnChartAll  url={urls.groups} 
           color={'#ff9f6e'} marginTop={30} 
          marginRight={20} marginLeft={60} 
         height={220}  
           padding={0.42}
                   />
         
            </>
          }/>
        
          </Grid>
  
      </Grid>
        
        
        
    </Grid>



    
    </Grid>    
    {/* <Grid lg={1} className=' h-screen   bg-[#102C57] p-2 flex overflow-scroll no-scrollbar justify-center'>
     <div className='flex-col space-y-[21px] '>
  
    {DataTasvir.map((data)=> (
           <>
           <div>
           <Link  >
            <Avatar  src={data.img} sx={{width : 50, height : 50}} className='size-60'/>
           </Link>
           </div>
           </>
    ))}
     </div>
    </Grid>  */}
    </Grid>
  )
}

export default TasvirChehrePage






