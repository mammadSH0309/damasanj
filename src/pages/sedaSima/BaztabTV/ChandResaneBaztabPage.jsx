
import React, { useEffect } from 'react'
import ChandResanePage from '../../../components/ChandResanePage';
import useApiParams from '../../../store';
import FilterModalResaneBaztab from '../../../components/Filter/FilterModalResaneBaztab';
import ClearFilterResaneBaztab from '../../../components/Filter/ClearFilterResaneBaztab';
function ResaneSimaPage() {

  const {params , setParams , initParams} = useApiParams()

  useEffect(()=>{
    initParams({
      'reg' : 'سیما', 
      'ch' : '',
     
      'user' : '',
      'ex' : '',
      'top' : '',
      'poli' : '',
      'tag' : '',
      'plat' : '',
      'prog' : '',    
      'day' : '365',
      'head' : 'resaneh',
      'card' : 'بازتاب TV',
      'ti' : ''
    })
  },[])
  const urls = {
    amar : 'http://10.32.227.125:8000/home/image/',
  }
 

  return (
   <>
   <div className='absolute z-10 bottom-2 left-4'>
    <ClearFilterResaneBaztab/>
   </div>
   <div className='absolute z-10 bottom-16 left-4'>
    <FilterModalResaneBaztab/>
   </div>
    <ChandResanePage  url={urls.amar}/>
   </>
  )
}

export default ResaneSimaPage
