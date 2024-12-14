
import './App.css'

import Navbar from './components/layout/Navbar'
import Topbar from './components/layout/Topbar'
import { Outlet, useSearchParams } from 'react-router-dom'
import { Container, Drawer, Grid } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'


function App() {
  const [open , setOpen] = useState(true)




const handleOpen = ()=>{
  setOpen(true)
}



const handleNavbar = ()=> {
  setOpen(!open)

  
}






  return (
    
    <>
    <Grid  container  className='w-screen transition-all duration-300 '  >
       <Grid item      className={`duration-200 transition-all  `}     sx={ {width : open ? '235px' : '49px' }}    > 
        <Navbar  open={open} /> 
        </Grid>
        <Grid item xs md sm   className={`h-screen    overflow-scroll  no-scrollbar`} >
          <Topbar state={handleNavbar} open={open} />
           <Grid className=''>     
           <Outlet/>      
           </Grid>
        </Grid>
    </Grid>
    </>
      
  )
}

export default App
