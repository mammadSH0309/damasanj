import React from 'react'
import { useLocation } from 'react-router-dom'
import useApiParams from '../../store'
import { CiEraser } from 'react-icons/ci'

function ClearFilterGozareshRasad() {

    const {pathname} = useLocation()

    const {params , setParams , initParams} = useApiParams()
    const handleClear = ()=> {
      switch(pathname.split('/')[2]){
        case 'revayateaval' : 
        initParams({  
            'page' : '1', 
            'day' : '365',
            'ti' : '',
            'card' : 'گزارش رصدی',
            'head' : 'revayat'
        })
        case 'boomemasael' : 
        initParams({  
            'page' : '1', 
            'day' : '365',
            'ti' : '',
            'card' : 'گزارش رصدی',
            'head' : 'boom'
        })
        case 'basterozane' : 
        initParams({  
            'page' : '1', 
            'day' : '365',
            'ti' : '',
            'card' : 'گزارش رصدی',
            'head' : 'baste'
        })
        case 'rahbordnegar' : 
        initParams({  
            'page' : '1', 
            'day' : '365',
            'ti' : '',
            'card' : 'گزارش رصدی',
            'head' : 'rahbord'
        })
        case 'damasanj' : 
        initParams({  
            'page' : '1', 
            'day' : '365',
            'ti' : '',
            'card' : 'گزارش رصدی',
            'head' : 'dama'
        })
        case 'dadenama' : 
        initParams({  
            'page' : '1', 
            'day' : '365',
            'ti' : '',
            'card' : 'گزارش رصدی',
            'head' : 'dadeh'
        })
        case 'shayeat' : 
        initParams({  
            'page' : '1', 
            'day' : '365',
            'ti' : '',
            'card' : 'گزارش رصدی',
            'head' : 'shayeat'
        })
      }
      
        }


  return (
    <button  onClick={handleClear} className=' flex justify-center items-center hover:-translate-y-1 transition-all hover  shadow-md  size-[50px] bg-slate-300 rounded-full'>
            
    <CiEraser style={{fontSize :30}} />
   
    </button>
  )
}

export default ClearFilterGozareshRasad
