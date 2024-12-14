import { Divider, Grid, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';


function GozareshRasadi() {
    const {pathname} = useLocation()
    console.log(pathname.split('/')[3])
    const [value, setValue] = useState('afkar');
    const navigate = useNavigate()
    const handleChange = (event, newValue) => {
      setValue(newValue)
  
     
    };
  return (
    <Grid container  >
   
    <Grid  lg={12} className=' w-full '>

    <div className=' bg-slate-100 drop-shadow-md  rounded-md  sticky top-0 z-50 bg w-full '>
    
    <Tabs 
    component={'a'}

    onChange={handleChange}
    sx={{fontFamily : "fontIOS"}} value={value} className=''  aria-label="basic tabs example">
   
    <Tab  
    component={Link}
    to={'AfkarSanji'}
    tabIndex={0}
  
    value={'afkar'} 

    sx={{fontFamily : "iranSans_light" , color : 'white' }}
    label="افکارسنجی"
    />
    <Tab 
 
    tabIndex={1}

    component={Link}
    to={'rasadresanemeli'}
    value={'rasadresane'}

    sx={{fontFamily : "iranSans_light" , color : 'white' }}
    label="رصد رسانه ملی"  />

          
    </Tabs>
 
    </div>
 
    
      
        
      
    </Grid>
 
    <Grid xl={12} lg={12}>

    <Outlet/>
    
    </Grid>
    
 

   
    
    
    

    </Grid>
  )
}

export default GozareshRasadi
