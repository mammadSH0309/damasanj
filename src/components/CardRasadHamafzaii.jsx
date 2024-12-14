import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function CardRasadHamafzaii({data , titleRightButton , titleLeftButton , titleColor , bgtitleColor}) {

    const navigate = useNavigate()
  return (
    <div   className={` w-52  h-[240px]   bg-[#f6f7f6]  rounded-[25px]    shadow-md     duration-300     justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl`  }>
    <div className='flex ' >     
        <img src={data.img} alt=" " className='rounded-t-[25px] w-full h-[140px] ' />
    </div>
    <div className='flex justify-center bg  break-words text-center font-IranSansBold flex-wrap  mx-9  pt-2  text-[15px]'>
        <p className=' '>
        {data.title}
        </p>
    </div>

    <div className='flex justify-center  gap-4 pt-2 font-FontIos text-[13px] w-full bg  '>
    <Button
     onClick={()=>navigate(data.link)}
        color='primary' variant='outlined'
         sx={{backgroundColor : '#D8EFD3' , color : '#55AD9B' ,fontFamily : 'fontIOS' , fontSize : '12px'  , borderRadius : '10px'}}
        className="flex-grow-1 flex  ">{titleRightButton ? titleRightButton : 'اشتراک'}</Button>
         <Button
          onClick={()=>navigate(data.link)}
           color='primary' variant='outlined'
           sx={{backgroundColor : '#D8EFD3' , color : '#084538',fontFamily : 'IranSans_bold' , fontSize : '12px' , borderRadius : '10px' , fontStyle : 'bold' , }}
           className="flex-grow-1 flex ">{titleLeftButton ? titleLeftButton : 'دانلود'}</Button>
    </div>
 
</div>
  )
}

export default CardRasadHamafzaii
