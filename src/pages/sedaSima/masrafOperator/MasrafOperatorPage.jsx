import React from 'react'
import { Grid, Tab, Tabs } from '@mui/material';
import  { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

function MasrafOperatorPage() {
   const {pathname} = useLocation()
    console.log(pathname.split('/')[3])
    const [value, setValue] = useState('moavenatsima');
    const navigate = useNavigate()
    const handleChange = (event, newValue) => {
      setValue(newValue)
  
     
    };

  return (
    <Grid container >
   
    <Grid  lg={12} className=' '>

    <div className=' bg-slate-100 drop-shadow-md  rounded-md  sticky top-0 z-50 bg w-full '>
    
    <Tabs 
    component={'a'}

    onChange={handleChange}
    sx={{fontFamily : "fontIOS"}} value={value} className=''  aria-label="basic tabs example">
     <Tab 
 
 tabIndex={'moavenatsima'}

 component={Link}
 to={'moavenatsima'}
 value={'moavenatsima'}

 sx={{fontFamily : "iranSans_light" , color : 'white' }}
 label="معاونت سیما" 
  />
    <Tab  
    component={Link}
    to={'moavenatsiasi'}
    tabIndex={'moavenatsiasi'}
  
    value={'moavenatsiasi'} 

    sx={{fontFamily : "iranSans_light" , color : 'white' }}
    label="معاونت سیاسی"
    />

<Tab 
 
 tabIndex={'moavenatostan'}

 component={Link}
 to={'moavenatostan'}
 value={'moavenatostan'}

 sx={{fontFamily : "iranSans_light" , color : 'white' }}
 label="معاونت امور استان ها"  />
  

<Tab 
 
 tabIndex={'moavenatseda'}

 component={Link}
 to={'moavenatseda'}
 value={'moavenatseda'}

 sx={{fontFamily : "iranSans_light" , color : 'white' }}
 label="معاونت صدا"  />




          
    </Tabs>
 
    </div>
 
    
      
        
      
    </Grid>
 
    <Grid xl={12} lg={12}>

    <Outlet/>
    
    </Grid>
    
 

   
    
    
    

    </Grid>
  )
}

export default MasrafOperatorPage
