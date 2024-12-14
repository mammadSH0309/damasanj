import React from 'react'
import { CiEraser } from 'react-icons/ci'

function ClearFilterAccountSazman() {
    const handleClear = ()=> {
        setParams({  
            'reg' : '', 
            'ch' : '',
            'plat' : '',
            'prog' : '',
            'ord' : 'count'
        })
      
        }



  return (
   <button  onClick={handleClear} className='absolute flex justify-center items-center hover:-translate-y-1 transition-all hover  z-10 shadow-md bottom-4 left-4 size-[50px] bg-slate-300 rounded-full'>
            
    <CiEraser style={{fontSize :30}} />
   
    </button>
  )
}

export default ClearFilterAccountSazman
