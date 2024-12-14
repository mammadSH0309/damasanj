import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const animation = { duration: 70000, easing: (t) => t }
function RevayateAval() {
    const [sliderRef] = useKeenSlider({
        rtl : true , 
        loop: true,
    
        renderMode: "precision",
        drag: false,
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      })
      return (
        <div ref={sliderRef} className="keen-slider ">
          <div className="keen-slider__slide number-slide1 w-fit font-IRANSansMedium justify-end flex ">
          اگر می خواهید با اصلاحات اقتصادی به مردم فشار بیاورید،فیلترینگ را بردارید و آزادیهای اجتماعی را بیشتر کنیدتا جامعه تحملش بالا برو
          </div>
       
        </div>
      )
}

export default RevayateAval
