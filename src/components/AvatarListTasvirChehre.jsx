import { Avatar, Box, Modal, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { IoPerson } from "react-icons/io5";

import useApiParams from '../store';
import { Api } from '../query/sedasima/rasadOnline';

function AvatarListTasvirChehre({url , param , key}) {

    const {params , setParams}  = useApiParams()
    const {data , isLoading ,  isFetching , isError } = Api(key , url , param ? param : params )
  
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  if(isLoading) return null
  if(isFetching) return null
   
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



  return (
   <>
<Tooltip title='لیست اشخاص'>
<button className='size-[50px]  bg-slate-300  rounded-full group shadow-md flex justify-center items-center hover:-translate-y-1 transition-all hover  z-10' 
onClick={handleOpen}>

<div className='flex'>
    <IoPerson  style={{fontSize :30}} />
</div>

</button>

</Tooltip>
<Modal className=''
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<Box  sx={style}>
    <div 
    className='flex-col items-center space-y-2  '>
    {data.map((data , index)=>(
                <>
               <div onClick={(e)=>{
                setParams({
                  
                    'tag' : data.title_oprate,
                    'ti' : data.title_oprate,
                })
                handleClose()
               }}
            key={index} 
            className='flex hover:bg-slate-200 p-1 rounded-[25px] transition-all duration-300 gap-x-2 items-center'>
        <div>
                <Avatar src={data.image}/>
            </div>
            <div className='flex-col text-[15px]'>
                <div >
                     {data.title}
                </div>
                <div className='text-[13px]'>
                    {data.descriptions}
                </div>
            </div>          
        </div>
                </>
            ))}
    </div>
</Box>
</Modal>
   </>
  )
}

export default AvatarListTasvirChehre
