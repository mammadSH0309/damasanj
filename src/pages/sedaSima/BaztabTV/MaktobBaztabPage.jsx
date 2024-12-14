
import React, { useEffect } from 'react'
import MaktobPage from '../../../components/MaktobPage'
import useApiParams from '../../../store'
import FilterMaktobBaztabTV from '../../../components/Filter/FilterMaktobBaztabTV'
import ClearFilterMaktobBaztabTV from '../../../components/Filter/ClearFilterMaktobBaztabTV'


function MaktobBaztabPage() {

  const {params , setParams, initParams} = useApiParams()

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
      'head' : 'maktob',
      'card' : 'بازتاب TV',
      'day' : '365',
      'ti' : ''
    })
  },[])
   
  const urls = {
    data : 'http://10.32.227.125:8000/home/document/',

  
}
  return (
    <>
  <div className='absolute bottom-2 left-4'>
    <ClearFilterMaktobBaztabTV/>
  </div>
  <div className='absolute bottom-16 left-4'>
  <FilterMaktobBaztabTV/>
  </div>
   <MaktobPage url={urls.data}/>


    </>
  )
}

export default MaktobBaztabPage





 