
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardAfkarSanji({data , titleRightButton , titleLeftButton , titleColor , bgtitleColor}) {
const URL = 'http://10.32.227.125:8000/'
  const navigate = useNavigate()
  
  return (
    <div   className={` w-52  h-[240px]   rounded-[25px]    shadow-md     duration-300     justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl`  }>
        <div className='flex ' >
           
            <img src={data.shell} alt=" " className='rounded-t-[25px] w-full h-[140px] ' />                  
        </div>
        <div className='flex justify-center bg overflow-hidden  break-words text-center  mx-9  pt-2 font-FontIos text-[15px]'>
            <p className='h-11 overflow-hidden '>

            {data.title}
            </p>
        </div>

        <div className='flex justify-center  gap-4 pt-2 font-FontIos text-[13px] w-full bg  '>
        <Button
      
                          
                            color='primary' variant='outlined'
                            sx={{backgroundColor : titleColor ? titleColor : '#0c1b41' , fontFamily : 'fontIOS' , fontSize : '12px' , borderRadius : 25 , color : bgtitleColor ? bgtitleColor : 'white'}}
                            className="flex-grow-1 flex  ">
                              <a href={data.document}  download >
                              {titleRightButton ? titleRightButton : 'دانلود'}
                              </a>
                            </Button>
                               <Button
      
                                onClick={()=>navigate(data.link)}
                                color='primary' variant='outlined'
                                sx={{backgroundColor : '' , fontFamily : 'fontIOS' , fontSize : '12px' , borderRadius : 25 , color : 'black' }}
                                className="flex-grow-1 flex ">{titleLeftButton ? titleLeftButton : 'اشتراک'}</Button>
        </div>
     
    </div>
  )
}

export default CardAfkarSanji
