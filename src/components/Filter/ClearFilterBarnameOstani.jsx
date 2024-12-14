import React from 'react'
import { CiEraser } from 'react-icons/ci'
import useApiParams from '../../store'

function ClearFilterBarnameOstani() {
    const {params , setParams} = useApiParams()
    const handleClear = ()=> {
        setParams({  
            'reg' : 'استانی', 
           'ch' : '',
           'plat' : '',
           'prog' : ''
        })
      
        }
  return (
    <button  onClick={handleClear} className=' flex justify-center items-center hover:-translate-y-1 transition-all hover  shadow-md  size-[50px] bg-slate-300 rounded-full'>
            
    <CiEraser style={{fontSize :30}} />
   
    </button>
  )
}

export default ClearFilterBarnameOstani
