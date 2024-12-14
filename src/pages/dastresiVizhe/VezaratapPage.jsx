
import { Divider, Grid, Paper, Tab, Tabs } from '@mui/material'
import { Gauge } from '@mui/x-charts'
import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import LineChartMulti from '../../components/Charts/LineChartMulti'
import DonutCharts from '../../components/Charts/DonutCharts'
import RadarCharts from '../../components/Charts/RadarCharts'
import AvatarList from '../../components/AvatarList'
import RadialBar from '../../components/Charts/RadialBar'
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import BarChartMulti from '../../components/Charts/BarChartMulti'
import { LuRadar } from "react-icons/lu";
import BarColumnChart from '../../components/Charts/BarColumnChart'
import PieChartTest from '../../components/Charts/PieChartTest'
import PieChartRasad from '../../components/Charts/PieChartRasad'
import PieChartMain from '../../components/Charts/PieChartMain'
import HeatMapChart from '../../components/Charts/HeatMapChart'
import { FaTelegramPlane } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { useQuery } from '@tanstack/react-query'
import PaperCharts from '../../components/PaperCharts'
import FilterZaman from '../../components/FilterZaman'
import FilterPlatform from '../../components/FilterPlatform'
import name1 from '../../assets/images/name1.jpeg'
import name2 from '../../assets/images/name2.jpeg'
import name3 from '../../assets/images/name3.jpeg'
import { Link, useNavigate } from 'react-router-dom'

