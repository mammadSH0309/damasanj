import React, { useEffect, useState } from 'react'
import { Box, MenuItem, Modal, Select, Tooltip } from '@mui/material'

import useApiParams from '../../store'
import FilterListIcon from '@mui/icons-material/FilterList';

function FilterAccountSazman() {

    const {params , setParams} = useApiParams()
    useEffect(()=>{
      setParams()
    },[])
      const style = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          borderRadius : '25px',
          boxShadow: 24,
          p: 1,
        };
      
          const [open, setOpen] = useState(false);
          const handleOpen = () => setOpen(true);
          const handleClose = () => setOpen(false);
          const [prog , setProg] = useState('')
          const [ch , setCh] = useState('')
          const [plat , setPlat] = useState('')
          const [date , setDate] = useState(7)
  return (
    <>
    <Tooltip title='فیلتر'>
 <button className='size-[50px]  bg-slate-300  rounded-full group shadow-md flex justify-center items-center hover:-translate-y-1 transition-all hover  z-10' 
 onClick={handleOpen}>
 
 <div className='flex'>
     <FilterListIcon  style={{fontSize :30}} />
 </div>
 
 </button>
 </Tooltip>
 <Modal className=''
   open={open}
   onClose={handleClose}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
 >
 <Box   sx={style}>
     <div className='flex-col  justify-center space-y-3 items-center'>
 
  
     <div className='flex-col space-y-1'>
       <div className= ' flex justify-center text-[14px]'>
         جستجوی برنامه 
       </div>
     <div className='flex justify-center '>
     <input onChange={(e)=> setProg(e.target.value)}
      type="text" 
     className="search text-[15px] w-full mx-10  bg-slate-100 border border-gray-300 flex justify-center pr-[3px] h-8 rounded-lg focus:border focus:border-red-400 " 
      />
     </div>
     </div>

     <div className='flex-col space-y-1'>
       <div className= ' flex justify-center text-[14px]'>
         جستجوی شبکه 
       </div>
     <div className='flex justify-center '>
     <input onChange={(e)=> setCh(e.target.value)}
      type="text" 
     className="search text-[15px] w-full mx-10  bg-slate-100 border border-gray-300 flex justify-center pr-[3px] h-8 rounded-lg focus:border focus:border-red-400 " 
      />
     </div>
     </div>
     <div className='flex-col space-y-1'>
    <div className= ' flex justify-center text-[14px]'>
          پلتفرم
       </div>
     <div className='flex justify-center  '>
 
       <Select sx={{width : 200 , height : 32}}
         labelId="demo-simple-select-standard-label"
           id="demo-simple-select-standard"
           onChange={(e)=> setPlat(e.target.value)}
           value={plat}
       >
         <MenuItem  value={'telegram'}>تلگرام</MenuItem>
         <MenuItem value={'twitter'}>توییتر</MenuItem>
         <MenuItem value={'instagram'}>اینستاگرام</MenuItem>
   
       </Select>
     </div>
    </div>
         
    <div className='flex-col space-y-1'>
    <div className= ' flex justify-center text-[14px]'>
          تاریخ
       </div>
     <div className='flex justify-center  '>
 
       <Select sx={{width : 200 , height : 32}}
         labelId="demo-simple-select-standard-label"
           id="demo-simple-select-standard"
           onChange={(e)=> setDate(e.target.value)}
           value={date}
       >
         <MenuItem value={7}>یک هفته گذشته</MenuItem>
         <MenuItem value={30}>یک ماه گذشته</MenuItem>
         <MenuItem value={60}>2 ماه گذشته</MenuItem>
         <MenuItem value={90}>3 ماه گذشته</MenuItem>
       </Select>
     </div>
    </div>
 
     </div>
     
    
   
     <div className='flex justify-center  w-full '>
     <button 
     onClick={()=>{
       setParams({  
         'prog' : prog,
         'ch' : ch,
         'day' : date,
         'plat': plat
     
    }) 
    handleClose()
     }}
     color='primary'
      className='bg-slate-200 transition-all duration-300 hover:bg-slate-400 p-2 rounded-[25px] text-[14px]' style={{color : 'black' , borderColor : 'white' , fontFamily : '' , marginTop :10}} variant='outlined'>
     اعمال فیلتر
     </button>
     </div>
     
 </Box>
 </Modal>
   </>
  )
}

export default FilterAccountSazman
