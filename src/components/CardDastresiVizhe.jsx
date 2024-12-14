import { Button, Grid } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function CardDastresiVizhe({data}) {
    const navigate = useNavigate()
  return (
    <Grid className='flex justify-center   '>
        <ToastContainer autoClose={3000}/>
    <div className='h-46 w-48 rounded-[25px] juce bg-[#42dac9] '>
        <div className='h-16 my-[25px] items-center   m-4 rounded-xl bg-white text-black'>
            <div className=' h-full  items-center flex justify-center font-bold'>
            {data.title}
            </div>
        </div>
        <div className=" flex justify-center  mb-4  gap-x-2 px-2">
        <Button  color='primary' variant='outlined' sx={{backgroundColor : '#D8EFD3' , color : '#55AD9B' ,fontFamily : 'fontIOS' , fontSize : '12px'  , borderRadius : '10px'}}  className="me-1 flex flex-grow-1">اشتراک </Button>
        <Button
        onClick={()=>{
            if(data.state == false) {
                toast.error("دسترسی به این بخش امکان پذیر نیست");
                                    
            }else {
                navigate(data.link)
            }
            
        }}
         color='primary' variant='outlined'
         sx={{backgroundColor : '#D8EFD3' , color : '#084538',fontFamily : 'IranSans_bold' , fontSize : '12px' , borderRadius : '10px' , fontStyle : 'bold' , }}
         className="flex-grow-1 flex hover:bg-[#c842e3] "
         
         >ورود</Button>
        
         </div>
    </div>
    </Grid>
  )
}

export default CardDastresiVizhe
