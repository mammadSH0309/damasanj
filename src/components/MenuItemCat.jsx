import { Badge, Button, ClickAwayListener, Divider, Grid, Grow, ListItemText, Menu, MenuItem, MenuList, Paper, Popper, Typography } from '@mui/material';
import React, { useState } from 'react'

import {motion, useCycle} from 'framer-motion'
import { useRef } from "react";
function MenuItemCat() {

const [state , setState] = useState(true)

const hancleClick = ()=> {
    setState(!state)
}
const style = {
    fontFamily : 'FontIos',
    
}





  return (
    <>
    <Grid container>
        <Grid >
        
    <motion.h2 layout >
  
    </motion.h2>
    

        <motion.div
            
            layout
        >

        <motion.div
    
  
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: state == true ? 1 : 0 }}
        
        
    >
    <div className='p-2  text-[#b7d4e4] text-[15px]'>
        گروه ها
    </div>
    <Divider sx={{width : 130 , marginRight : 2 , marginBottom : 1}}/>
 
        <>
   
    
         <div className='  '>

         <div className='flex gap-20 p-1  hover:bg-[#b7d4e4] rounded-md  justify-between items-center w-full transition-all hover:duration-200 hover:-translate-x-2  '>
         <div className='font-FontIos text-sm mr-3 items-center mt-1  '>
            تست 1
          </div>
          
            <div>
            <Badge  className='ml-5' color="primary" badgeContent={200} max={999}></Badge>
            </div>
         </div>
           

        
       
          
         <div className='flex gap-20 p-1 hover:bg-[#b7d4e4] rounded-md  justify-between items-center w-full transition-all hover:duration-200 hover:-translate-x-2  '>
         <div className='font-FontIos text-sm mr-3 items-center mt-1  '>
            تست 1
          </div>
          
            <div>
            <Badge className='ml-5' color="primary"  badgeContent={200} max={999}></Badge>
            </div>
         </div>

         </div>
        
        
        
         
     


    <div  className='p-2 text-[#b7d4e4] text-[13px]' >
        برچسب ها
    </div>


 
    <div className='flex gap-20 p-1 hover:bg-[#b7d4e4] rounded-md  justify-between items-center w-full transition-all hover:duration-200 hover:-translate-x-2  '>
         <div className='font-FontIos text-sm mr-3 items-center mt-1  '>
            تست 1
          </div>
          
            <div>
            <Badge className='ml-5' color="primary"  badgeContent={200} max={999}></Badge>
            </div>
         </div>
           
  

         <div className='flex gap-20 p-1 hover:bg-[#b7d4e4] rounded-md  justify-between items-center w-full transition-all hover:duration-200 hover:-translate-x-2  '>
         <div className='font-FontIos text-sm mr-3 items-center mt-1  '>
            تست 1
          </div>
          
            <div>
            <Badge className='ml-5' color="primary"  badgeContent={200} max={999}></Badge>
            </div>
         </div>
           
        
        
        

   
      
        </>

        
     
    </motion.div>
    
        </motion.div>
    
        </Grid>
    </Grid>

    
    </>
   
  )
}

export default MenuItemCat
