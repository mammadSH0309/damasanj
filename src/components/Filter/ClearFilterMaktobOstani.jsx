import React from 'react'
import useApiParams from '../../store'
import { CiEraser } from 'react-icons/ci'

function ClearFilterMaktobOstani() {

    const {params , setParams} = useApiParams()
    const handleClear = ()=> {
        setParams({         
            'head' : 'maktob',
            'card' : 'برنامه های استانی',
            'day' : '365',
            'ti' : ''
        })
      
        }


  return (
   <button  onClick={handleClear} className=' flex justify-center items-center hover:-translate-y-1 transition-all hover shadow-md  size-[50px] bg-slate-300 rounded-full'>
            
    <CiEraser style={{fontSize :30}} />
   
    </button>
  )
}

export default ClearFilterMaktobOstani
