import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import CardMaktob from '../../../components/CardMaktob'
import CardAfkarSanji from '../../../components/Charts/CardAfkarSanji'
import LoadingProgress from '../../../components/LoadingProgress'
import useApiParams from '../../../store'
import { Api } from '../../../query/sedasima/rasadOnline'
import FilterModalRasadNegar from '../../../components/Filter/FilterModalRasadNegar'
import ClearFilterRasadNegar from '../../../components/Filter/ClearFilterRasadNegar'

function RasadResaneMeliPage({key , url , param}) {
  const {params , setParams , initParams} = useApiParams()
  useEffect(()=>{
    initParams({  
      'page' : '1', 
      'day' : '365',
      'ch' : '',
      'prog' : '',
      'user' : '',
      'plat' : '',
      'reg' : '',
      'ex' : '',
      'top' : '',
      'poli' : '',
      'tag' : '',
      'ti' : '',
      'card' : 'رصد نگار',
      'head' : 'rasadresaneh'
       
    })
}, [])
    

    const {data , isLoading , error , refetch , isFetching } = Api(key , url = 'http://10.32.227.125:8000/home/document/' , param? param : params)

  
  if(isLoading) return <LoadingProgress/>
  if(isFetching) return <LoadingProgress/>
  if(error) return <>{error.message}</>
  if(data.lenght == 0) return <>دیتایی وجود ندارد</>
  return (
    
    <Grid   container  lg={12}  className='pt-8 flex gap-y-8   '>
      <div className=' absolute z-10 bottom-16 left-4  '>
<FilterModalRasadNegar/>
  </div>

  <div className=' absolute z-10 bottom-2 left-4  '>
    <ClearFilterRasadNegar/>
  </div>
  
    {data?.filter(data=> data.headers_name == 'rasadresaneh').map((data , i)=> (
        <>
   
      <Grid key={i} className=' justify-center flex'  md={3} sm={4} lg={12/5} >
      <CardAfkarSanji  data={data} />
      </Grid>
       
        </>
    ))}
  
   </Grid>
  )
}

export default RasadResaneMeliPage
