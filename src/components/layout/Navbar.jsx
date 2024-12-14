import { Box, Grid} from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import logonavbar from '../../assets/images/logonavbar.png'
import home from '../../assets/images/home.png'
import lahzenegar from '../../assets/images/lahzenegar.png'
import asarsanji from '../../assets/images/asarsanji.png'
import ostannama from '../../assets/images/ostannama.png'
import rasad from '../../assets/images/rasad.png'
import sedasima from '../../assets/images/sedasima.png'
import hamafzari from '../../assets/images/hamafzari.png'
import hoshnegar from '../../assets/images/hoshnegar.png'
import parvandevizhe from '../../assets/images/parvandevizhe.png'
function Navbar({open}) {


  const navbaritem = [
    { 
      id : '1',
      name : 'صفحه فرود',
      link : '/', 
      icon : <div className='size-[25px]'>
              <img src={home} style={{}}/>
            </div>
    },
    {
      id : '2',
      name : 'لحظه نگار',
      link : '/rasadnegar', 
      icon :  <div className='size-[25px]'>
      <img src={lahzenegar} style={{}}/>
    </div>
    },
    {
      id : '3',
      name : 'رصد صدا و سیما',
      link : '/sedasima', 
      icon :  <div className='size-[25px]'>
      <img src={sedasima} style={{}}/>
    </div>
    },
    {
      id : '4',
      name : 'گزارش رصد',
      link : '/gozareshrasad/revayateaval', 
      icon :  <div className='size-[25px]'>
      <img src={rasad} style={{}}/>
    </div>
    },
    {
      id : '5',
      name : 'رصد هم افزایی ',
      link : '/dastresivizhe', 
      icon : <div className='size-[25px]'>
      <img src={hamafzari} style={{}}/>
    </div>
    },
    {
      id : '6',
      name : 'رصد استانی',
      link : '/ostannama/forodostan', 
      icon :  <div className='size-[25px]'>
      <img src={ostannama} style={{}}/>
    </div>
    },
    {
      id : '7',
      name : 'پرونده ویژه',
      link : '/parvande', 
      icon : <div className='size-[25px]'>
      <img src={parvandevizhe} style={{}}/>
    </div>
    },
    {
      id : '8',
      name : 'اثرسنجی',
      link : '/asarsanji', 
      icon :  <div className='size-[25px]'>
      <img src={asarsanji} style={{}}/>
    </div>
    },
    {
      id : '9',
      name : 'هوش نگار',
      link : '/hoshnegar', 
      icon :  <div className='size-[25px] '>
      <img src={hoshnegar} style={{}}/>
    </div>
    },
  ]
  const location = useLocation()
  const {pathname} = location;
  const path = pathname.split('/')[1]

  return (  
    <Grid item  lg  className={`bg-[#0c1b41]  navbar  h-full transition-all duration-300   `}>
  
      <Box >
      <Link to={'/'} >
        <div className='flex-col'>
        <div className={`${path == '' ? 'text-blue-300' : ''}  flex pt-10 align-middle justify-center text-white text-2xl`}>
          <img style={{width : open ? 45 : 30  }} src={logonavbar}  alt="" />
          </div> 
          <div className='text-stone-400 gap-x-[2px] flex justify-center pt-2 text-[12px]'>
          {open ? 
          <>
          <div>
          سامانه تحلیل داده 
          </div>
          </>
          :
          <>
          
          </>
          }
          <div className='text-white'>
            دماسنج
          </div>
          </div>
        </div>
      </Link>

      <div className='pt-3 px-2  duration-300 transition-all hover:text-[#98c1d9] text-slate-500 space-y-2'>
        {navbaritem.map((data , index)=> (
          <>
          <Link key={data.id}  to={data.link} className={`flex flex-row items-center h-10 ${path == data.link.split('/')[1] ? `bg-slate-300 text-[#98c1d9]` : ``}  border-slate-400 hover:bg-slate-600 gap-1 my-auto   align-middle rounded`}>
          <div className='pr-1'>
            {data.icon}
          </div>

          <div  className='hover:-translate-x-2 text-[1em] hover:text-[#98c1d9] text-white font-IRANSansMedium transition duration-300 h-full pt-2 w-full pr-2'>
           {data.name} 
          </ div>
          
        </Link>
          </>
        ))}
      </div>
      </Box>

    
      
    </Grid>

  )
}

export default Navbar