function VezaratapPage() {
  const dataAvatar = [
    {
        name : 'وزیر',
        img : name1, 
        enteshar : '۹۰' ,
        masraf : '۰۲' , 
        mosbat : '۰۲' , 
        manfi  : '۹'
    },
    {
        name : 'معاون وزیر',
        img : name2,
        enteshar : '۹۰' ,
        masraf : '۰۲' , 
        mosbat : '۰۲' , 
        manfi  : '۹'
    },
    {
        name : 'مشاور وزیر',
        img : name3,
        enteshar : '۹۰' ,
        masraf : '۰۲' , 
        mosbat : '۰۲' , 
        manfi  : '۹'
    },

    ]
  const datakhabar = [
    
      
         {
             dec  : 'معه تحملش بالا برود\n\n روزنامه دنیای اقتصاد نوشت:\n\n🔹اگر دولت بتواند در ماه‌های آتی از فشارهای اجتماعی در زمینه فیلترینگ بکاهد و تا حدی آزادی‌های اجتماعی بیشتری را میسر کند، شاید این سیاست تا حد زیادی بتواند از التهاب‌های موجود بکاهد و ظرفیت پذیرش هزینه کوتاه‌مدت اصلاحات اقتصادی را فراهم سازد.\n\n🔹در غیر این صورت و با مفروض دانستن محدودیت‌های سیاسی و اجتماعی موجود، هیچ سیاستگذاری حاضر نیست ریسک اصلاحات عمیق اقتصادی را بپذیرد. حتی اگر به فرض چنین اصلاحاتی به انجام برسد و با واکنش‌های شدید اجتماعی روبه‌رو شود، هیچ‌کس آماده دفاع از یک سیاست شکست‌خورده نیست. به قول ضرب‌المثل معروف «پیروزی هزار پدر و مادر دارد، اما شکست یک دایه هم ندارد»\n\n\n\n@aaghaye_khabar",',
             title : 'خبرگزاری صدا و سیما',
             tedad : '۲۸۸۸ '
         },
      
         {
             dec  : 'معه تحملش بالا برود\n\n روزنامه دنیای اقتصاد نوشت:\n\n🔹اگر دولت بتواند در ماه‌های آتی از فشارهای اجتماعی در زمینه فیلترینگ بکاهد و تا حدی آزادی‌های اجتماعی بیشتری را میسر کند، شاید این سیاست تا حد زیادی بتواند از التهاب‌های موجود بکاهد و ظرفیت پذیرش هزینه کوتاه‌مدت اصلاحات اقتصادی را فراهم سازد.\n\n🔹در غیر این صورت و با مفروض دانستن محدودیت‌های سیاسی و اجتماعی موجود، هیچ سیاستگذاری حاضر نیست ریسک اصلاحات عمیق اقتصادی را بپذیرد. حتی اگر به فرض چنین اصلاحاتی به انجام برسد و با واکنش‌های شدید اجتماعی روبه‌رو شود، هیچ‌کس آماده دفاع از یک سیاست شکست‌خورده نیست. به قول ضرب‌المثل معروف «پیروزی هزار پدر و مادر دارد، اما شکست یک دایه هم ندارد»\n\n\n\n@aaghaye_khabar",',
             title : 'خبرگزاری صدا و سیما',
             tedad : '۲۸۸۸ '
         },
      
         {
             dec  : 'معه تحملش بالا برود\n\n روزنامه دنیای اقتصاد نوشت:\n\n🔹اگر دولت بتواند در ماه‌های آتی از فشارهای اجتماعی در زمینه فیلترینگ بکاهد و تا حدی آزادی‌های اجتماعی بیشتری را میسر کند، شاید این سیاست تا حد زیادی بتواند از التهاب‌های موجود بکاهد و ظرفیت پذیرش هزینه کوتاه‌مدت اصلاحات اقتصادی را فراهم سازد.\n\n🔹در غیر این صورت و با مفروض دانستن محدودیت‌های سیاسی و اجتماعی موجود، هیچ سیاستگذاری حاضر نیست ریسک اصلاحات عمیق اقتصادی را بپذیرد. حتی اگر به فرض چنین اصلاحاتی به انجام برسد و با واکنش‌های شدید اجتماعی روبه‌رو شود، هیچ‌کس آماده دفاع از یک سیاست شکست‌خورده نیست. به قول ضرب‌المثل معروف «پیروزی هزار پدر و مادر دارد، اما شکست یک دایه هم ندارد»\n\n\n\n@aaghaye_khabar",',
             title : 'خبرگزاری صدا و سیما',
             tedad : '۲۸۸۸ '
         },
      
      
  
     ]

     
    const [value, setValue] = useState('otaghvaziatnaft');
    const navigate = useNavigate()
    const handleChange = (event, newValue) => {
      setValue(newValue)
  
     
    };
  return (
    <Grid container className='  '>
    <Grid item lg={12} className='text-[#98c1d9]  space-y-1'>
    <Tabs 

    onChange={handleChange}
    sx={{fontFamily : "fontIOS"}} value={value} className=''  aria-label="basic tabs example">
    <Tab
    tabIndex={'otaghvaziatnaft'}
    to={'otaghvaziatnaft'}
    component={Link}
    value={'otaghvaziatnaft'} 
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="اتاق وضعیت" />
           </Tabs>
       
    </Grid>
    
    <Grid sm={12} md={3} lg={3} className=' px-2'>
        <Grid  itemlg={12} className='flex    ' >
            <div className='w-full  mx-7 mt-2 relative flex items-center   '>
            <input type="search" className="search  bg-[#e9cbcb] w-full pr-[3px] h-8 rounded-lg focus:border focus:border-red-400 "  />
            <MdSearch style={{color  : "white"}}  className='absolute bg-[#770f0f] shadow-sm drop-shadow-sm left-0 h-full w-7 rounded-l-lg  '/>
            </div> 
        </Grid>

        <Grid item className='pt-2'>
       
        <PaperCharts bgtitle={'bg-[#770f0f]'} title={'آمار های کلی'} height={'h-[200px]'} chart={
            <>
              <Grid container columns={12}>
        <Grid item container>
        <Grid item lg={6} className='flex justify-start   items-center p-5'>
        <FilterPlatform color={'bg-[#e9cbcb]'}/>
    </Grid > 

    <Grid item lg={6} className='flex justify-end align-middle  pt-[20px] items-center p-5'>
        <FilterZaman color={'bg-[#e9cbcb]'}/>
    </Grid >
            </Grid> 
            <Grid item className='' lg={5}>
                <div className='flex justify-start text-slate-300  pr-4  h-8'>
                    مصرف
                </div>
                <div className='flex items-center gap-x-2 pr-4 justify-center  '>
                 <span className='text-4xl'>۲۸۲</span>
                <span><FaArrowUp style={{color:'green' , fontSize: 20}} /></span>
                 </div>
            </Grid>
            <Grid item className=' flex justify-center pr-6 h-[169px] bg ' lg={1}>
                <Divider orientation='vertical' sx={{height : '50px' , marginTop : '20px'}} />
            </Grid> 
            <Grid item  lg={5}>
           
                 <div className='flex justify-start  text-slate-300 pr-4 h-8'>
                 انتشار
                </div>
                <div className='flex items-center gap-x-2 pr-4 justify-center  '>
                 <span className='text-4xl'>۲۸۲</span>
                <span><FaArrowDown style={{color:'red' , fontSize: 20}} /></span>
                 </div>
            </Grid>
        </Grid>
            </>
        } />
        </Grid>
        
        <Grid className='pt-4'>
         <PaperCharts bgtitle={'bg-[#770f0f]'} title={'فراوانی جریانات'} height={'h-[262px]'} chart={
            <>
             <DonutCharts  height={220}/>
            </>
         } />           
        </Grid>
        <Grid className='pt-4'  >
        <PaperCharts bgtitle={'bg-[#770f0f]'} height={'h-[297px]'} title={'فراوانی پلتفرم'} chart={
            <>
        <Grid container>
   

   <Grid lg={6} className='flex justify-start align-middle pt-[20px] items-center p-3'>
 <FilterZaman color={'bg-[#e9cbcb]'}/>
   </Grid >
           </Grid> 
      <div className=''>
       
       <PieChartMain  height={190}/>
      </div>
           
            </>
        }/>           
        </Grid>
    </Grid>
    <Grid className='' container sm={12} md={9} lg={9}>
     <Grid lg={4} className='pt-2 h-[420px]  px-2 '>
        <Grid>
        <PaperCharts bgtitle={'bg-[#770f0f]'}  height={'h-[519px]'} title={'مصادیق موج'} chart={
            <>
            <Grid className='gap-y-2 space-y-2 px-1 pt-1'>
       <div className='text-[13px] pr-1'>
            تلگرام
        </div>
       <div className={` border  rounded-[20px] p-1 border-[#c8e4fb]   '}`}>
        
    <p className='p-2 text-[16px] font-CalibriBold '>
    aaghaye_khabar
    </p>
    <div className={`  w-full h-[70px]    pr-2     border-white  no-scrollbar overscroll-y-contain overflow-scroll break-words text-sm`}>
       <p>
       پیشنهاد به پزشکیان: اگر می خواهید با اصلاحات اقتصادی به مردم فشار بیاورید،فیلترینگ را بردارید و آزادیهای اجتماعی را بیشتر کنیدتا جامعه تحملش بالا برو
        </p>  
    </div>  
        </div>
        <div className='text-[13px] pr-1'>
            توییتر
        </div>        
  <div className={` border  rounded-[20px] p-1 border-[#c8e4fb]   '}`}>
    <p className='p-2 text-[16px] font-CalibriBold '>
    aaghaye_khabar
    </p>
    <div className={`  w-full h-[70px]    pr-2  border-white drop-shadow-xl no-scrollbar overscroll-y-contain overflow-scroll  text-sm`}>
       <p>
       پیشنهاد به پزشکیان: اگر می خواهید با اصلاحات اقتصادی به مردم فشار بیاورید،فیلترینگ را بردارید و آزادیهای اجتماعی را بیشتر کنیدتا جامعه تحملش بالا برو
        </p>  
    </div>  
  </div>
  <div className='text-[13px] pr-1'>
            پیام رسان داخلی
     </div>
  <div className={` border  rounded-[20px] p-1 border-[#c8e4fb]   '}`}>
    <p className='p-2 text-[16px] font-CalibriBold '>
    aaghaye_khabar
    </p>
    <div className={`  w-full h-[70px]   pr-2  text-wrap   border-white drop-shadow-xl no-scrollbar overscroll-y-contain overflow-scroll break-words text-sm`}>
       <p>
       پیشنهاد به پزشکیان: اگر می خواهید با اصلاحات اقتصادی به مردم فشار بیاورید،فیلترینگ را بردارید و آزادیهای اجتماعی را بیشتر کنیدتا جامعه تحملش بالا برو
        </p>  
    </div>
   
    
    
  </div>
      
       </Grid>
            </>
        }/>  
     
        </Grid>
    
        

     </Grid>
     <Grid   className='p-1  mr-auto    ' lg={8}>
        <Grid container className=''>
        <Grid className='p-21   ' lg={8}>
            <PaperCharts bgtitle={'bg-[#770f0f]'} height={'h-[297px]'} title={'برنامه ها'} 
            chart={<> <AvatarList data={dataAvatar} height={'258px'}/></>}
            />
       
    
        </Grid>
      
        {/* mr-[60px] */}
        <Grid className='p-1 px-2   ' lg={4}>
            <PaperCharts bgtitle={'bg-[#770f0f]'} height={'h-[297px]'} title={'قطب نما'} chart={
                <>
                <div className='flex flex-col  text-[#98c1d9] '>
                        <div className='justify-center h-[140px] align-middle items-center w-full flex font-Calibri font-bold '>
                        <span>
                        <LuRadar  className='animate-spin-medium '    style={{  color : 'orange' , width : 200 , height : 130}} sx={{color : 'secondary' , fontFamily : 'font-Calibri' }}  />
                        </span>
                        
                        </div>
                        
                        <div className='text-[13px]  justify-center mx-auto mt-9'>
                        <div className='flex w-full   gap-3'>
                        <span className='w-20'>تعداد انتشار</span>
                        <span className='text-black font-bold'> 
                        ۲۸۲
                        </span>
                        </div>
                        <div  className='flex  w-full  gap-3'>
                        <span className='w-20'>میزان مصرف</span>
                        <span className='text-black font-bold'> 
                        ۲۸۲
                        </span>
                        </div>
                         <div className='flex w-full   gap-3'>
                         <span className='w-20'>زمان شروع</span>
                         <span className='text-black font-bold'> 
                         ۲ دقیقه پیش
                        </span>
                         </div>
                        </div>
        
         
                     
                </div>
                </>

            }/>
       
        
        </Grid>
        </Grid>
        <Grid lg={12}  className=' p-1 mr-auto pt-2  ' >
            <PaperCharts bgtitle={'bg-[#770f0f]'} height={'h-[207px]'} title={'کنشگران جریان ساز'} 
            chart={
                <>
                <BarColumnChart colorBar={'#e9cbcb'} marginTop={20} marginRight={20} marginLeft={60}  height={173}  padding={0.42}
         cat={['بهروز عزیزی' ,
         'بهروز عزیزی' ,
         'بهروز عزیزی' ,
         'بهروز عزیزی' ,
         'امیرتنها', 
         'امیرتنها',
         'امیرتنها',
         'بهروز عزیزی' ,  'بهروز عزیزی' ,  'بهروز عزیزی' ,  'بهروز عزیزی' ,  'بهروز عزیزی' ,
         
          ]}/>
                </>
                
            }
            />
       
        </Grid>
   
     </Grid>


     <Grid container   className='   '>
        <Grid className=' pt-1 px-2 ' lg={4}>
            <PaperCharts bgtitle={'bg-[#770f0f]'} height={'h-[300px]'} title={'فراوانی گروه ها'} 
            chart={
                <>
                <Grid container>
        <Grid lg={6} className='flex justify-start items-center p-5'>
  <FilterZaman color={'bg-[#e9cbcb]'}/>
    </Grid > 

    <Grid lg={6} className='flex justify-end align-middle pt-[20px] items-center p-5'>
    <FilterZaman color={'bg-[#e9cbcb]'}/>
    </Grid >
            </Grid> 
       <div className=''>
        
        <RadialBar height={190} />
       </div>
                </>
            }
            />
       
        </Grid>

        <Grid className='px-2 pt-1'  lg={8}>
        <PaperCharts bgtitle={'bg-[#770f0f]'} height={'h-[300px]'} title={'ابر عبارات'} chart={<>
            <div className='z-auto'>
       <Grid container>
       <Grid lg={6} className='flex justify-start items-center p-5'>
  <FilterPlatform color={'bg-[#e9cbcb]'}/> 
</Grid > 
     
    <Grid lg={6} className='flex justify-end align-middle pt-[20px] items-center p-5'>
    <FilterZaman color={'bg-[#e9cbcb]'}/>
    </Grid >
       </Grid>
       </div>
        </>}/>
      
        </Grid>

    </Grid>
    </Grid>
    <Grid container  lg={12} className='p-1 px-2'>
        <Grid className=' pl-2 pt-2' lg={6}>
        <PaperCharts bgtitle={'bg-[#770f0f]'} height={'h-[250px]'} title={'فراوانی احساسات'} chart={
            <>
            <div className=''>
       <Grid container columns={12} className='items-center  h-[50px]'> 

<Grid lg={12} className='flex justify-start items-center p-5'>
<FilterPlatform color={'bg-[#e9cbcb]'}/>
</Grid > 
</Grid>
       <BarChartMulti  marginTop={20} marginRight={40} height={150} state={'column'}/>
       </div>
            </>
        }/>
        </Grid>

        <Grid className='pr-2 pt-2'  lg={6}>
            <PaperCharts bgtitle={'bg-[#770f0f]'} height={'h-[250px]'} title={'روند انتشار موج'} chart={
                <>
                   <LineChartMulti  type={'areaspline'}  height={210}/> 
                </>
            }/>
      
     
        </Grid>

    </Grid>
    <Grid className='px-2 pt-2' lg={6}>
        <PaperCharts bgtitle={'bg-[#770f0f]'} height={'h-[350px]'} title={'فراوانی موضوعات'} chart={
            <>
            <Grid container columns={12} className='items-center'> 

<Grid lg={12} className='flex justify-start items-center p-5'>
<FilterPlatform color={'bg-[#e9cbcb]'}/>
</Grid > 
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
         "پنچ شنبه",
         "جمعه",
 
       ]
}
catY={
  [
    'فروش نفت ',
    'اعتراضات نفتی',
    'کمبود گاز',
    'کارت سوخت',
    'بنزین'
  ]
}
height={220} minColor={'#FFFFFF'} maxColor={'#770f0f'} />
</div>
            </>
        }/>
    </Grid>
    <Grid className='px-2 pt-2 ' lg={6}> 
    <PaperCharts bgtitle={'bg-[#770f0f]'} height={'h-[352px]'} title={'پست های برتر'} chart={
        <>
         <Grid container className='items-center  overflow-scroll no-scrollbar' >
    <Grid lg={6} className='flex justify-start  overflow-scroll no-scrollbar  items-center p-5'>
    <FilterPlatform  color={'bg-[#e9cbcb]'}/>
        </Grid >
        <Grid className='pl-4   overflow-hidden no-scrollbar' lg={6}>
            <div className=' px-2  relative flex items-center   '>
            <input type="search" className="search  bg-[#e9cbcb] w-full pr-[3px] h-8 rounded-lg focus:border focus:border-red-400 "  />
            <MdSearch style={{color  : "white"}}  className='absolute bg-[#770f0f] shadow-sm drop-shadow-sm left-0 h-full w-7 rounded-l-lg  '/>
            </div> 
            </Grid>
            <Grid className='h-full' lg={12}>
            <div className='space-y-2  w-[95%] mr-4   '>
       {datakhabar.map((data)=> (
        <>
         <div className='border   rounded-[20px] p-1 border-[#c8e4fb] '>
            <Grid columns={12} className='p-2  flex items-center' container>
                <Grid  lg={7}>
                {/* rounded-[10px]  border  border-[#c8e4fb] */}
                <div className='text-[13px] w-[340px]    no-scrollbar h-10        no-scrollbar overscroll-y-contain overflow-scroll break-words'>
                {data.dec}
                </div>
                </Grid>
                <Grid lg={3}>
                    <div className='p-1  flex justify-center  text-[10px]'>
                    {data.title}
                    </div>
                </Grid>
                <Grid lg={2}>
                <div className='p-2   flex justify-center mt-[2px] '>
                     <div className='flex-col  text-[13px] items-center align-middle'> 
                     <p className=''>
                     {data.tedad}  
                     </p>
                     </div>
                    </div>
                </Grid>
            </Grid>
            
        </div>
        </>
       ))}
        </div>

            </Grid>
        
      
    </Grid>
        </>
    } />


    </Grid>
</Grid>
  )
}

export default VezaratapPage
