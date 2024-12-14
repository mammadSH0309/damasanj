import { Grid } from '@mui/material'
import React from 'react'
import useApiParams from '../store'
import { Api } from '../query/sedasima/rasadOnline'
import LoadingProgress from './LoadingProgress'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import SliderAll from './SliderAll/SliderAll'
import useNumPersian from '../customhook/useNumPersian'
function MasadighMoj({ url ,key , param }) {
     
  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , param? param : params)

if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>


const dakheli = data?.filter((i)=> i.platform.toLowerCase() === 'dakheli')
const instagram = data?.filter((i)=> i.platform.toLowerCase() === 'instagram')
const twitter = data?.filter((i)=> i.platform.toLowerCase() === 'twitter')



const sliderDiv = ({item }) => (
   <>
     <div className={`  w-full h-[100px]    pr-2   items-start  break-words     border-white  no-scrollbar overscroll-y-contain   text-sm`}>
    <p  className={`h-[79px]  text-justify transition-all duration-300  break-words px-2 overflow-scroll no-scrollbar`}>
     {item?.description}
     </p>  
     <div className='flex pl-2 pt-1  items-center justify-end gap-x-1'>
     <p className='pt-[3px]'>
      {useNumPersian(item.like_count)}
     </p>
     <p >
      <FavoriteBorderIcon style={{fontSize : 16}}/>
     </p>
     </div>
 </div>
   </>
  )



  return (
    <Grid className='gap-y-2 space-y-2 px-1 pt-1'>
    <div className='text-[13px] pr-1'>
         اینستاگرام
     </div>
     {instagram ? 
     <>
     <SliderAll  data={instagram} CustomDiv={sliderDiv}/>
     </> 
     :
      <>
     </>}
       <div className='text-[13px] pr-1'>
     توییتر
     </div>  
     {twitter ? 
     <>

      <SliderAll  data={instagram} CustomDiv={sliderDiv}/>
  
     </> 
     :
      <>
     </>}
<div className='text-[13px]  pr-1'>
         پیام رسان داخلی
  </div>
  {dakheli.length !== 0 ? 
     <>
     <SliderAll  data={dakheli} CustomDiv={sliderDiv}/>
     </> 
     :
      <>
      <div className='text-[14px] flex justify-center items-center  align-middle h-full pt-10'>
      دیتایی وجود ندارد
      </div>
     </>
     }
   
    </Grid>
  )
}

export default MasadighMoj
