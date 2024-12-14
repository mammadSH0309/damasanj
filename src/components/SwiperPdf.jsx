import React from 'react'

import { Swiper, SwiperSlide  } from 'swiper/react'
import 'swiper/css';
import { Card, CardContent, CardMedia } from '@mui/material';
function  SwiperPdf() {


    const data = [
        {
            title : 'تست',
            time : '9 ماه پیش',
            img : 'https://server.belink.ir/images/6536c8db7e4c39bc6048717a.png?size=medium'
        },
        {
            title : 'تست',
            time : '9 ماه پیش',
            img : 'https://server.belink.ir/images/6586954fd023744e1c0bb112.png?size=medium'
        },
        {
            title : 'تست',
            time : '9 ماه پیش',
            img : 'https://server.belink.ir/images/6536c8db7e4c39bc6048717a.png?size=medium'
        },
        {
            title : 'تست',
            time : '9 ماه پیش',
            img : 'https://server.belink.ir/images/6586954fd023744e1c0bb112.png?size=medium'
        },
        {
            title : 'تست',
            time : '9 ماه پیش',
            img : 'https://server.belink.ir/images/65869722d023744e1c0bb118.png?size=medium'
        },
        {
            title : 'تست',
            time : '9 ماه پیش',
            img : 'https://server.belink.ir/images/6536c8db7e4c39bc6048717a.png?size=medium'
        },
        {
            title : 'تست',
            time : '9 ماه پیش',
            img : 'https://server.belink.ir/images/6536c8db7e4c39bc6048717a.png?size=medium'
        },
        {
            title : 'تست',
            time : '9 ماه پیش',
            img : 'https://server.belink.ir/images/6536c8db7e4c39bc6048717a.png?size=medium'
        },
    ]
  return (
    <Swiper
    spaceBetween={3}
    slidesPerView={5}
    breakpoints={{
        1500: {
            slidesPerView: 5,
              spaceBetween : 2
          },
        1400: {
            slidesPerView: 4,
              spaceBetween : 2
          },
        1300: {
          slidesPerView: 4,
            spaceBetween : 10
        },
        1200: {
            slidesPerView: 3,
            spaceBetween : 10
          },
        1100: {
            slidesPerView: 3,
            spaceBetween :10     
        },
        800: {
            slidesPerView: 3,
            spaceBetween :10     
        },
        400: {
            slidesPerView: 1,
               
        },
        350: {
            slidesPerView: 1,
            spaceBetween :10     
        },
        150: {
            slidesPerView: 1,
            spaceBetween :10     
        },
      }}
    
  
  >
   
    {data.map((data , i)=> (
        <>
         <SwiperSlide key={i}>
            <Card onClick={()=>{navigate(data.link)}} className= 'transition-all z-50   will-change-auto border-[#98c1d9]   group  duration-200 cursor-pointer   w-60 h-56 hover:transition hover:-translate-y-2  hover:duration-300 hover:bg-[#c6d8e4] hover:shadow-2xl border  border-[#7796AB]  '>
                <CardMedia sx={{borderRadius : '20px'}} className='p-2  h-[115px] z-50 rounded-md'
                    component="img"
                    height='20px'
                    src={data.img}
                    
                    
                />
                
                <div className='h-[75px] will-change-scroll  text-md overflow-hidden  text-wrap p-2  '>
                    {data.title}
                </div>
                <div className='text-sm   flex p-1  justify-between items-center '>
                    <p className='text-slate-500 text-[11px]'>
                    {data.time}
                    </p>
                    <p className=' ml-2 px-2 delay-200 group-hover:delay-300 text-[11px]  duration-1000 transition   text-[#98c1d9] group-hover:transition group-hover:duration-1000  rounded-md bg-yellow-700 group-hover:block hidden  '>
                        دانلود 
                    </p>
                </div>
         
            </Card>
        </SwiperSlide>
        </>
    ))}
 
  </Swiper>
  )
}

export default SwiperPdf



// <SwiperSlide>
//             <Card onClick={()=>{navigate(data.link)}} className= 'transition-all  border-[#98c1d9] group  duration-200 cursor-pointer  w-60 h-56 hover:transition hover:-translate-y-2  hover:duration-300 hover:bg-[#c6d8e4] hover:shadow-2xl border  border-[#7796AB]  '>
//                 <CardMedia sx={{borderRadius : '20px'}} className='p-2  h-[115px]  rounded-md'
//                     component="img"
//                     height='20px'
                    
                    
//                 />
                
//                 <div className='h-[75px] text-md overflow-hidden  text-wrap p-2  '>
//                     سلامسلام سلام تایتل تایتل تایتل تایتلتایل تایل تایل تیال
//                 </div>
//                 <div className='text-sm   flex p-1  justify-between items-center '>
//                     <p className='text-slate-500'>
//                     تاریخ
//                     </p>
//                     <p className=' ml-2 px-2 text-[11px] text-[#98c1d9]  rounded-md bg-yellow-700 group-hover:block hidden  '>
//                         مطالعه
//                     </p>
//                 </div>
         
//             </Card>
//     </SwiperSlide>
