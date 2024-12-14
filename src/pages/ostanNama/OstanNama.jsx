import { Avatar, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import jebeli from '../../assets/images/jebeli.png'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import DataTasvir from '../../components/DataTasvir'
import LineChartMulti from '../../components/Charts/LineChartMulti';
import TextAnim from '../../components/TextAnim';
import DamaSanjChart from '../../components/Charts/DamaSanjChart';
import { MdSearch } from 'react-icons/md';
import PieChartMain from '../../components/Charts/PieChartMain';
import BarColumnChart from '../../components/Charts/BarColumnChart'
import FaravaniText from '../../components/FaravaniText'
import ShabakeList from '../../components/ShabakeList'
import PaperCharts from '../../components/PaperCharts'

import MapIranChart from '../../components/Charts/MapIranChart'

function OstanNama() {

  const dataGozaresh = [
    {
      name : 'تاکسی زرد',
      enteshar : 'اترک',
      masraf : '2' , 
      mosbat : '3'
    },
    {
      name : 'تاکسی زرد',
      enteshar : 'اترک',
      masraf : '2' , 
      mosbat : '3'
    },
    {
      name : 'تاکسی زرد',
      enteshar : 'اترک',
      masraf : '2' , 
      mosbat : '3'
    },
    {
      name : 'تاکسی زرد',
      enteshar : 'اترک',
      masraf : '2' , 
      mosbat : '3'
    },
    {
      name : 'تاکسی زرد',
      enteshar : 'اترک',
      masraf : '2' , 
      mosbat : '3'
    },
    {
      name : 'تاکسی زرد',
      enteshar : 'اترک',
      masraf : '2' , 
      mosbat : '3'
    },
    {
      name : 'تاکسی زرد',
      enteshar : 'اترک',
      masraf : '2' , 
      mosbat : '3'
    },

  ]

  const faravanitext = [
    {
        title  : 'رسانه ملی',
        count : '45'
    },
    {
        title  : 'رسانه ملی',
        count : '45'
    },
    {
        title  : 'رسانه ملی',
        count : '45'
    },
    {
        title  : 'رسانه ملی',
        count : '45'
    },

]
    const data = [
      {
        title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
        shbake : 'خبرگذاری صداوسیما',
        count : '200',
      },
      {
        title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
        shbake : 'خبرگذاری صداوسیما',
        count : '200',
      },
      {
        title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
        shbake : 'خبرگذاری صداوسیما',
        count : '200',
      },
      {
        title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
        shbake : 'خبرگذاری صداوسیما',
        count : '200',
      },
      {
        title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
        shbake : 'خبرگذاری صداوسیما',
        count : '200',
      },
      {
        title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
        shbake : 'خبرگذاری صداوسیما',
        count : '200',
      },
      {
        title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
        shbake : 'خبرگذاری صداوسیما',
        count : '200',
      },
      {
        title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
        shbake : 'خبرگذاری صداوسیما',
        count : '200',
      },
      {
        title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
        shbake : 'خبرگذاری صداوسیما',
        count : '200',
      },
      {
        title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
        shbake : 'خبرگذاری صداوسیما',
        count : '200',
      },


    ]
  return (
   <>
  
     <Grid container className='   '>
  
  <Grid container className='   bg-[#EEEEEE] h-[650px] pt-2 px-[18px] ' lg={12}>
  <Grid container className='' lg={6}>
    
    <Grid container className='  '  lg={6}>
    
    <Grid className='p-2 space-y-2  ' lg={6}>
    <div className='border  bg-[#134B70] h-[120px] rounded-[25px]'>
                   <div className=' p-3 text-white '>
                  <p>کاربران</p>
                   </div>
                   <div className='flex justify-center text-white items-center gap-x-2'>
                   <span className='font-bold text-2xl text-white'>۲۸۸۸</span>
               
                   </div>
     </div>
     <div className='border  bg-[#134B70] h-[120px] rounded-[25px]'>
                   <div className=' p-3 text-white '>
                  <p>کاربران</p>
                   </div>
                   <div className='flex justify-center text-white items-center gap-x-2'>
                   <span className='font-bold text-2xl text-white'>۲۸۸۸</span>
               
                   </div>
     </div>
    </Grid>
    <Grid className='p-2 space-y-2' lg={6}>
    <div className='border  bg-[#134B70] h-[120px] rounded-[25px]'>
                   <div className=' p-3 text-white '>
                  <p>کاربران</p>
                   </div>
                   <div className='flex justify-center text-white items-center gap-x-2'>
                   <span className='font-bold text-2xl text-white'>۲۸۸۸</span>
               
                   </div>
     </div>
     <div className='border  bg-[#134B70] h-[120px] rounded-[25px]'>
                   <div className=' p-3 text-white '>
                  <p>کاربران</p>
                   </div>
                   <div className='flex justify-center text-white items-center gap-x-2'>
                   <span className='font-bold text-2xl text-white'>۲۸۸۸</span>
               
                   </div>
     </div>
    </Grid>
    <Grid lg={12} className=''>
    <Grid className='p-2  flex justify-center gap-x-4' >

     </Grid>
    </Grid>
    </Grid>
    <Grid className='p-2' lg={6}>
      <PaperCharts 
      title={'درجه'}
      bgcolor={'#EEEEEE'}
      titlejustify={'justify-start'}
      bgtitle={'bg-[#134B70]'}
      height={'h-[300px]'}
      chart={
        <> 
         <div className='flex justify-center h-[200px]  w-full' >
                <DamaSanjChart backgroundButton={'#EEEEEE'} width={300} />
                
            </div> 
            <div  className='p-2  flex justify-center'>
            <div className='gap-x-3 flex justify-center items-center' >
                <span className='font-bold text-4xl'>۸۰</span>
                <span>درجه</span>
            </div>
            </div>
        </>
      }/>
      
    {/* <div className='flex justify-center h-[180px] ' >
                <DamaSanjChart backgroundButton={'#EEEEEE'} />
                
            </div> */}
           
    </Grid>
    <Grid  className='p-2  h-fit   '  lg={12}>
    <Grid className='' lg={12}>
            <div className=' flex-col '>
        
            <Grid container>
              <Grid className='p-2' lg={6}>
              <div className='border bg-[#134B70]  h-[50] rounded-[25px]'>
                    <div className=' p-3 text-white flex items-center justify-between '>
                   <p className='text-[14px]'>دمای قبلی :</p>
                   <p className='font-bold ' >۸۸</p>
                    </div>
                    
              </div>
              </Grid>
            <Grid className='p-2' lg={6}>
            <div className='border  border-blue-300 bg-[#134B70] h-[50] rounded-[25px]'>
                    <div className=' p-3 text-white flex items-center justify-between '>
                   <p className='text-[14px]'>میانگین دما : </p>
                   <p className='font-bold '>۸۸</p>
                    </div>
                    
              </div>
            </Grid>
            </Grid>
            </div>
        </Grid>
    <Paper  sx={{borderRadius : '25px'  }}  className=' border border-[#89c0ce]     rounded-[25px]    shadow-md     duration-300     justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl ' >
                   <div  className='bg-[#134B70] flex pr-3  text-white  w-full     text-[15px]  items-center drop-shadow-2xl  h-[31px] rounded-t-[25px]'>
                   روند انتشار محتوا  
                   </div>
                   <LineChartMulti 
                   colorX={'#000000 '} 
                   gridLineXColor={'#dbeafe'} 
                   gridLineYColor={'#dbeafe'} 
                   colorY={'#000000'} 
                   backgroundColor={'#EEEEEE'}  
                   type={'spline'}  
                   height={200}/> 
                  
                   

           </Paper> 
           <Grid className='' container lg={12}>
 


    </Grid>
    </Grid>
    </Grid>
   <Grid className='' container lg={6}>
      <Grid  className='w-full'> 
      <div className='border border-[#89c0ce]  m-2 rounded-[25px] p-2'>
      <MapIranChart height={605}  backgroundColor={'#EEEEEE'}   />
      </div>
      </Grid>
   </Grid>
  
   </Grid> 

   
  <Grid container lg={12} className=' px-[18px] pt-2 '>
      <Grid className=' p-2' lg={6}>

      <Paper sx={{borderRadius : '25px'}} className=' duration-300  rounded-[20px]  h-[416px]  overflow-scroll no-scrollbar  align-middle items-center   justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl ' >
      <div className='bg-[#FF7F3E] sticky top-0 z-50 flex justify-center text-[15px] text-white  items-center drop-shadow-lg  h-8 rounded-t-[25px]'>
          پست های برتر       
      </div>
      <Grid container className='items-center' >
      <Grid lg={6} className='flex justify-start items-center p-3'>
        
          </Grid >
          <Grid className='pl-4' lg={6}>
              <div className=' px-2  relative flex items-center   '>
              <input type="search" className="search  bg-[#ffaa8e] w-full pr-[3px] h-8 rounded-lg focus:border focus:border-red-400 "  />
              <MdSearch style={{color  : "white"}}  className='absolute bg-[#FC4100] shadow-sm drop-shadow-sm left-0 h-full w-7 rounded-l-lg  '/>
              </div> 
              </Grid>
          
          <div className='space-y-2 w-full overflow-scroll no-scrollbar  mx-2'>
          {data.map((data)=>(
            <>
            
          <div className='border w-full  rounded-[20px] p-1 border-[#c8e4fb] '>
              <Grid columns={12} className='p-2 flex items-center' container>
                  <Grid  lg={7}>
      
                  <div className='text-[13px] w-[340px]    no-scrollbar h-10        no-scrollbar overscroll-y-contain overflow-scroll break-words'>
                  {data.title}
                  </div>
                  </Grid>
                  <Grid lg={3}>
                      <div className='p-1 pr-9  flex justify-center  text-[10px]'>
                        {data.shbake} 
                      </div>
                  </Grid>
                  <Grid lg={2}>
                  <div className='p-2   flex justify-center mt-[2px] '>
                       <div className='flex-col justify-center text-[13px] items-center align-middle'> 
                       <p className=''>
                       {data.count}  
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
       </Paper>
    
    
      </Grid>
      <Grid  lg={4}>
      <Grid className='p-2'>
          <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-[200px]'} title={'سهم پلتفرم'} chart={
            <>
             <div className='p-2'>
    
                    </div>
                    <div className='flex justify-center pr-3  w-full'>
                        <div className=' flex-col pr-4 '>
                        <div className='flex justify-center  '>
                           <div className='flex justify-center items-center gap-x-2 p-3'>
                            <span className='font-bold text-3xl'>۲۸۸۸</span>
                       
                            </div>
                        </div>
                        <div className='flex justify-center text-[15px]'>
                            بیشینه سهم
                        </div>
                        </div>
                       <div>
                       <PieChartMain height={120} width={260}   />
                       </div>
                    </div>
            </>
          }/>
 
  
          </Grid> 

          <Grid className='p-2' >
      
        <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-[200px]'} title={'سهم جریانات'} chart={
            <>
             <div className='p-2'>
              
                    </div>
                    <div className='flex justify-center pr-3  w-full'>
                        <div className=' flex-col pr-4 '>
                        <div className='flex justify-center  '>
                           <div className='flex justify-center items-center gap-x-2 p-3'>
                            <span className='font-bold text-3xl'>۲۸۸۸</span>
                       
                            </div>
                        </div>
                        <div className='flex justify-center text-[15px]'>
                            بیشینه سهم
                        </div>
                        </div>
                       <div>
                       <PieChartMain height={120} width={260}   />
                       </div>
                    </div>
            </>
          }/>
          </Grid>

      </Grid>
      <Grid className='p-2' lg={2}>
      <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-full'} title={'فراوانی عبارات'} chart={
          <>
       
        
              <FaravaniText data={faravanitext}/>
          </>
        }/>
     
      </Grid>
      <Grid lg={6} className='p-2'>
          <Grid>
          <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-[207px]'} title={' روند مثبت و منفی محتوا'} chart={
          <>
             <div className='p-2'>
                 <div className='p'>
             
              </div>
                  <div className=''>
                  <LineChartMulti  type={'areaspline'} 
                   gridLineXColor={'#EEEEEE'} 
                   gridLineYColor={'#EEEEEE'} 
                   height={150}/> 
                  </div> 
                 </div>
          </>
        }/>
          
          </Grid>

          
          <Grid  className='pt-4'>
          <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-[195px]'} title={'گزارش سایرین'} chart={
          <>
              <Grid lg={12} container>

<Grid container lg={8}>

 <div className=' ' >
 <ShabakeList
 height={'h-[150px]'}
 data={dataGozaresh}
  title1={'نام چهره'}
  title2={'انتشار'}
  title3={'مصرف'}
  title4={'مثبت'}
  />
 </div>

</Grid>
<Grid lg={4}>
  <div className='flex justify-center pt-5 '>
      <div className='flex-col '>
      <div className='   relative flex items-center   '>
              <input type="search" className="search  bg-[#ffaa8e] w-full pr-[3px] h-8 rounded-lg focus:border focus:border-red-400 "  />
              <MdSearch style={{color  : "white"}}  className='absolute bg-[#FC4100] shadow-sm drop-shadow-sm left-0 h-full w-7 rounded-l-lg  '/>
              </div> 
    <div className=' pt-2'>

    </div>



    <div className=' pt-2'>

    </div>
      </div>
  </div>
</Grid>

</Grid>
          </>
        }/>
          
           
          </Grid> 
          </Grid>
      
          <Grid className='p-2 space-y-4' lg={6}>
        
        <Grid>
        <PaperCharts  bgtitle={'bg-[#FF7F3E]'} height={'h-[207px]'} title={'کاربران اثر گذار'} chart={
          <>
              <div className='p-2'>
              
              </div>
   
       <div>
        <BarColumnChart colorBar={'#ffaa8e'} marginTop={20} marginRight={20} marginLeft={60}  height={120}  padding={0.42}/>
       </div>
          </>
        }/>
   
  
        </Grid>
    
   
        <Grid className=''>
        <PaperCharts   bgtitle={'bg-[#FF7F3E]'} height={'h-[195px]'} title={'گروه های اثر گذار'} chart={
          <>
             <div className='p-1'>
        <div className='pr-2 pt-2'>
             
        </div>
      </div>
       <div>
    
        {/* <LineChartMulti type={'spline'} height={160}/> */}
        <BarColumnChart colorBar={'#ffaa8e'} marginTop={20} marginRight={20} marginLeft={60}  height={110}  padding={0.42}/>
       </div>
          </>
        }/>
      
        </Grid>

    </Grid>
      
      
      
  </Grid>




  

  

  </Grid>
   </>
  )
}

export default OstanNama
