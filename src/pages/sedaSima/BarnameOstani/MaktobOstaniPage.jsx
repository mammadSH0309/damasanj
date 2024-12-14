
import React, { useEffect } from 'react'

import MaktobPage from '../../../components/MaktobPage';
import useApiParams from '../../../store';
import FilterMaktobOstani from '../../../components/Filter/FilterMaktobOstani';
import ClearFilterMaktobOstani from '../../../components/Filter/ClearFilterMaktobOstani';
function MaktobOstaniPage() {


  const {params , setParams , initParams} = useApiParams()

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
      'head' : 'maktob',
      'card' : 'برنامه های استانی',
      'day' : '365',
      'ti' : ''
    })
  },[])
 
    const urls = {
        data : 'http://10.32.227.125:8000/home/document/'
    }
  return (
<> <div className='absolute bottom-16 left-4 z-50'>
    <FilterMaktobOstani/>
    </div>
      <div className='absolute bottom-2 left-4 z-50'>
    <ClearFilterMaktobOstani/>
    </div>
   <MaktobPage cartName={'استانی'} url={urls.data}/>
   

    </>
  )
}

export default MaktobOstaniPage
