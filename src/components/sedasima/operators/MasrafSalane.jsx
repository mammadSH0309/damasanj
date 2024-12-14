import React from 'react'
import { MasrafSalaneOstan } from '../../../dataStatic/MasrafSalaneBarnameOstan'
import PieChartMain from '../../Charts/PieChartMain'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
function MasrafSalane({ color , url , params , key}) {
  const API = useQuery({
    queryKey : [key , url],
    queryFn : async ()=> {
      const queryParams = params ? `?${new URLSearchParams(params).toString()}` : ''
      const response =  fetch(`${url}${queryParams}`)    
      return (await response).json()
      
      
    }
  })
const {data , isLoading , error}= API


  const {pathname} = useLocation()
  
 
if(isLoading) return <>لودینگ</>
   
  return (
   <>
   <PieChartMain data={data} height={140}  marginLeft={20} />
   </>
  )
}

export default MasrafSalane
