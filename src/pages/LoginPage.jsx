import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import login from '../assets/gif/login.mp4'
import logonavbar from '../assets/images/logonavbar.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
function LoginPage() {

  const navigate = useNavigate()

  const [username , setUsername] = useState('')
  const [pass , setPass] = useState('')

  
  return (
    <Grid  container>
      <ToastContainer/>

 
    <Grid>
    <video className='videoTag bg-cover   w-full fixed object-cover   -z-[1]  ' autoPlay loop muted>
    <source src={login}   />

   </video>
    </Grid>

    <Grid lg={12} className='flex justify-center  min-h-screen w-full  align-middle  items-center' >
    <div className='flex justify-center bg-opacity-60 align-middle w-[500px]  mt-96 items-center  bg-slate-800        rounded-[30px] '>
    <div className=' flex justify-center  w-full  items-center'>
    <div className='flex items-center w-full justify-center  gap-x-10 align-middle'>
    <div className='flex-col p-4 justify-start ' >
      <div className='flex items-start w-full  rounded-[25px]  '>
       <div className='flex items-center justify-center align-middle '>
      <div className='flex-col items-center  py-2   h-full space-y-2'>
      <div className=' flex justify-center pt-1  '>
        <img src={logonavbar} width={50} alt="" />
        </div>
        <div className='flex justify-center   '>
        <div className='flex-col gap-x-[3px]'>
        <div style={{color:'yellow'}} className=' pt-2  font-IranSans text-[14px]'>
        سامانه دماسنج   
        </div>
        <div className='flex text-white  justify-center   font-IranSans text-[10px]'>
        تحلیل کلان داده
        </div>
        </div>
      </div>
      </div>
       </div>
      </div>
    </div>
   <div className='flex-col  justify-center w-[220px]  items-center   space-y-2 pt-2  '>
    <div className='text-[13px]   '>
    <input value={username} onChange={(e)=> setUsername(e.target.value)} className='bg-white w-full pr-1 rounded-[25px] h-[30px]' type="text" placeholder='نام کاربری' />
    </div>
  <div className='text-[13px] w-full'>
  <input typeof='pass' value={pass} onChange={(e)=> setPass(e.target.value)}  className='bg-white w-full pr-1 rounded-[25px] h-[30px] ' type="password" placeholder='رمز ورود' />
  </div>
  <div className='flex justify-center  '>
    <Link >
    <Button
    onClick={()=> 
    {
      if(!username || !pass){
        toast('لطفا اطلاعات اکانت را به درستی  وارد کنید ')
      }
      else if (username == 'admin' && pass == 'admin'){
        navigate('/')
      }
    }
    }
    sx={{
      "&.MuiButton-contained" : {
        borderRadius : 100,
        height : 30 ,
        backgroundColor : 'yellow',
        fontFamily : 'iranSans_Medium',
        fontSize  : 12
      }
    }}
    variant='contained'>
      ورود
    </Button>
    </Link>
  </div>
    </div>
    </div>
    </div>

   
  </div>
    </Grid>
   
   
    </Grid>
  )
}

export default LoginPage





      {/* <input className='bg-white rounded-[25px] h-[35px] pr-1' type="text" placeholder='نام کاربری' />
      <input className='bg-white rounded-[25px] h-[35px] pr-1' type="text" placeholder='رمز ورود' /> */}