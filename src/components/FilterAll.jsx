import { Button, Divider, Grid, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

function FilterAll() {
  return (
    <Grid className='0 flex justify-center' >
    <div sx className='flex-col space-y-2 p-2 bg-slate-100  rounded-2xl shadow hover:transition hover:duration-300 hover:shadow-[#b7d4e4] hover:shadow-2xl  fixed left-5 '>
    <span className=''>
    فیلتر ها 
    </span>
    <Divider className='p-1 '/>
    <div>
    <TextField 
    sx={{
    backgroundColor : 'white',
    borderColor : '#b7d4e4',
    WebkitTextFillColor : '#7796ab',
    fontWeight : 'bold',
    
    width : 230,
    
    '&.MuiTextField-root' : {borderColor : '#b7d4e4 ' , color : '#7796ab' , },
    
    }}
    label="جستجو در اخبار" variant="filled" />
    </div>
    
    <div  className='space-y-2'>
     <span >
      تاریخ انتشار
     </span>
     <div className=' '>
        <div style={{width:'100%'}}>
       
      
          
    
    </div>
    <div className='w-full' 
    style={{ width : '100%',}}>
    <Select placeholder='ابتدای بازه'
    sx={{
    direction : 'rtl' , ":dir"  :'rtl' , width : '100%',
    '&.MuiInputBase-input' : {borderColor : '#b7d4e4 ' , color : '#7796ab' , },
    '&.MuiInput-input' : {borderColor : '#b7d4e4 ' , color : '#7796ab' , },
    '&.MuiSelect-root' : {color : 'black', backgroundColor : 'black' , borderColor : 'yellow' , width : 230},
    
    }}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    
    
    
    >
    <MenuItem value={10}>تست</MenuItem>
    <MenuItem value={20}>1</MenuItem>
    <MenuItem value={30}>2</MenuItem>
    </Select>
        </div>
     </div>
    </div>
    <div className='p-1'> 
    پلتفرم
    </div>
    <div  className='w-full'>
    <Select placeholder='ابتدای بازه'
    sx={{
    width : '100%',
    
    direction : 'rtl' , ":dir"  :'rtl' ,
    '&.MuiInputBase-input' : {borderColor : '#b7d4e4 ' , color : '#7796ab' , },
    '&.MuiInput-input' : {borderColor : '#b7d4e4 ' , color : '#7796ab' , },
    '&.MuiSelect-root' : {color : 'black', backgroundColor : 'black' , borderColor : 'yellow' },
    
    }}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    >
    <MenuItem value={10}>تلگرام</MenuItem>
    <MenuItem value={20}>اینستاگرام</MenuItem>
    <MenuItem value={30}>تویتتر</MenuItem>
    </Select>
    </div>
    <div className='flex justify-center  w-full '>
    <Button color='primary' style={{color : 'black' , borderColor : 'white' , fontFamily : 'fontIOS' , marginTop :10}} variant='outlined'>
    اعمال فیلتر
    </Button>
    </div>
    </div>
    </Grid>
  )
}

export default FilterAll
