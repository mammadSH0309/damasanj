import { Grid, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function MainOstanPage() {

    const [value, setValue] = useState('forodostan');

    const handleChange = (event, newValue) => {
      setValue(newValue)
  
     
    };
  const {pathname} = useLocation()

    const data = [
        {
          title : 'صفحه فرود',
          link : 'forodostan',
        },
      
        {
          title : 'استان نما',
          link : 'ostan',
        },
      
      
      ]
  return (
    <Grid container   className=''>
    <div className='   drop-shadow-md  rounded-md   sticky top-0 z-50 bg w-full '>

 <Tabs   
 allowScrollButtonsMobile
 TabIndicatorProps={{
   style: {
 
   }
 }}
 component={'a'}

 onChange={handleChange}
 sx={{fontFamily : "iranSans_light" , color : 'white' ,}} value={value} className=''  aria-label="basic tabs example">

        <Tab
 tabIndex={'forodostan'}
 to={'forodostan'}
 component={Link}
 value={'forodostan'} 
 sx={{fontFamily : "iranSans_light" , color : 'white' }} 
        label="صفحه فرود" />
        <Tab
 tabIndex={'ostan'}
 value={'ostan'} 
 to={'ostan'}
 component={Link}
 sx={{fontFamily : "iranSans_light" , color : 'white' }} 
        label="استان نما" />
     
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

export default MainOstanPage
