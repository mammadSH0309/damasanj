import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { VscFilePdf } from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";
function AcardionGozaresh() {
  return (
    <div className='border rounded-md p-2  border-[#98c1d9]'>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        گزارش آفلاین 
      </AccordionSummary>
      <AccordionDetails className='space-y-2'>

        <div className='bg-yellow-300 rounded-md p-2'>
        <div className='flex  items-center gap-1.5   '>
        <VscFilePdf style={{fontSize : 30}}/>
        <div className='text-[14px]'>
        نام / تایتل
        </div>
        <div className='mr-auto '>
        <MdOutlineFileDownload style={{fontSize : 25}}  className='cursor-pointer' onClick={()=>{console.log('test')}}/>
        </div>  
        </div>
        </div>

        
        <div className='bg-yellow-300 rounded-md p-2'>
        <div className='flex  items-center gap-1.5   '>
        <VscFilePdf style={{fontSize : 30}}/>
        <div className='text-[14px]'>
        نام / تایتل
        </div>
        <div className='mr-auto '>
        <MdOutlineFileDownload style={{fontSize : 25}}  className='cursor-pointer' onClick={()=>{console.log('test')}}/>
        </div>  
        </div>
        </div>

      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        گزارش آنلاین
      </AccordionSummary>
      <AccordionDetails>
      {/* <ChartTest/> */}
      </AccordionDetails>
    </Accordion>
    
  </div>
  )
}

export default AcardionGozaresh
