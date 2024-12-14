import React, { useEffect } from 'react'
import TV from '../assets/images/TV.png'
import TV2 from '../assets/images/TV2.png'
import TV3 from '../assets/images/TV3.png'
import varzesh from '../assets/images/varzesh.png'
import ofogh from '../assets/images/ofogh.png'
import nasim from '../assets/images/nasim.jpg'
import useParamsAll from '../customhook/useParamsAll'
import useApiParams from '../store'
import { Api } from '../query/sedasima/rasadOnline'
import LoadingProgress from './LoadingProgress'




function ListShabakeRasadBaztabTV({key , url , param}) {

  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , param? param : params)


if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>



  return (
    <>
    {data?.map((i , index)=>(
    <div key={index} onClick={(()=> {    
    setParams({   
        'ch' : i.title, })

     
    })}  className='shadow-md hover:shadow-xl rounded-[20px] transition duration-300 hover:scale-110  size-[70px]'>
         <img src={i.image} style={{borderRadius : '20px'}}  loading='lazy' width={70} height={70} alt="" />
     </div>
    ))}
    </>
  )
}

export default ListShabakeRasadBaztabTV
