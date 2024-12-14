import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function RasadSlider() {
    
    const settings = {
        dots: true,
        infinite: true,
       
        slidesToShow: 3,
        slidesToScroll: 1,
        
      };



  return (
    <div
    
     className="slider-container    ">
    <Slider centerPadding='200px'  {...settings} rtl='true'  className='h-60 border w-[900px]  '    >
        <div className='h-full p-1 text-[18px] bg-yellow-300   w-full text-right  '>
          <p>
            منبع
          </p>
          <p className=' w-full  h-32         drop-shadow-xl no-scrollbar overscroll-y-contain overflow-scroll  text-sm   text-[16px]'>
          مشسیمشتینمسشتیمنشتیسشمنیتسشنمیتسشمنینمتیمنشتسیشتیسنشمیتشنشمیتشنشمیتشنشمیتشنشمیتشننشمیتشنشمیتشنشمیتششمیتشنشمیتشمنمشسیمشتینمسشتیمنشتیسشمنیتسشنمیتسشمنینمتیمنشتسیشتیسنشمیتشنشمیتشنشمیتشنشمیتشنشمیتشننشمیتشنشمیتشنشمیتششمیتشنشمیتشمنمشسیمشتینمسشتیمنشتیسشمنیتسشنمیتسشمنینمتیمنشتسیشتیسنشمیتشنشمیتشنشمیتشنشمیتشنشمیتشننشمیتشنشمیتشنشمیتششمیتشنشمیتشمنمشسیمشتینمسشتیمنشتیسشمنیتسشنمیتسشمنینمتیمنشتسیشتیسنشمیتشنشمیتشنشمیتشنشمیتشنشمیتشننشمیتشنشمیتشنشمیتششمیتشنشمیتشمنمشسیمشتینمسشتیمنشتیسشمنیتسشنمیتسشمنینمتیمنشتسیشتیسنشمیتشنشمیتشنشمیتشنشمیتشنشمیتشننشمیتشنشمیتشنشمیتششمیتشنشمیتشمن
          </p>
          <div className='flex justify-between text-[12px]  '>
            <span>تعداد بازدید</span>
            <span>تاریخ</span>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
    
      
     
    </Slider>
  </div>
  )
}

export default RasadSlider
