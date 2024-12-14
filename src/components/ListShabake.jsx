import { Badge, Grid } from '@mui/material'
import React from 'react'
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Baran from '../assets/images/Baran.png'
import atrak from '../assets/images/atrak.png'
import esf from '../assets/images/esf.png'
import lor from '../assets/images/lor.png'
function ListShabake() {

    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
    const data = [
       
        Baran,
        atrak,
        esf,
        esf,
        esf,
        esf,
        esf,
        esf,
        esf,
        esf,
        esf,
        lor
    ]
  return (
    <Grid  className=' overflow-x-scroll no-scrollbar '>
    <div  className='flex  gap-x-5 justify-center w-[950px] overflow-x-scroll no-scrollbar   pt-6   h-[100px]'
    >
{data.map((data)=> (
    <>
      <div 
      {...events}
      ref={ref} 
      className='shadow-md hover:shadow-xl rounded-lg transition duration-300 hover:scale-110    size-[70px]'>
    <Badge
   color='info'
  
     badgeContent={'۲۸'} 
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
 
     >
    <img src={data} width={70} height={70} alt="" />
     </Badge>
   
    </div>  
    </>
))}
    </div>

</Grid>
  )
}

export default ListShabake


