import React from 'react'
import { LuEye } from "react-icons/lu";
import { Grid } from '@mui/material';
import PaperCharts from '../components/PaperCharts'
import BarColumnChart from '../components/Charts/BarColumnChart';
import BubbleChart from '../components/Charts/BubbleChart';
import PieChartMain from '../components/Charts/PieChartMain';
import FilterZaman from '../components/FilterZaman';
import HeatMapChart from '../components/Charts/HeatMapChart';
import LineChartMulti from '../components/Charts/LineChartMulti';
import WordCloudForod from '../components/WordCloudForod';
import PostBartarForod from '../components/PostBartarForod';
import KarbaranAsarGozarForod from '../components/KarbaranAsarGozarForod';
import DamaSanjChart from '../components/Charts/DamaSanjChart';
import { MdSearch } from 'react-icons/md';
import CardMasrafForod from '../components/CardMasrafForod';
import { ColorForodPage, ColorMainForodPage } from '../Theme';
import RadarCharts from '../components/Charts/RadarCharts';
import ChannelBartarForod from '../components/ChannelBartarForod';
import IconShabakeForod from '../components/IconShabakeForod';
import { dataChannelbartar, dataFaravaniEbarat} from '../components/dataChannelbarta';
import PostHayeBartarForod from '../components/PostHayeBartarForod';

import PieChartAll from '../components/Charts/PieChartAll';
import AbrEbarat from '../components/Charts/AbrEbarat';

