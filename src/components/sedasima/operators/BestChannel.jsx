import React, {useState } from 'react'
import BarColumnChart from '../../Charts/BarColumnChart'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useFetchData from '../../../customhook/query/useFetchData'

function BestChannel({url , params , key , height}) {


const {data , isLoading , error}= useFetchData(url , params , key )


  const {pathname} = useLocation()
  const [reg , setReg] = useState(pathname.split('/').slice(2).join('/'))   
 
if(isLoading) return <>لودینگ</>
  return (

    <>
    <BarColumnChart height={height} data={data}  /> 
    </>
    )
  
  };


      
 


export default BestChannel
