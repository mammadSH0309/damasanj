import React from 'react'
import { CiEraser } from 'react-icons/ci'
import useApiParams from '../../store'
import { useLocation } from 'react-router-dom'

function ClearFilterRasadNegar() {
    const {pathname} = useLocation()

    const {params , setParams} = useApiParams()
    const handleClear = ()=> {
        if(pathname.split('/')[3] == 'AfkarSanji') {
            setParams({  
                'page' : '1', 
               'day' : '365',
               'ti' : '',
               'head' : 'afkar'
              
           })
        }else {
            setParams({  
                'page' : '1', 
               'day' : '365',
               'ti' : '',
               'head' : 'rasadresaneh'
              
           })
        }
      
    }
  return (
    <button  onClick={handleClear} className=' flex justify-center items-center hover:-translate-y-1 transition-all hover  z-10 shadow-md  size-[50px] bg-slate-300 rounded-full'>
            
    <CiEraser style={{fontSize :30}} />
   
    </button>
  )
}

export default ClearFilterRasadNegar
