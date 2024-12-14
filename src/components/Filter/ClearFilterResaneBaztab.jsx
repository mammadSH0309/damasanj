import React from 'react'
import useApiParams from '../../store'
import { CiEraser } from 'react-icons/ci'

function ClearFilterResaneBaztab() {

   

    const {params , setParams} = useApiParams()
    const handleClear = ()=> {
    
            setParams({  
                'head' : 'resaneh',
                'card' : 'بازتاب TV',
                'ti' : ''
              
           })
       
      
    }

  return (
    <button  onClick={handleClear} className=' flex justify-center items-center hover:-translate-y-1 transition-all hover  z-10 shadow-md  size-[50px] bg-slate-300 rounded-full'>
            
    <CiEraser style={{fontSize :30}} />
   
    </button>
  )
}

export default ClearFilterResaneBaztab
