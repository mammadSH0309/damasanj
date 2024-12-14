import { Grid} from '@mui/material'
import React from 'react'
import '../../index.css'

import "keen-slider/keen-slider.min.css"


import { AiFillAppstore } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { AiFillApple } from "react-icons/ai";




const icons = [
  {
    title : 'add',
    icon : <IoIosSearch/>,
  },
  {
    title : 'remove',
    icon : <AiFillAppstore/>,
  },
  {
    title : 'update',
    icon : <AiFillApple/>,
  },
  {
    title : 'update',
    icon : <AiFillApple/>,
  },
  {
    title : 'update',
    icon : <AiFillApple/>,
  },
  {
    title : 'update',
    icon : <AiFillApple/>,
  },
  {
    title : 'update',
    icon : <AiFillApple/>,
  },

  {
    title : 'update',
    icon : <AiFillApple/>,
  },
  {
    title : 'update',
    icon : <AiFillApple/>,
  },

]
function HoshNegar() {
   




  return (
    <>
    <Grid container className='bg-[#EEEEEE]   h-screen' >
    <div>

    </div>
    <Grid md sm xl lg={12}  >
     <Grid lg={12} className=''>
     <div className='flex justify-center    '>
      <div className='flex bg justify-center flex-col '>
        <div className='flex justify-center text-[60px] text-red-600'>
          هوشنگار
        </div>
        <div className='relative items-center  flex  pt-3'>
          <div className='absolute left-2'>
          <IoIosSearch style={{fontSize :20}}/>
          </div>
          <input type="search" placeholder='چیزی بنویسید'  className='bg-white px-2 text-[13px]  transition-all duration-300 rounded-[40px] w-[600px] h-9 '/>
        </div>
        <div className='flex justify-center  gap-x-7  mt-3'>
       
          {icons.map((data , index)=> (
            <>
            <div key={index} draggable className='flex-col  relative  duration-300 transition-all   justify-center space-y-1 group '>
            <div className='size-10 rounded-full  flex justify-center duration-300 transition-all  group-hover:bg-blue-100 group-hover:shadow-2xl  bg-slate-200'>
              <div className='flex justify-center  items-center   h-fit w-fit rounded-full p-3 '>
                {data.icon}
              </div>
            </div>
            <div className='text-[12px] flex text-black justify-center group-hover:text-blue-400'>
              {data.title}
            </div>
          </div>
            </>
          ))}

       
        </div>
        <div>

        </div>
      </div>
      </div>
     </Grid>
    </Grid>
    </Grid>
    </>
  )
}

export default HoshNegar
