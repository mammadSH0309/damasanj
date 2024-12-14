import { Button, Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { MdSearch } from 'react-icons/md'
import FilterPlatform from './FilterPlatform'
import FilterTedad from './FilterTedad'
function SearchForod() {

    const [check , setCheck] = useState('')

  
    const {pathname} = useLocation()
    
    const path = pathname.split('/')[1]
    
    const[state , setState] = useState(false)
    
    const currencies = [
        {
          value: '1',
          label: 'تلگرام',
        },
        {
          value: '2',
          label: 'توییتر',
        },
      
      ];

  return (


<div className=' max-sm:hidden m-1   px-[120px]  '>

<div className=''>
<div className='pt-6 '>
<div className=' px-2  relative flex items-center   '>
    <input type="search" className="search  bg-blue-200 w-full pr-[3px] h-12 rounded-lg focus:border focus:border-red-400 "  />
    <MdSearch style={{color  : "white"}}  className='absolute bg-blue-400   shadow-sm drop-shadow-sm left-0 h-full w-7 rounded-l-lg  '/>
    </div> 
  </div>

 <Grid md={12} lg={12}>
 <div dir='rtl' className='pt-1 flex justify-center    '>
  <div className='flex  gap-6'>
    <div className='pt-2'>
    <FilterTedad  color={'bg-blue-200'} />
    </div>
   <div className='pt-2'>
    
   <FilterPlatform  color={'bg-blue-200'} />
   </div>
  </div>
   
 


  


  
   
</div>
<div className='flex justify-center items-center gap-10 text-[#7796ab]  '>
  <div>
    حالت
  </div>
  <div>
        <FormGroup  sx={{  fontFamily : 'fontIOS' ,}} aria-label="position" row>
        <FormControlLabel sx={{   '& .MuiFormControlLabel-label' : {fontFamily : 'fontIOS'}}}
        onClick={()=> setCheck('1')}
        checked={check == '1'}
          value="top"
          control={<Checkbox />}
          label="همه مطالب"
          labelPlacement="end"
        />
        <FormControlLabel  sx={{  '& .MuiFormControlLabel-label' : {fontFamily : 'fontIOS'}}}
        onClick={()=> setCheck('2')}
        checked={check == '2'}
          value="start"
          control={<Checkbox />}
          label="مطالب استان"
          labelPlacement="end"
        />
       
        </FormGroup>
          </div>
  <div>

  </div>
</div>
 </Grid>

<div className='flex justify-center pl-[170px] pb-4'>
<Button
   variant="outlined"
   color='primary'
   
   sx={{
    backgroundColor : '#bfdbfe',
    borderColor : '#b7d4e4',
    WebkitTextFillColor : 'white',
    fontWeight : 'bold',
    height : 40 , 
    width : 200 , 
    marginTop : 1 ,
    marginRight : 20 ,

    
    justifyContent : 'center',
    ":hover" : {backgroundColor : '#E2F7F6'},
    '& .MuiButton-outlined' : {backgroundColor : '#60a5fa' , color : '##60a5fa'},
    
   }}
   >
    <p className='font-IranSans'>جستجو</p>
   </Button>
</div>


  </div>
</div>


  )
}

export default SearchForod
