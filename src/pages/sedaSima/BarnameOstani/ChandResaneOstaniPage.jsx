import React, { useEffect } from 'react'
import ChandResanePage from '../../../components/ChandResanePage';
import useApiParams from '../../../store';
import FilterModalResaneBaztab from '../../../components/Filter/FilterModalResaneBaztab';
import ClearFilterResaneOstani from '../../../components/Filter/ClearFilterResaneOstani'
 


function ChandResaneOstaniPage() {

  const {params , setParams, initParams} = useApiParams()

  useEffect(()=>{
    initParams({
      'user' : '',
      'ex' : '', 
      'poli' : '',
      'tag' : '',
        'reg' : 'استانی', 
        'ch' : '',
        'plat' : '',
        'prog' : '',
      'day' : '365',
      'head' : 'resaneh',
      'card' : 'برنامه های استانی',
      'ti' : ''
    })
  },[])

  const urls = {
    amar : 'http://10.32.227.125:8000/home/image/',

  
}

  return (
    <>
    <div className='absolute bottom-16 left-4 z-50'>
    <FilterModalResaneBaztab/>
    </div>
      <div className='absolute bottom-2 left-4 z-50'>
    <ClearFilterResaneOstani/>
    </div>
  
    <ChandResanePage  url={urls.amar}/>
 
 
 
   
   </>

  )
}

export default ChandResaneOstaniPage
