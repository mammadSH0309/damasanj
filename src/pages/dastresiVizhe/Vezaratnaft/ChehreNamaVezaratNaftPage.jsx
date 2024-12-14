import { Avatar, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import jebeli from '../../../assets/images/jebeli.png'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import DataTasvir from '../../../components/DataTasvir'
import LineChartMulti from '../../../components/Charts/LineChartMulti';
import TextAnim from '../../../components/TextAnim';
import DamaSanjChart from '../../../components/Charts/DamaSanjChart';
import { MdSearch } from 'react-icons/md';
import PieChartMain from '../../../components/Charts/PieChartMain';
import BarColumnChart from '../../../components/Charts/BarColumnChart'
import FaravaniText from '../../../components/FaravaniText'
import ShabakeList from '../../../components/ShabakeList'
import PaperCharts from '../../../components/PaperCharts'

import name1 from '../../../assets/images/name1.jpeg'
import name2 from '../../../assets/images/name2.jpeg'
import name3 from '../../../assets/images/name3.jpeg'

function ChehreNamaVezaratNaftPage() {


    const dataGozaresh = [
        {
          name : 'محمدصادق عظیمی فر',
          enteshar : '3',
          masraf : '2' , 
          mosbat : '3'
        },
        {
          name : 'علیرضا وهاب زاده',
          enteshar : 'اترک',
          masraf : '2' , 
          mosbat : '3'
        },
        {
            name : 'محمدصادق عظیمی فر',
            enteshar : '3',
            masraf : '2' , 
            mosbat : '3'
          },
          {
            name : 'علیرضا وهاب زاده',
            enteshar : 'اترک',
            masraf : '2' , 
            mosbat : '3'
          },
          {
            name : 'محمدصادق عظیمی فر',
            enteshar : '3',
            masraf : '2' , 
            mosbat : '3'
          },
          {
            name : 'علیرضا وهاب زاده',
            enteshar : 'اترک',
            masraf : '2' , 
            mosbat : '3'
          },
          {
            name : 'محمدصادق عظیمی فر',
            enteshar : '3',
            masraf : '2' , 
            mosbat : '3'
          },
          {
            name : 'علیرضا وهاب زاده',
            enteshar : 'اترک',
            masraf : '2' , 
            mosbat : '3'
          },
    
      ]


    const dataTasvir = [
        name1 , 
        name2 , 
        name3 , 
    ]

    const faravanitext = [
        {
            title  : 'بنزین',
            count : '45'
        },
        {
            title  : 'نفت',
            count : '45'
        },
        {
            title  : 'انتصاب',
            count : '45'
        },
        {
            title  : 'انتصاب',
            count : '45'
        },
        {
            title  : 'انتصاب',
            count : '45'
        },
        {
            title  : 'انتصاب',
            count : '45'
        },
        {
            title  : 'انتصاب',
            count : '45'
        },
        {
            title  : 'انتصاب',
            count : '45'
        },
        {
            title  : 'انتصاب',
            count : '45'
        },
        {
            title  : 'انتصاب',
            count : '45'
        },
        {
            title  : 'آقازاده',
            count : '45'
        },

    ]
    const data = [
        {
          title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
          shbake : 'خبرگزاری ایسنا',
          count : '200',
        },
        {
            title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
            shbake : 'خبرگزاری ایسنا',
            count : '200',
          },
          {
            title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
            shbake : 'خبرگزاری ایسنا',
            count : '200',
          },
          {
            title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
            shbake : 'خبرگزاری ایسنا',
            count : '200',
          },
          {
            title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
            shbake : 'خبرگزاری ایسنا',
            count : '200',
          },
          {
            title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
            shbake : 'خبرگزاری ایسنا',
            count : '200',
          },
          {
            title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
            shbake : 'خبرگزاری ایسنا',
            count : '200',
          },
          {
            title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
            shbake : 'خبرگزاری ایسنا',
            count : '200',
          },
          {
            title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
            shbake : 'خبرگزاری ایسنا',
            count : '200',
          },
          {
            title : 'زن مروج فحشا در فضای مجازی ‌بازداشت شد\n\nمعاون پیشگیری از وقوع جرم دادستانی اردبیل:\n🔴یک زن به اتهام ترویج فساد و فحشا با سوء استفاده از ظرفیت فضای مجازی و شبکه‌های اجتماعی بازداشت شد.\n\n🔴این متهم غیر بومی ساکن اردبیل است که نسبت به کشف حجاب و تهیه و پخش تصویرهای نیمه عریان از خود اقدام می‌کرد.\n\n🔴این شخص عکس‌ها و فیلم‌های مبتذل نیمه عریان از خود تهیه می‌کرد و با استفاده از امکان پخش زنده شبکه اجتماعی اینستاگرام آنها را انتشار می‌داد و موجب جریحه‌دار کردن عفت و هتک اخلاق عمومی می‌شد.\n\n_',
            shbake : 'خبرگزاری ایسنا',
            count : '200',
          },

  
  
      ]
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
                 title : 'خبرگذاری ایسنا',
                 tedad : '۲۸۸۸ '
             },
          
             {
                 dec  : 'معه تحملش بالا برود\n\n روزنامه دنیای اقتصاد نوشت:\n\n🔹اگر دولت بتواند در ماه‌های آتی از فشارهای اجتماعی در زمینه فیلترینگ بکاهد و تا حدی آزادی‌های اجتماعی بیشتری را میسر کند، شاید این سیاست تا حد زیادی بتواند از التهاب‌های موجود بکاهد و ظرفیت پذیرش هزینه کوتاه‌مدت اصلاحات اقتصادی را فراهم سازد.\n\n🔹در غیر این صورت و با مفروض دانستن محدودیت‌های سیاسی و اجتماعی موجود، هیچ سیاستگذاری حاضر نیست ریسک اصلاحات عمیق اقتصادی را بپذیرد. حتی اگر به فرض چنین اصلاحاتی به انجام برسد و با واکنش‌های شدید اجتماعی روبه‌رو شود، هیچ‌کس آماده دفاع از یک سیاست شکست‌خورده نیست. به قول ضرب‌المثل معروف «پیروزی هزار پدر و مادر دارد، اما شکست یک دایه هم ندارد»\n\n\n\n@aaghaye_khabar",',
                 title : 'خبرگزاری ایسنا',
                 tedad : '۲۸۸۸ '
             },
          
             {
                 dec  : 'معه تحملش بالا برود\n\n روزنامه دنیای اقتصاد نوشت:\n\n🔹اگر دولت بتواند در ماه‌های آتی از فشارهای اجتماعی در زمینه فیلترینگ بکاهد و تا حدی آزادی‌های اجتماعی بیشتری را میسر کند، شاید این سیاست تا حد زیادی بتواند از التهاب‌های موجود بکاهد و ظرفیت پذیرش هزینه کوتاه‌مدت اصلاحات اقتصادی را فراهم سازد.\n\n🔹در غیر این صورت و با مفروض دانستن محدودیت‌های سیاسی و اجتماعی موجود، هیچ سیاستگذاری حاضر نیست ریسک اصلاحات عمیق اقتصادی را بپذیرد. حتی اگر به فرض چنین اصلاحاتی به انجام برسد و با واکنش‌های شدید اجتماعی روبه‌رو شود، هیچ‌کس آماده دفاع از یک سیاست شکست‌خورده نیست. به قول ضرب‌المثل معروف «پیروزی هزار پدر و مادر دارد، اما شکست یک دایه هم ندارد»\n\n\n\n@aaghaye_khabar",',
                 title : 'خبرگذاری ایسنا',
                 tedad : '۲۸۸۸ '
             },
          
          
      
         ]

  return (
<>
<Grid container className=' '>
  
  <Grid  className='  ' lg={11}>
  <Grid container className=' bg-gradient-to-r bg-[#EEEEEE] h-[370px]'>
  <Grid container className=' ' lg={6}>
  
  <Grid  className='p-2  '  lg={12}>
  <Paper  sx={{borderRadius : '25px'  }}  className=' border border-[#89c0ce]   h-[190px]    rounded-[25px]    shadow-md     duration-300     justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl ' >
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
                 height={158}/> 
                
                 

         </Paper> 
  </Grid>

  <Grid className='justify-end' container lg={12}>
   <Grid className='p-2 space-y-4' lg={3}>
   <FilterZaman border={'border-stone-400'} color={'bg-[#EEEEEE]'}/>
   <FilterPlatform border={'border-stone-400'} color={'bg-[#EEEEEE]'}   />
   </Grid>
  <Grid className='pr-2 p-2   ' lg={3}> 
          
          
  <div className='border  bg-[#134B70] h-[100px] rounded-[25px]'>
                 <div className=' p-3 text-white '>
                <p>کاربران</p>
                 </div>
                 <div className='flex justify-center text-white items-center gap-x-2'>
                 <span className='font-bold text-2xl text-white'>۲۸۸۸</span>
             
                 </div>
   </div>
           
            
  </Grid>

  <Grid className='pr-2 p-2' lg={3}>
  <div className='border  bg-[#134B70] h-[100px] rounded-[25px]'>
                 <div className=' p-3 text-white '>
                <p>مصرف</p>
                 </div>
                 <div className='flex justify-center text-white items-center gap-x-2'>
                 <span className='font-bold text-2xl text-white'>۲۸۸۸</span>
             
                 </div>
   </div>
  </Grid>

  <Grid className='pr-2 p-2' lg={3}>
 
                 <div className='border  bg-[#134B70] h-[100px] rounded-[25px]'>
                 <div className=' p-3 text-white '>
                <p>بازدید</p>
                 </div>
                 <div className='flex justify-center text-white items-center gap-x-2'>
                 <span className='font-bold text-2xl text-white'>۲۸۸۸</span>
             
                 </div>
                 </div>
         
  </Grid>
  </Grid>

  
  </Grid>
  <Grid container lg={6}>
     <Grid lg={6}> 
         <div className='pt-10  justify-center flex  '>
         <Avatar  src={name1} sx={{width : 250, height : 250}} />
         </div>
         <div className=' pt-4  flex justify-center gap-x-10 '>
              <span className='h-fit'>
                  <TextAnim 
                  text1={'محسن پاکنژاد'}
           
                  speed={50}
                   repeat={0} 
                   style={{fontSize : '15px'}}/>
              </span>
              <span className='h-fit'>
                  <TextAnim 
                
                 text2={'وزیر نفت'}
                  speed={20}
                   repeat={0} 
                   style={{fontSize : '15px'}}/>
              </span>

            
            
         </div>
     </Grid>
     <Grid lg={6}>
         <div className=' flex-col '>
         <div  className='p-2 pt-4 flex justify-center'>
         <div className='gap-x-3 flex justify-center items-center' >
             <span className='font-bold text-4xl'>۸۰</span>
             <span>درجه</span>
         </div>
         </div>
         <div className='flex justify-center h-[200px]' >
             <DamaSanjChart />
             
         </div>
         <Grid container>
           <Grid className='p-1 pt-5' lg={6}>
           <div className='border bg-[#134B70]  h-[50] rounded-[25px]'>
                 <div className=' p-3 text-white flex items-center justify-between '>
                <p className='text-[14px]'>دمای قبلی :</p>
                <p className='font-bold ' >۸۸</p>
                 </div>
                 
           </div>
           </Grid>
         <Grid className='p-1 pt-5' lg={6}>
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
    
  </Grid>

  </Grid>
  
   <Grid container lg={12} className=' pt-4'>
      <Grid className='p-2' lg={6}>

      <Paper sx={{borderRadius : '25px'}} className=' duration-300 rounded-[20px] h-[416px]  overflow-scroll no-scrollbar  align-middle items-center   justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl ' >
      <div className='bg-[#FC4100] sticky top-0 z-50 flex justify-center text-[15px] text-white  items-center drop-shadow-lg  h-8 rounded-t-[25px]'>
          پست های برتر       
      </div>
      <Grid container className='items-center' >
      <Grid lg={6} className='flex justify-start items-center p-3'>
             <FilterPlatform color={'bg-[#ffaa8e]'}  />
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
                  {/* rounded-[10px]  border  border-[#c8e4fb] */}
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





      <Grid lg={4}>
      <Grid className='p-2'>
        <PaperCharts  bgtitle={'bg-[#FC4100]'} height={'h-[200px]'} title={'سهم پلتفرم'} chart={
          <>
           <div className='p-2'>
           <FilterPlatform color={'bg-[#ffaa8e]'}  />
                  </div>
                  <div className='flex justify-between'>
                      <div className=' flex-col pr-4'>
                      <div className='items-center '>
                         <div className='flex justify-center items-center gap-x-2 p-3'>
                          <span className='font-bold text-3xl'>۲۸۸۸</span>
                     
                          </div>
                      </div>
                      <div className='flex justify-center text-[15px]'>
                          بیشینه سهم
                      </div>
                      </div>
                     <div>
                     <PieChartMain height={120} width={250} marginLeft={45}  />
                     </div>
                  </div>
          </>
        }/>


        </Grid> 

        <Grid className='p-2' >

      <PaperCharts  bgtitle={'bg-[#FC4100]'} height={'h-[200px]'} title={'سهم جریانات'} chart={
          <>
           <div className='p-2'>
                  <FilterPlatform width={'w-24'} color={'bg-[#ffaa8e]'}/>
                  </div>
                  <div className='flex justify-between'>
                      <div className=' flex-col pr-4'>
                      <div className='items-center '>
                         <div className='flex justify-center items-center gap-x-2 p-3'>
                          <span className='font-bold text-3xl'>۲۸۸۸</span>
                     
                          </div>
                      </div>
                      <div className='flex justify-center text-[15px]'>
                          بیشینه سهم
                      </div>
                      </div>
                     <div>
                     <PieChartMain height={120} width={250} marginLeft={45}  />
                     </div>
                  </div>
          </>
        }/>
        </Grid>

      </Grid>
      <Grid className='p-2' lg={2}>
      <PaperCharts  bgtitle={'bg-[#FC4100]'} height={'h-full'} title={'فراوانی عبارات'} chart={
          <>
       
              
        
              <FaravaniText data={faravanitext}/>
          </>
        }/>
     
      </Grid>
      <Grid lg={6} className='p-2'>
          <Grid>
          <PaperCharts  bgtitle={'bg-[#FC4100]'} height={'h-[207px]'} title={' روند مثبت و منفی محتوا'} chart={
          <>
             <div className='p-2'>
                 <div className='p'>

              </div>
                  <div className='mr-[1px]  '>
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
          <PaperCharts  bgtitle={'bg-[#FC4100]'} height={'h-[195px]'} title={'گزارش سایرین'} chart={
          <>
              <Grid lg={12} container>

<Grid container className='' lg={8}>

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
<Grid className='' lg={4}>
  <div className='flex justify-center pt-5 px-10 '>
      <div className='flex-col '>
      <div className='   relative flex items-center   '>
              <input type="search" className="search  bg-[#ffaa8e] w-full pr-[3px] h-8 rounded-lg focus:border focus:border-red-400 "  />
              <MdSearch style={{color  : "white"}}  className='absolute bg-[#FC4100] shadow-sm drop-shadow-sm left-0 h-full w-7 rounded-l-lg  '/>
              </div> 



    <div className=' pt-2'>
    <FilterPlatform color={'bg-[#ffaa8e]'}  />
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
        <PaperCharts  bgtitle={'bg-[#FC4100]'} height={'h-[207px]'} title={'کاربران اثر گذار'} chart={
          <>
              <div className='p-2'>
                  <FilterPlatform width={'w-20'} color={'bg-[#ffaa8e]'}/>
              </div>
   
       <div>
        <BarColumnChart colorBar={'#ffaa8e'} marginTop={20} marginRight={20} marginLeft={60}  height={130}  padding={0.42}/>
       </div>
          </>
        }/>
   
  
        </Grid>
    
   
        <Grid>
        <PaperCharts   bgtitle={'bg-[#FC4100]'} height={'h-[195px]'} title={'گروه های اثر گذار'} chart={
          <>
             <div className='p-1'>
        <div className='pr-2 pt-2'>
                    <FilterPlatform color={'bg-[#ffaa8e]'} width={'w-20'}/>
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
  

  <Grid lg={1} className='   bg-[#102C57] p-2 flex overflow-scroll no-scrollbar justify-center'>
   <div className='flex-col space-y-[26px] '>

  {dataTasvir.map((data)=> (
         <>
         <div>
         <Link  >
          <Avatar  src={data} sx={{width : 60, height : 60}} className='size-60'/>
         </Link>
         </div>
         </>
  ))}
   </div>
  </Grid>
 
  </Grid>

</> 
  )
}

export default ChehreNamaVezaratNaftPage
