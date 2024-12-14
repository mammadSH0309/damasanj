import { Divider, Grid, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import SwiperPdf from '../../components/SwiperPdf'
import { FaArrowLeft } from "react-icons/fa";
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

const data = [
  {
    title : 'روایت اول',
    link : 'revayateaval',
  },

  {
    title : 'بوم مسعله',
    link : 'boomemasael',
  },


  {
    title : 'بسته روزانه',
    link : 'basterozane',
  },



  {
    title : 'راهبردنگار',
    link : 'rahbordnegar',
  },



  {
    title : 'دماسنج',
    link : 'damasanj',
  },



  {
    title : 'دادهنما',
    link : 'dadenama',
  },
  
  {
    title : 'شایعات',
    link : 'shayeat',
  },
]





function GozareshRasadPage() {

  const [value, setValue] = useState('revayateaval');

    const handleChange = (event, newValue) => {
      setValue(newValue)
  
     
    };
  const {pathname} = useLocation()
  
  const navigate = useNavigate()
  return (
    <Grid container   className=''>
       <div className='   drop-shadow-md  rounded-md   sticky top-0 z-50 bg w-full '>
       {/* <Tab
    tabIndex={'rasadonline'}
    value={'rasadonline'} 
           sx={{fontFamily : "fontIOS"}} 
           label="روایت اول" /> */}
    <Tabs   
    allowScrollButtonsMobile
    TabIndicatorProps={{
      style: {
        backgroundColor: "#98c1d9"
      }
    }}
    component={'a'}

    onChange={handleChange}
    sx={{fontFamily : "iranSans_light" , color : 'white' ,}} value={value} className=''  aria-label="basic tabs example">
    <Tab
  
    tabIndex={'revayateaval'}
    value={'revayateaval'} 
    to={'revayateaval'}
    component={Link}

           sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="روایت اول" />
           <Tab
    tabIndex={'boomemasael'}
    value={'boomemasael'} 
    to={'boomemasael'}
    component={Link}
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="بوم مسئله" />
           <Tab
    tabIndex={'basterozane'}
    value={'basterozane'} 
    to={'basterozane'}
    component={Link}
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="بسته روزانه" />
           <Tab
    tabIndex={'rahbordnegar'}
    value={'rahbordnegar'} 
    to={'rahbordnegar'}
    component={Link}
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="راهبردنگار" />
           <Tab
    tabIndex={'damasanj'}
    to={'damasanj'}
    component={Link}
    value={'damasanj'} 
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="دماسنج" />
           <Tab
    tabIndex={'dadenama'}
    to={'dadenama'}
    component={Link}
    value={'dadenama'} 
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="داده نما" />
           <Tab
    tabIndex={'shayeat'}
    value={'shayeat'} 
    to={'shayeat'}
    component={Link}
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="شایعات" />
        
    </Tabs>
 
    </div>
      {  !pathname.split('/')[2] ? 
      data.map((data , i)=> (
       <></>
      ))
      : 
      (
        <>
        
       <Outlet/>
      
        </>
      )
    }




      

    </Grid>
  )
}

export default GozareshRasadPage
