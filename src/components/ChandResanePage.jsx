import React, { useState } from 'react'
import useApiParams from '../store'
import { Api } from '../query/sedasima/rasadOnline'
import LoadingProgress from './LoadingProgress'

import { FiHeart } from 'react-icons/fi'
import useNumPersian from '../customhook/useNumPersian'
import ModalImages from './ModalImages'
import { Masonry } from '@mui/lab'
import { Grid } from '@mui/material'
function ChandResanePage({key , url , param , cartName}) {

    const {params , setParams} = useApiParams()

  
    const {data , isLoading ,  isFetching   } = Api( key , url  , param ? param : params )
   
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const [selectedImage, setSelectedImage] = useState(null)
     const handleOpen = (image) => 
      { 
        setSelectedImage(image) 
        setOpen(true) 

      }

   
   
  if(isLoading) return <LoadingProgress/>
  if(isFetching) return <LoadingProgress/>
  return (
    <>
  <Grid lg={12} className='flex justify-center pt-6'>
  <Masonry
  defaultColumns={4}
  defaultSpacing={1}
 
   className='' columns={5} spacing={5}>
      
  {
    data.map((data , index)=> (
      
      <>
      <ModalImages 
      image={selectedImage} 
      id={selectedImage} 
      open={open}
       handleClose={handleClose} 
       handleOpen={handleOpen} />
      <div  
      key={index}
       className='' style={{backgroundSize : 'cover' , backgroundPosition : 'center'}}> 
       
        
        <img onClick={()=>handleOpen(data.image)}  className='rounded-3xl transition-all duration-300 hover:opacity-50 cursor-pointer shadow-md w-full  '  
        src={data.image} loading='lazy' alt="" style={{width : '100%' , height : '100%' , objectFit : 'cover'}}
         />
       
      
        <div className='flex justify-between pt-2 px-5 items-center '>
          <div className='text-[13px] font-IRANSansMedium'>
            {data.title}
          </div>
          <div className='text-[13px] font-IRANSansMedium flex items-center gap-x-1'>
            <div className='pt-[2px]'>
          {useNumPersian(data.view)}
            </div>
            <div>
            <FiHeart style={{fontSize :20}}/>
            </div>
          </div>
        </div>
      </div>
      </>
     
      
    ))
  }
  </Masonry>
  </Grid>
  
  </>
 
  )
}

export default ChandResanePage
