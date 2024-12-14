import React from 'react'
import BarColumnChart from '../../Charts/BarColumnChart'
import { ColorBarnameOstaniLight, ColorBarnameOstaniMain } from '../../../Theme'

import FilterZaman from '../../FilterZaman'
import { OrbitProgress } from 'react-loading-indicators'
import { FetchBestProgramOperators } from '../../../query/sedasima/operators'
import { useQuery } from '@tanstack/react-query'
function BestPrograms({url , params , key}) {

  const API = useQuery({
    queryKey : [key , url],
    queryFn : async ()=> {
      const queryParams = params ? `?${new URLSearchParams(params).toString()}` : ''
      const response =  fetch(`${url}${queryParams}`)    
      return (await response).json()
      
      
    }
  })
const {data , isLoading , error}= API



 
 if(isLoading) return <>لودینگ</>

  return (
    <>
        <BarColumnChart colorBar={'#89dee0'} height={260} marginRight={12}  data={data}/>
    </>
  )
}

export default BestPrograms
