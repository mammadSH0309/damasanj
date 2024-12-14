import React, { useEffect } from 'react'
import { CiEraser } from 'react-icons/ci'
import { useLocation } from 'react-router-dom'
import useApiParams from '../../store'

function ClearFilterOtaghVaziat() {

    const {pathname} = useLocation()

    const {params , setParams} = useApiParams()
    const handleClear = ()=> {
    
            setParams({  
              'user' : '', 
              'ex' : '',
              'tag' : 'جبلی',
              'plat' : '',
              'top' : '',
              'ti' : 'جبلی',
              'sh' : 'ashkhas',
              'poli' : '',
              'day' : '30'     
           })
       
      
    }
 

  return (
    <button  onClick={handleClear} className=' flex justify-center items-center hover:-translate-y-1 transition-all hover  z-10 shadow-md size-[50px] bg-slate-300 rounded-full'>
            
    <CiEraser style={{fontSize :30}} />
   
    </button>
  )
}

export default ClearFilterOtaghVaziat
