import { Avatar,  Button, Divider, Grid, MenuItem, Select, Tab, Tabs, TextField } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import BubbleChart from '../components/Charts/BubbleChart';
import BarColumnChart from '../components/Charts/BarColumnChart';
import RadarCharts from '../components/Charts/RadarCharts';
function RasadSimaPage() {

    const [value, setValue] = React.useState('1');
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Grid md={12} lg={12} className='p-10'>
       <div className=' flex h-fit  '>
       <Avatar  sx={{fontSize : '30px ' , height : 100 , width : 100}} sizes='large' variant="rounded">
        <PersonIcon fontSize='30px'/>
        </Avatar>
        <div className='pr-4 '>
        <p className='text-2xl'>
        رصد برنامه شاخص صدا و سیما

        </p>
        <p className='pt-2'>
        وارد کننده و توزیع کننده بهترین فندک های روز دنیا و دخانیات وارداتی
        </p>

        </div>
       </div>
    </Grid>
    <Grid  lg={12} className='p-4'>

    <div className='w-fit  sticky top-0 z-50 '>
  
    <Tabs sx={{fontFamily : "fontIOS"}} value={value} onChange={handleChange} aria-label="basic tabs example">
   
    <Tab onClick={()=>{
        const element = document.getElementById('1')
        element?.scrollIntoView(
        
          {
           block : 'center',
            
          behavior : 'smooth'
        },
      )
    }}
    value={'1'} 
    sx={{fontFamily : "fontIOS"}}
    label="مصرف برنامه"/>
          <Tab 
          onClick={()=>{
            const element = document.getElementById('2')
            element?.scrollIntoView({
              block : 'center',
    
              behavior : 'smooth'
            })
        }}
          value={'2'}  sx={{fontFamily : "fontIOS"}} label="انتشار برنامه"  />
          <Tab
          onClick={()=>{
            const element = document.getElementById('3')
            element?.scrollIntoView({
              block : 'center',
             
              behavior : 'smooth'
            })
        }}
           value={'3'} sx={{fontFamily : "fontIOS"}} label="شبکه برتر" />
          <Tab 
          onClick={()=>{
            const element = document.getElementById('4')
            element?.scrollIntoView({
              block : 'center',
             
              behavior : 'smooth'
            })
        }}
          
          value={'4'} sx={{fontFamily : "fontIOS"}} label="میزان رشد برتر" />
    </Tabs>
 
    </div>
    <Divider sx={{}}/>
    <Grid container>
    <Grid className=' w-full' lg={10}>
    
      
       <div className='p-4 space-y-3 ml-5'>
       <div  className=' text-[#98C1D9] font-semibold'> 
        مصرف برنامه   
        
        </div>
        <Divider sx={{width: 1000}}/>
       <div id='1' className='border h-96 w-full border-[#b7d4e4] rounded-md p-4'>
        
       <BubbleChart/>
        {/* fetch API */}
        {/* <LoadingCharts/> */}


        </div>


       

        <div  className=' text-[#98C1D9] font-semibold'> 
          انتشار برنامه
        </div>
        <Divider sx={{width: 1000}}/>
        <div id='2' className='border h-96 border-[#b7d4e4] rounded-md  p-4'>
          
        <BarColumnChart/>
        {/* fetch API */}
        {/* <LoadingCharts/> */}


        </div>

        <div  className=' text-[#98C1D9] font-semibold'> 
        شبکه برتر
        
        </div>
        <Divider sx={{width: 1000}}/>
        <div id='3' className='border h-96 border-[#b7d4e4] rounded-md  p-4'>
        {/* <ChartTest/> */}
        {/* fetch API */}
        {/* <LoadingCharts/> */}


    </div>
    <div  className=' text-[#98C1D9] font-semibold'> 
      میزان رشد برتر       
        
        </div>
        <Divider sx={{width: 1000}}/>
    <div id='4' className='border h-96 border-[#b7d4e4] rounded-md  p-4'>
        <RadarCharts/>
        {/* fetch API */}
        {/* <LoadingCharts/> */}


    </div>
       </div>

    
    
    
    </Grid>
        <Grid lg={2} className='p-3 fixed left-0 shadow hover:transition hover:duration-300 hover:shadow-[#b7d4e4] hover:shadow-2xl  rounded-2xl h-96 m-1'>
        فیلتر ها
        <Divider className='p-1 pb-1 '/>
      <div>
      <TextField 
      sx={{
        marginTop : 2,
        direction : 'rtl',
    backgroundColor : 'white',
    borderColor : '#b7d4e4',
    WebkitTextFillColor : '#7796ab',
    fontWeight : 'bold',
    borderRadius : '0px',
   
    width : '100%',
    
    '&.MuiTextField-root' : {borderColor : '#b7d4e4 ' , color : '#7796ab' ,   borderRadius : '0px',},
    
   }}
       label="جستجو  " variant="filled" />
       </div>
       <div className=' space-y-1'>
        <p className='p-1'>تاریخ</p>
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


       <div className=' space-y-1'>
        <p className='p-1'>
          شبکه
        </p>
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
       <div className='flex justify-center  w-full '>
      <Button style={{color : '#7796ab' , borderColor : '#b7d4e4' , fontFamily : 'fontIOS' , marginTop :10}} variant='outlined'>
        اعمال فیلتر
        </Button>
      </div>
       

        </Grid>
    </Grid>
        
      
    </Grid>
    </>
    
  )
}

export default RasadSimaPage
