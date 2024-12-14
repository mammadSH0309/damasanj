import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import { Grid } from '@mui/material'
import { TbBrandTelegram } from 'react-icons/tb'


function SliderAll({data  ,CustomDiv , preView , height , style , time}) {


  const [state  , setState] = useState(null)

  const togglePost = (id) => {
    if(id === state) {
      setState(null)
    } else setState(id)
    // setState(state === id ? null : id)
  }
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop:true, 
            slides: {
                perView: preView? preView :1,
                spacing: 5,
                
              },
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 5000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
          // add plugins here
        ]
      )

  return (
      <div ref={sliderRef} className="keen-slider h-full      ">
         {data.map((item, index) => 
            (  
              <div   className={`keen-slider__slide  `}> 
        
             <CustomDiv key={index} item={item} />
              </div>
            ))} 
       
    </div>
  )
}

export default SliderAll







