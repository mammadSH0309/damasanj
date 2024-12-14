import { Grid} from '@mui/material'
import React, { useEffect} from 'react'
import { MdSearch } from "react-icons/md";
import PaperCharts from '../../../components/PaperCharts'
import { ColorBaztabTVLight, ColorBaztabTVMain } from '../../../Theme'
import Programs from '../../../components/sedasima/operators/Programs'
import AmarRasadBaztab from '../../../components/AmarRasadBaztab'
import LineChartAll from '../../../components/LineChartAll'

import PieChartAll from '../../../components/Charts/PieChartAll';
import BarChartHorizonAll from '../../../components/Charts/BarChartHorizonAll';
import BarColumnChartAll from '../../../components/Charts/BarColumnChartAll';
import ListShabakeRasadBaztabTV from '../../../components/ListShabakeRasadBaztabTV';
import useApiParams from '../../../store';
import ClearFilterButton from '../../../components/ClearFilterButton';
import AbrEbarat from '../../../components/Charts/AbrEbarat';
import FilterRasadBaztabTV from '../../../components/Filter/FilterRasadBaztabTV';

function RasadItemSimaPage() {

    const urls = {
        amar : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/amar/',
        bestChannel : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/bestchannel/',
        bestProgram : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/bestprograme/',
        programs : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/programes/',
        bestMedia : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/bestmedia/',
        ravand : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/ravandenteshar/',
        platform : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/platform/',
        abr : 'http://10.32.227.125:8000/rasadsedasima/rasadonline/abr/',
        shabake : 'http://10.32.227.125:8000/home/image/all/'
      
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
        <Grid container className=' px-[18px] pt-2'> 
         <div className='bottom-2 absolute z-10 left-4'>
        <ClearFilterButton/>
        </div>
        <div className='absolute bottom-16 z-10 left-4'>
        <FilterRasadBaztabTV/>
        </div> 
       
            <Grid container className='' >         
                <Grid item className=' ' md={3} lg={3}> 
                    <Grid lg={12} className=' items-center align-middle flex  m-3  overflow-scroll no-scrollbar h-[80px]'>                   
                                 
                    </Grid>          
                   <Grid container className='  pt-2  ' columns={12}  >       
                       <AmarRasadBaztab  url={urls.amar}/>
                   </Grid>     
                    <Grid className='p-2'>
                    <PaperCharts  bgtitle={ColorBaztabTVMain} title={'روند'} height={'h-[190px]'} chart={    
                       <LineChartAll color={ColorBaztabTVLight}  type={'areaspline'} marginTop={40} marginRight={10} height={170}  url={urls.ravand}/>
                       } />                           
                </Grid>
                <Grid className='p-2'>
                <PaperCharts  bgtitle={ColorBaztabTVMain} title={'رسانه های برتر'} height={'h-[308px]'} chart={
                        <>
                      
                       <PieChartAll  url={urls.platform} height={260}/>
                        </>
                        } /> 
            
                </Grid>              
                </Grid>
                <Grid  className=' pt-2   ' md={9}  lg={9}>
                <Grid  className='  flex gap-5 justify-center m-3  overflow-x-visible-scroll no-scrollbar h-[80px]'>
                <ListShabakeRasadBaztabTV url={urls.shabake} param={{'sh' : 'sima', 'ti' : ''}}/>
                </Grid>
                    <Grid className='   ' lg={12}>
                    <Grid className=' p-2'>
                        <PaperCharts  bgtitle={ColorBaztabTVMain} height={'h-[300px]'} title={'برترین شبکه ها'} chart={
    
                            <>
                            <BarColumnChartAll marginRight={50} marginTop={50} color={ColorBaztabTVLight}  url={urls.bestChannel} height={243}/>
                            </>
                        } />
                        
                  
                    </Grid>               
                    <Grid  className='' container >
                        <Grid item className='p-2   ' md={12} sm   lg={4}>
                            
                        <PaperCharts  bgtitle={ColorBaztabTVMain} height={'h-[309px]'} title={'برنامه ها'} chart={
                                <>
                               <Programs url={urls.programs} height={'h-[260px]'}  color={ColorBaztabTVLight} />
                               
                                </>
                            }/>
                           
                       
                       
                        </Grid>   
                                 
                        <Grid  className='p-2' md={12}  lg={8}>
                       
            
                        <PaperCharts  bgtitle={ColorBaztabTVMain} height={'h-[310px]'} title={'برنامه های برتر'} chart={
                                <>
               
                                   <BarColumnChartAll marginRight={50} marginTop={50} color={ColorBaztabTVLight}  url={urls.bestProgram} height={273}/>
                                </>
                            }/>
                       
    
                        </Grid>
                      
                        
                    </Grid>
                    <Grid container className='  '>
                       <Grid  className='p-2 '  md={12} lg={6}>
                       <PaperCharts  bgtitle={ColorBaztabTVMain} height={'h-[310px]'} title={'کانال برتر'} chart={
                                <>
                                       <BarChartHorizonAll  marginTop={40} color={ColorBaztabTVLight} url={urls.bestMedia} height={272}/>
                                    
                                </>
                            }/>
                      
    
                       </Grid>
                       <Grid  className='p-2'  md={12} lg={6}>
                       <PaperCharts  bgtitle={ColorBaztabTVMain} title={'فراوانی عبارات'} height={'h-[310px]'} chart={
                    <>
            
                        <AbrEbarat  url={urls.abr} height={260}/>
                    </>
                   
                    } />
    
                       </Grid>
                      
                       </Grid>
                    </Grid>
                    
                </Grid>
                
            </Grid>
           
        </Grid>
        
      )
}


export default RasadItemSimaPage
