import React, { useCallback } from 'react'

import {faInstagram} from '@fortawesome/free-brands-svg-icons'

import DownloadIcon from '@mui/icons-material/Download';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardMaktob({data , color , colortitle , colordec , colorsize}) {


    
  return (
    <>
      <div  style={{backgroundColor : color ? color : ''}} dir={'ltr'}  className={` w-52 gallery-item  transition-all duration-300 hover:shadow-2xl  h-48 rounded-[25px] p-1   ${color ? color : `bg-blue-100`}`}>
        <div className='flex justify-between p-2 space-y-5' >
            <div className='space-y-5'>
            <a donwload href={data.document} className='cursor-pointer'>
          
                <DownloadIcon style={{fontSize: 30 , color : 'whitesmoke' , marginTop : 4}}/>
            </a>
            <div className='flex-col'>
            <div className={`font-Calibri flexco text-md ${colorsize}`}>
            {`${data.size} MB`}
            </div>
            <div className={`font-Calibri flexco text-md ${colorsize}`}>
            {`${data.num_page} pages`}
            </div>
            </div>
            </div>
            <div className='rounded-full  w-[75px] h-[75px]  flex justify-center items-center  bg-white'>
                <FontAwesomeIcon fontSize={50} color='#01a6ac'  icon={faInstagram} width={'100%'} height={'100%'}/>
            </div>
            
        </div>
        <div className={`flex justify-end pr-1  pt-2 font-FontIos ${colortitle}`}>
            <p>
                {data.title} 
            </p>
        </div>
        <div className={`flex justify-end pr-1 pt-2 font-FontIos text-[13px]  ${colordec ? colordec : 'text-slate-400' }`}>
            <p>
                {data.datetime}
                
            </p>
        </div>
    </div>
    </>
    
  )
}

export default CardMaktob
