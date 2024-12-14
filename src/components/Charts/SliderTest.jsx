import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import { Grid } from '@mui/material'
import { TbBrandTelegram } from 'react-icons/tb'


function SliderTest({data, preView , height , style , time}) {


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
      <div ref={sliderRef} className="keen-slider      ">
      {data?.map((data)=>(
        <>
           <Grid  key={data.id} lg={12} container className=' h-fit keen-slider__slide    rounded-[25px]'>
     <Grid  lg={12} className='text-[12px] flex justify-between p-4 pr-3 w-6    h-2   items-center  break-words  ' >
        <div className='flex items-center'>
        <span>
            <TbBrandTelegram />
        </span>
        <span>
        {data.channel_name}
        </span>
        </div>
        <div>
        <Grid className='text-[12px] flex p-2  gap-x-2  items-center px-3 rounded-[25px]   '
      lg={12}> 

     
    
      <div className='    text-[12px] text-stone-300     '>
        {data.release_date_post}
      </div>
     
       </Grid>
        </div>
      </Grid>
    <Grid  lg={12}  className='p-2  ' >
      <Grid  onClick={()=> {togglePost(data.id)}}    className={`no-scrollbar text-justify px-3 text-[15px] ${state === data.id  ?  'h-full' : 'h-[90px]'} transition-all duration-300 text-[13px]   overflow-scroll break-words`}
        >
            {data.text_clean}
        </Grid>
      
     
    </Grid>
   
    </Grid>
     
       
        
        </>
      ))}
      
      
     

      


    
    </div>
  )
}

export default SliderTest