function ForodPage() {



   

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

const colorCard = '#19dce3'
  return (
    <Grid className='h-screen px-[18px] pt-2' container>
        <Grid container lg={12}>
     
            <Grid lg={4} md={12} sm={12}>
            <Grid className='p-2  space-y-4 '>
           
            <PaperCharts height={'h-[465px]'} bgtitle={ColorMainForodPage} title={'  گونه ها'} chart={
              <>
              {/* <RadarCharts height={300}/> */}
              <div>
             
                <div className='flex justify-between pt-3 px-6'>
                     <div>
                    
      <>
     
      
         <div dir='rtl' className='   flex'>
          <div className='border bg-yellow-300 transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[40px] rounded-lg mr-4 mt-4'>
              <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
          </div>
          <div className='flex-col  mt-3 mr-3'>
              <div className=' text-black text-[15px] bg'>
             مجموع مصرف
              </div>
              <div className='text-sm font-bold text-black'>
              ۸۲
              </div>
          </div>
         </div>
         <div dir='rtl' className='   flex'>
          <div className='border bg-yellow-300 transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[40px] rounded-lg mr-4 mt-4'>
              <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
          </div>
          <div className='flex-col  mt-3 mr-3'>
              <div className=' text-black text-[15px] bg'>
             مجموع مصرف
              </div>
              <div className='text-sm font-bold text-black'>
              ۸۲
              </div>
          </div>
         </div>
      </>
                     </div>

                     <div>
                    
                    <>
                    <div dir='rtl' className='   flex'>
          <div className='border bg-red-300 transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[40px] rounded-lg mr-4 mt-4'>
              <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
          </div>
          <div className='flex-col  mt-3 mr-3'>
              <div className=' text-black text-[15px] bg'>
             مجموع مصرف
              </div>
              <div className='text-sm font-bold text-black'>
              ۸۲
              </div>
          </div>
         </div>
         <div dir='rtl' className='   flex'>
          <div className='border bg-yellow-300 transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[40px] rounded-lg mr-4 mt-4'>
              <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
          </div>
          <div className='flex-col  mt-3 mr-3'>
              <div className=' text-black text-[15px] bg'>
             مجموع مصرف
              </div>
              <div className='text-sm font-bold text-black'>
              ۸۲
              </div>
          </div>
         </div>
        
        
                    </>
                                   </div>
                    </div>
              </div>
              </>
            }/>
             <PaperCharts height={'h-[300px]'} bgtitle={ColorMainForodPage} title={'کانال های برتر'} chart={
              <>
                    <div className='p-2'>
                    <div className='h-[200px]   rounded-[25px]  overflow-scroll no-scrollbar'>
                      <ChannelBartarForod data={dataChannelbartar}/>
                    </div>
                    </div>
              </>
            }/>
             <PaperCharts height={'h-[500px]'} bgtitle={ColorMainForodPage} title={'فراوانی عبارات'} chart={
              <>
            
                  <div className='pt-2'>
                  <div className='h-[400px] p-2   rounded-[25px]'>
                    {/* <WordCloudForod height={'430'}  marginTop={5} /> */}
                   </div>
                  </div>
              </>
            }/>

            <PaperCharts height={'h-[549px]'} bgtitle={ColorMainForodPage} title={'پست های برتر'} chart={
              <>
          
          <div>
          <div className='flex-col p-2 space-y-2 h-[470px] overflow-scroll no-scrollbar'>
         {data.map((data , index)=> (
          <>
           <div key={index} className={` border  rounded-[20px] p-1 border-[#c8e4fb]   '}`}> 
            <p className='p-2 text-[14px] font-IRANSansMedium '>
            {data.shbake}
            </p>
            <div className={`  w-full h-[70px]    pr-2  text-[15px]  text-justify   border-white  no-scrollbar overscroll-y-contain overflow-scroll break-words `}>
               <p>
                {data.title}
                </p>  
            </div>  
          </div>
          </>
         ))}
    
              
               
          </div>
          </div>
              </>
            }/>
            
            <PaperCharts bgtitle={ColorMainForodPage}  title={'میانگین انتشار محتوا در یک هفته اخیر'} chart={<>
              <LineChartMulti height={'155px'}/>
            </>}/>
            </Grid>
           
               
            </Grid>
            <Grid lg={8} md={12} sm={12} className=''>
              <Grid className='p-2' lg={12}>
                <PaperCharts bgtitle={ColorMainForodPage}  height={'h-[250px]'} title={'داده نما'} chart={
                  <>
                  <Grid container>
                  <Grid className='' lg={6} sm={6}>
                  <div className='flex justify-start '>
                  <div className='  h-[130px] '>
                <Grid lg={12} className=' p-2' >
                <div className='flex   '>
                <div className='p-2 ' >
                <div className=' px-2   relative flex items-center  w-[300px]  '>
                <input style={{backgroundColor : ColorForodPage}} type="search" className="search  bg-blue-200 w-full pr-[3px] h-9 rounded-lg focus:border focus:border-red-400 "  />
                <MdSearch  style={{color  : "white" , backgroundColor : ColorMainForodPage}}  className='absolute bg-blue-400   shadow-sm drop-shadow-sm left-0 h-full w-7 rounded-l-lg  '/>
                </div>
                </div>
                </div>
                </Grid>
                <Grid lg={12  }>
          
                </Grid>
                </div>
                  </div>
                  </Grid>
               
                 <Grid lg={6} sm={6}>
                 <IconShabakeForod/>
                 </Grid>
                 
                  </Grid>
                  <Grid container lg={12} sm={12} md={12}>
                    <Grid className='p-2' lg={3} sm={3} >
                    <CardMasrafForod/>
                    </Grid>
                    <Grid className='p-2' lg={3} sm={3}>
                    <CardMasrafForod/>
                    </Grid>
                    <Grid className='p-2' lg={3} sm={3}>
                    <CardMasrafForod/>
                    </Grid>
                    <Grid className='p-2' lg={3} sm={3}>
                    <CardMasrafForod/>
                    </Grid>
                  </Grid>
                  </>
                }/>
              </Grid>

                <Grid container lg={12}>
                     <Grid lg={4} sm={4} className='p-2'>
                 {/* <PaperCharts height={'h-[400px]'} title={'فراوانی عبارات'} bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'}
                 chart={
                    <>
                      <div className='overflow-scroll h-[359px] no-scrollbar'>
                      <FaravaniEbaratForod data={dataFaravaniEbarat}/>
                      </div>
                    </>
                 }
                 /> */}
            
                 </Grid>

                 <Grid lg={8} sm={8} className='p-2'>
                 <PaperCharts height={'h-[400px]'} title={'احساسات جامعه'} bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} chart={
      <>
        
      </>
    }/>
                 
            
                 </Grid>
                <Grid className='p-2' sm={4} lg={3}>
              <PaperCharts height={'h-[400px]'} title={'دماسنج'} bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'}
              chart={
                <>
                <div className='flex pt-10 p-2  justify-center h-[200px]' >
                {/* <DamaSanjChart /> */}
               </div>
              <div className='flex pt-3 justify-center'>
              <div className='text-[13px]  justify-center mx-auto mt-9'>
                            <div className='flex w-full   gap-3'>
                            <span className='w-20'>کمترین دما</span>
                            <span className='text-black font-bold'> 
                            ۲۸۲
                            </span>
                            </div>
                            <div  className='flex  w-full  gap-3'>
                            <span className='w-20'>بیشترین دما</span>
                            <span className='text-black font-bold'> 
                            ۲۸۲
                            </span>
                            </div>
                             <div className='flex w-full   gap-3'>
                             <span className='w-20'>میانگین دما</span>
                             <span className='text-black font-bold'> 
                             ۲  
                            </span>
                             </div>
                            </div>
              </div>
                </>
              }
              />
              </Grid>
              <Grid className='p-2'  sm={8} lg={9}>
              <PaperCharts height={'h-[400px]'} title={'روند موضوعات'} bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'}
                 chart={
                    <>
                      {/* <BubbleChart height={'360px'} marginRight={30} marginTop={20}/> */}
                    </>
                 }
                 />
    </Grid>
                </Grid>
                <Grid container >
                <Grid lg={4}  sm={12} className='p-2'>
                 <PaperCharts height={'h-[400px]'} title={'فراوانی عبارات'} bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'}
                 chart={
                    <>
                      <div className='overflow-scroll h-[359px] no-scrollbar'>
                      <AbrEbarat data={dataFaravaniEbarat}/>
                      </div>
                    </>
                 }
                 />
            
                 </Grid>

                 <Grid lg={8} sm={12} className='p-2'>
                 <PaperCharts height={'h-[400px]'} title={'احساسات جامعه'} bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} chart={
      <>
     
      </>
    }/>
                 
            
                 </Grid>

    <Grid className='p-2' lg={4} sm={12}>
        <PaperCharts height={'h-[535px]'} title={'کاربران برتر'} bgtitle={ColorMainForodPage} chart={
          <>
          <div className='h-[470px] overflow-scroll no-scrollbar'> 
          <PostBartarForod />
          </div>
          </>
        }/>
    </Grid>
    <Grid className='p-2 overflow-hidden ' lg={8}  sm={12}>
        <PaperCharts height={'h-[535px]'} title={'پست های برتر'} bgtitle={ColorMainForodPage} chart={
          <>
            <div className='h-[470px] overflow-scroll no-scrollbar  rounded-[25px] m-2'> 
                  <div className='space-y-2 w-full overflow-scroll no-scrollbar px-2  mx-0  pt-2'>
            {data.map((data)=>(
              <>
              
           <PostHayeBartarForod data={data}/>

              </>
            ))}
            </div>
                  </div>

          
          </>
        }/>
    </Grid>

    <Grid container>

      <Grid  className='p-2'  lg={6}>
     
        <PaperCharts height={'h-[417px]'} title={'جریانات فراوانی'}  bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} 
      chart={
        <>
            <div className='h-[735px]   rounded-[25px]'>
            <PieChartAll height={'350px'}/>
            
            </div>
        </>
      }
      
      />

        </Grid>
        <Grid className='p-2'   lg={6}>
        <PaperCharts height={'h-[417px]'} title={'جریانات/کاربران اثرگذار'}  bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} 
      chart={
        <>
        <div className='h-[765px] rounded-[25px]'>
             
              <KarbaranAsarGozarForod  height={'h-[380px]'}/>
          
            </div>
        </>
      }
      
      />
        </Grid>
      </Grid>
      <Grid>
        
      </Grid>

    </Grid>
    
                </Grid>
                
            </Grid>
     
            <Grid  container  lg={12}>
            <Grid className='p-2' lg={3}>
            <PaperCharts height={'h-[484px]'} title={'فراوانی عبارات نهادها '}  bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} chart={
              <>
                <div className=' h-[450px] overflow-scroll rounded-[25px] p-2 no-scrollbar'> 
 
              <PostBartarForod type={'نهاد'} />
          </div>
              </>
            }/>
            
            </Grid>
            <Grid className='p-2' lg={5}>
            <PaperCharts height={'h-[484px]'} title={'نهادها '}  bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} chart={
          <>
           <div className=' overflow-scroll  rounded-[25px] p-2 no-scrollbar'> 
          {/* <HeatMapChart minColor={'#34e1eb'} maxColor={'#3459eb'} height={'440'}/> */}
          </div>
          </>
         }/>
            </Grid>
            <Grid className='p-2' lg={4}>
            <PaperCharts height={'h-[484px]'} title={'ابر عبارات'}  bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'}  chart={
          <>
       
            {/* <WordCloudForod height={'430px'}/> */}
         
          </>
        }/>
            </Grid>
      
 
      
        </Grid>
        <Grid  container  lg={12}>
          <Grid className='p-2' lg={4}>
          <PaperCharts height={'h-[400px]'} title={'فراوانی رویکر مثبت نهاد ها '}  bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} chart={
              <>
              <div className='p-2 rounded-[25px]'>
      
      <div className='flex justify-center pb-2 pt-2'>
      <FilterZaman color={ColorForodPage}/>
      </div>
      <BarColumnChart height={300} 
        cat={[' تست' ,
        ' تست' ,
        ' تست' ,
        ' تست' ,
        ' تست' ,
  
        
         ]}
      />
      </div>
              </>
            }/>
        
        
       
          </Grid>
          <Grid className='p-2' lg={4}>
            <PaperCharts height={'h-[400px]'} title={'کاربران اثرگذار'}  bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} chart={
              <>
               <div className='h-[350px] overflow-scroll  rounded-[25px] p-1 no-scrollbar'> 
              <div className='flex justify-center pb-2 pt-2'>
              <FilterZaman color={ColorForodPage} />
              </div>
          <PostBartarForod />
          </div>
              </>
            }/>
          </Grid>
          <Grid className='p-2' lg={4}>
            <PaperCharts height={'h-[400px]'} title={'کاربران اثرگذار'}  bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} chart={
              <>
              
              </>
            }/>
          </Grid>
    

        </Grid>
   
       
    <Grid container lg={12}>

    </Grid>
 
  </Grid> 
  )
}

export default ForodPage
