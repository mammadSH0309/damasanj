import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import {motion} from 'framer-motion'
function ResultHoshNegar({data , handle}) {



    const[state , setState] = useState(true)
    const handleClose = () => {
        setState(false)
        handle()
    }
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: state ? 1 : 0, scale: 1 }}
    transition={{
    duration: 0.4,

    ease: [0, 0.71, 0.2, 1.01]
 }}
    >
        <div className=' w-[600px]  bg-[#eeeeee] shadow-md rounded-md h-[170px]'>
       <div className='text-[15px] p-1 px-2 flex justify-between  items-center'>
        <span>
            پاسخ
        </span>
        <motion.div  className='cursor-pointer'>
            <IoCloseOutline onClick={handleClose} size={20}/>
        </motion.div>
       </div>
       <div className='mx-2 m-1  p-2 rounded-md  border border-b-blue-400 border-b-[3px]  border-x-[#bdbdbd]  border-t-[#bdbdbd]   h-[120px]'>
         
       </div>
    </div>
    </motion.div>
  )
}

export default ResultHoshNegar
