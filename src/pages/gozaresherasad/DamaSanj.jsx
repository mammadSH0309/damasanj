import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import CardAfkarSanji from '../../components/Charts/CardAfkarSanji'
import useApiParams from '../../store'
import { Api } from '../../query/sedasima/rasadOnline'
import LoadingProgress from '../../components/LoadingProgress'
import FilterModalRasadNegar from '../../components/Filter/FilterModalRasadNegar'
import ClearFilterGozareshRasad from '../../components/Filter/ClearFilterGozareshRasad'

function DamaSanj({key , url , param}) {

    useEffect(()=>{
        initParams({  
               'page' : '1', 
              'day' : '365',
              'ti' : '',
              'card' : 'گزارش رصدی',
              'head' : 'dama'
             
          })
      }, [])

    const {params , setParams , initParams} = useApiParams()
    const {data , isLoading ,  isFetching } = Api(key , url = 'http://10.32.227.125:8000/home/document/' , param  ? param : params )
  
  
  if(isLoading) return <LoadingProgress/>
  if(isFetching) return <LoadingProgress/>
  return (
    <>
    <div className=' absolute z-10 bottom-16 left-4  '>
    <FilterModalRasadNegar/>
      </div>
    
      <div className=' absolute z-10 bottom-2 left-4  '>
      <ClearFilterGozareshRasad/>
      </div>
    <Grid   container  lg={12}  className='pt-8 w-full flex justify-center      gap-4   '>
  
    {data?.map((data)=> (
        <>
   
      <Grid className=' '  lg={2} >
      <CardAfkarSanji  data={data} />
      </Grid>
       
        </>
    ))}
  
   </Grid>
    </>
  )
}

export default DamaSanj
