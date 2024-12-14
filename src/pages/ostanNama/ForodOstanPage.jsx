import React from 'react'
import { LuEye } from "react-icons/lu";
import { Grid } from '@mui/material';
import PaperCharts from '../../components/PaperCharts'
import BarColumnChart from '../../components/Charts/BarColumnChart';
import BubbleChart from '../../components/Charts/BubbleChart';
import PieChartMain from '../../components/Charts/PieChartMain';
import LineChartMulti from '../../components/Charts/LineChartMulti';
import WordCloudForod from '../../components/WordCloudForod';
import FaravaniEbaratForod from '../../components/FaravaniEbaratForod';
import BarChartMulti from '../../components/Charts/BarChartMulti';
import PostBartarForod from '../../components/PostBartarForod';
import ChannelBartarForod from '../../components/ChannelBartarForod'
import KarbaranAsarGozarForod from '../../components/KarbaranAsarGozarForod';
import DamaSanjChart from '../../components/Charts/DamaSanjChart';
import IconShabakeForod from '../../components/IconShabakeForod'
import { MdSearch } from 'react-icons/md';
import CardMasrafForod from '../../components/CardMasrafForod';
import { ColorForodPage, ColorMainForodPage } from '../../Theme';
import RadarCharts from '../../components/Charts/RadarCharts';
import { dataChannelbartarOstan, ostanBartar } from '../../components/dataChannelbarta';
import OstanBartar from '../../components/OstanBartar';
function ForodOstanPage() {
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
    <Grid className='h-screen overflow-scroll no-scrollbar px-[18px] pt-2 ' container>
    <Grid container lg={12}>
 
        <Grid lg={4}>
        <Grid className='p-2  space-y-4 '>
       
        <PaperCharts bgtitle={ColorMainForodPage}  title={'روند انتشار محتوا '} chart={<>
          <LineChartMulti height={'220px'}/>
        </>}/>
        
         <PaperCharts height={'h-[401px]'} bgtitle={ColorMainForodPage} title={'فراوانی عبارات'} chart={
          <>
        
          
              <div className='h-[200px]    rounded-[25px]'>
                <WordCloudForod height={'360'}  marginTop={5} />
               </div>
             
          </>
        }/>

      
        
        <PaperCharts height={'h-[401px]'} bgtitle={ColorMainForodPage} title={'کانال های برتر'} chart={
          <>
           <div className='flex pr-2 gap-x-2 justify-center pt-2'>
           
                </div>
                <div className='p-2'>
                <div className='h-[300px]   rounded-[25px]  overflow-scroll no-scrollbar'>
                  <ChannelBartarForod data={dataChannelbartarOstan}/>
                </div>
                </div>
          </>
        }/>
         <PaperCharts height={'h-[400px]'} title={'مثبت ترین استان ها'}  bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} chart={
          <>
          <div className='p-2 rounded-[25px]'>
  
  <div className='flex justify-center pb-2 pt-2'>
 
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
       
           
        </Grid>
        <Grid lg={8} className=''>
          <Grid className='p-2' lg={12}>
            <PaperCharts bgtitle={ColorMainForodPage}  height={'h-[250px]'} title={'داده نما'} chart={
              <>
              <Grid container>
              <Grid className='' lg={6}>
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
            <div className='flex justify-center pt-2 pr-1 gap-x-2'>

            </div>
            </Grid>
            </div>
              </div>
              </Grid>
              <Grid lg={6}>
              <div className=' '>
            <IconShabakeForod/>
            </div>
              </Grid>
              </Grid>
              <Grid container lg={12}>
                <Grid className='p-2' lg={3}>
                <CardMasrafForod/>
                </Grid>
                <Grid className='p-2' lg={3}>
                <CardMasrafForod/>
                </Grid>
                <Grid className='p-2' lg={3}>
                <CardMasrafForod/>
                </Grid>
                <Grid className='p-2' lg={3}>
                <CardMasrafForod/>
                </Grid>
              </Grid>
              </>
            }/>
          </Grid>

            <Grid lg={12} >
             <Grid className='p-2'>
                
            <PaperCharts height={'h-[403px]'} title={'روند موضوعات'} bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'}
             chart={
                <>
                  <BubbleChart height={'360px'} marginRight={30} marginTop={20}/>
                </>
             }
             />
             </Grid>

            </Grid>
 <Grid  container>
<Grid lg={4} className='p-2'>
                 <PaperCharts height={'h-[400px]'} title={'استان های برتر'} bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'}
                 chart={
                    <>
                      <div className='overflow-scroll no-scrollbar'>
                      <OstanBartar data={ostanBartar}/>
                      </div>
                    </>
                 }
                 />
            
                 </Grid>

                 <Grid lg={8} className='p-2'>
                 <PaperCharts height={'h-[400px]'} title={'احساسات استان '} bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} chart={
      <>
        <BarChartMulti state={'column'} colorBar={'#e9cbcb'} marginTop={30} marginRight={20} marginLeft={60}  height={360}  
         cat={[' تست' ,
         ' تست' ,
         ' تست' ,
         ' تست' ,
         ' تست' ,
         ' تست' ,
         ' تست' ,' تست' ,' تست' ,' تست' ,

         
          ]}
           />
      </>
    }/>
                 
            
                 </Grid>
    
  </Grid>
  <Grid container >
   
 
   <Grid className='p-2' lg={4}>
   <PaperCharts height={'h-[400px]'} title={'فراوانی پلتفرم'}  bgtitle={ColorMainForodPage} bgcolor={'bg-blue-500'} 
     chart={
       <>
           <div className='  rounded-[25px]'>
           <PieChartMain height={'350px'}/>
           
           </div>
       </>
     }
     
     />
   </Grid>
   <Grid className='p-2' lg={8}>
   <PaperCharts height={'h-[400px]'} bgtitle={ColorMainForodPage} title={'پست های برتر'} chart={
             <>
             <div className='flex gap-x-2 justify-center pt-2'>
       
                 </div>
                 <div>
         <div className='flex-col p-2 space-y-2 h-[320px] overflow-scroll no-scrollbar'>
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
         </div>
         </div>
             </>
           }/>
   </Grid>

 </Grid>
</Grid>          
</Grid>
 
   
 

   


</Grid> 
  )
}

export default ForodOstanPage
