import { Box, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';
function ModalImages({image , open , handleOpen , handleClose , id}) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      
        
        boxShadow: 24,
        borderRadius : '25px'
      };
     

    
  return (
  <>
  {id == image ? (
    <>
      <Modal
      className={`${open ? 'scale-100' : 'scale-0'}`}
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >

   <div className=''>
    <div className='text-white flex gap-x-2 p-2'>
        <div className='transition-all p-2 duration-300 hover:bg-slate-400 rounded-md cursor-pointer'  onClick={handleClose}>
            <CloseIcon fontSize='medium' />
        </div>
        <a   href={image} download  target="_blank"  className='transition-all p-2 duration-300 hover:bg-slate-400 rounded-md cursor-pointer '   >
            <DownloadIcon fontSize='medium' />
        </a>
    </div>
   <Box sx={style}>
    <div >
    <img className={`rounded-2xl `} src={image} alt="" />
    </div>
    </Box>
   </div>

  </Modal>
    </>
  ) 
  : (<>
  </>)}
  </>
  )
}

export default ModalImages
