import React from 'react'
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoBuffer, IoMdNotificationsOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import eita from '../assets/images/eita.svg'
import Soroush from '../assets/images/Soroush.svg'
import bale from '../assets/images/bale.svg'
import { BiMessageDetail } from 'react-icons/bi'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdSearch } from 'react-icons/md'
import FilterZaman from './FilterZaman'
import FilterPlatform from './FilterPlatform'
import { Grid } from '@mui/material'
function IconShabakeForod() {
  return (
   <>
   <Grid className=' h-[100px]   ' container lg={12}>
  
    <Grid lg={10}>
    <div className=' max-sm:flex-col items-center lg:flex xl:flex h-full   m-2 w-full rounded-[25px] flex justify-between    '>
    <div className='flex'>
    
    <Link to={'/telegram'}>
<div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#e5e7e7] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

<div>
<FaTelegramPlane style={{fontSize : 30}} className={` 'text-[#98c1d9]' : ''} hover:-rotate-3 w-full    rounded text-[#0c1b41] p-1 transition duration-300`}/>
</div>
<div className={ `  'text-[#98c1d9] ' : ''} text-[#0c1b41 ] text-[14px] items-center justify-center flex  w-full  transition duration-300`}>
تلگرام
</div>

</div>
</Link>

<Link to={'/twitter'}>
<div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#e5e7e7] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

<div>
<FaXTwitter style={{fontSize : 30}} className={`  'text-[#98c1d9] ' : ''} hover:-rotate-3 w-full    rounded text-[#0c1b41] p-1 transition duration-300`}/>
</div>
<div className={ ` 'text-[#98c1d9] ' : ''} text-[#0c1b41] text-[14px] items-center justify-center flex  w-full  transition duration-300`}>
توییتر
</div>

</div>
</Link>

<Link to={'instagram'}> 
<div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#e5e7e7] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

<div>
<FaInstagram style={{fontSize :30}} className={` 'text-[#98c1d9] ' : ''}  hover:-rotate-3 w-full    rounded text-[#0c1b41] p-1 transition duration-300`}/>
</div>
<div className={`text-[#0c1b41]  'text-[#0c1b41] ' : ''  text-[14px] items-center justify-center flex    transition duration-300  `}>
اینستاگرام
</div>

</div>
</Link>





<div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#e5e7e7] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

<div>

</div>
<FaTelegramPlane style={{fontSize : 30 , color : '#0c1b41'}} className={` 'text-[#98c1d9]' : ''} hover:-rotate-3 w-full    rounded text-[#0c1b41] p-1 transition duration-300`}/>
<div className='text-[#0c1b41س] items-center justify-center text-[14px] flex  w-full  transition duration-300  '>
ایتا
</div>

</div>
    </div>

    <div>
      
    </div>
    






    
    </div>
    </Grid>
   
    
   </Grid>
     
   </> 
 
  )
}

export default IconShabakeForod






{/* <div className='flex'>
    
    <Link to={'/telegram'}>
<div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

<div>
<FaTelegramPlane style={{fontSize : 30}} className={` 'text-[#98c1d9]' : ''} hover:-rotate-3 w-full    rounded text-[#0c1b41] p-1 transition duration-300`}/>
</div>
<div className={ `  'text-[#98c1d9] ' : ''} text-[#0c1b41 ] text-[14px] items-center justify-center flex  w-full  transition duration-300`}>
تلگرام
</div>

</div>
</Link>

<Link to={'/twitter'}>
<div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

<div>
<FaXTwitter style={{fontSize : 30}} className={`  'text-[#98c1d9] ' : ''} hover:-rotate-3 w-full    rounded text-[#0c1b41] p-1 transition duration-300`}/>
</div>
<div className={ ` 'text-[#98c1d9] ' : ''} text-[#0c1b41] text-[14px] items-center justify-center flex  w-full  transition duration-300`}>
توییتر
</div>

</div>
</Link>

<Link to={'instagram'}> 
<div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

<div>
<FaInstagram style={{fontSize :30}} className={` 'text-[#98c1d9] ' : ''}  hover:-rotate-3 w-full    rounded text-[#0c1b41] p-1 transition duration-300`}/>
</div>
<div className={`text-[#0c1b41]  'text-[#0c1b41] ' : ''  text-[14px] items-center justify-center flex    transition duration-300  `}>
اینستاگرام
</div>

</div>
</Link>





<div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

<div>

</div>
<img className='hover:-rotate-6 text-[#0c1b41] hover:transition hover:duration-200' width={30} style={{borderColor : 'red', color : '#0c1b41'}} src={eita} alt="React Logo" />
<div className='text-[#0c1b41س] items-center justify-center text-[14px] flex  w-full  transition duration-300  '>
ایتا
</div>

</div>
    </div>

    <div>
      
    </div> */}

