import React from 'react'
import { CiEraser } from 'react-icons/ci'
import useApiParams from '../store'
import { useLocation } from 'react-router-dom'

function ClearFilterButton() {
    const {params , setParams} = useApiParams()
    const {pathname} = useLocation()
    const handleClear = ()=> {
    switch(pathname.split('/')[2]){
       case 'baztabtv': 
        setParams({
          'reg' : 'سیما', 
          'ch' : '',
          'plat' : '',
          'prog' : ''
              })
      case 'barnameostani' : 
      setParams({
        'reg' : 'استانی', 
        'ch' : '',
        'plat' : '',
        'prog' : ''
            })
      
      case 'accountsazman' : 
      setParams({  
        'reg' : '', 
        'ch' : '',
        'plat' : '',
        'prog' : '',
        'ord' : 'count'
    })
     
     
      }
  
    }
    
  return (
    <button  onClick={handleClear} className=' flex justify-center items-center hover:-translate-y-1 transition-all hover  z-10 shadow-md size-[50px] bg-slate-300 rounded-full'>
            
    <CiEraser style={{fontSize :30}} />
   
    </button>
  )
}

export default ClearFilterButton
