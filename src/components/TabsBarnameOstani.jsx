import { Grid, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function TabsBarnameOstani() {
    const {pathname} = useLocation()
    
    const [value, setValue] = useState(pathname.split('/')[3]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
  return (
    <Grid  item lg={12} className=' '>

    <div className=' bg-slate-100 drop-shadow-md  rounded-md  sticky top-0 z-50 bg w-full '>
    
    <Tabs 
    component={'a'}

    onChange={handleChange}
    sx={{fontFamily : "fontIOS"}} value={value} className=''  aria-label="basic tabs example">
   
    <Tab  
    component={Link}
    to={'rasadonline'}
    tabIndex={0}
  
    value={'rasadonline'} 

    sx={{fontFamily : "iranSans_light" , color : 'white' }}
    label="رصد آنلاین"
    />

<Tab 
 
 tabIndex={1}

 component={Link}
 to={'masrafoperator'}
 value={'masrafoperator'}

 sx={{fontFamily : "iranSans_light" , color : 'white' }}
 label="اپراتور"  />
    <Tab 
 
 tabIndex={2}

    component={Link}
    to={'chandresane'}
    value={'chandresane'}

    sx={{fontFamily : "iranSans_light" , color : 'white' }}
    label="چند رسانه ای" 
     />

<Tab 
 
 tabIndex={3}

 component={Link}
 to={'maktob'}
 value={'maktob'}
 sx={{fontFamily : "iranSans_light" , color : 'white' }}
 label="مکتوب"  />          
    </Tabs>
    </div>   
    </Grid>
  )
}

export default TabsBarnameOstani
