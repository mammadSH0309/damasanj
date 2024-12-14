import React, { useEffect, useState } from 'react'
import { Grid , Tab, Tabs } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import useParamsAll from '../customhook/useParamsAll'
function TabsBaztabtv() {
 
   
    const {pathname} = useLocation()   
    const [value, setValue] = useState(pathname.split('/')[3]);
    const handleChange = (event, newValue) => {
        setValue(newValue)
      };
  return (
    <Grid container >
    <Grid  lg={12} className=' '>
    <div className=' bg-slate-100 drop-shadow-md  rounded-md  sticky top-0 z-50 bg w-full '>
    <Tabs 
  
    onChange={handleChange}
    sx={{fontFamily : "fontIOS"}} value={value} className=''  aria-label="basic tabs example">
    <Tab 
    component={Link}
    to={'rasadonline/'}
    tabIndex={1}
    value={'rasadonline'} 
         sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="رصد انلاین" />
    <Tab
      tabIndex={2}
    component={Link}
    to={'masrafeoperator'}
    value={'masrafeoperator'} 
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label=" اپراتور" />
    <Tab 
       tabIndex={3}
    component={Link}
    to={'resane'}
    value={'resane'}
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
    label="چند رسانه ای"  />
   <Tab  
   tabIndex={4}
component={Link}
to={'maktob'}
value={'maktob'} 
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
label="مکتوب"
/>         
    </Tabs>
    </div>    
    </Grid>
    </Grid>
  )
}

export default TabsBaztabtv
