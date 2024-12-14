import React, { lazy, Suspense, useEffect } from 'react'
import { Grid } from '@mui/material'
import LoadingProgress from '../../LoadingProgress'
import { Api } from '../../../query/sedasima/rasadOnline'
import useApiParams from '../../../store'

function Programs({url ,   height , param , key }) {
 
  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , param ? param : params  )
  const LazyProgams = lazy(()=> import('../../ShabakeList'))

if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>
  return (
    <>
    <Grid lg={12} container>
    <Grid container lg={12}>
    <div className='w-full ' >
    <Suspense fallback={<LoadingProgress/>}>
      
       <LazyProgams
       height={height}
       width={ '100%'}
        data={data}
       
       />
    </Suspense>
       </div>
     
    </Grid>
   
</Grid>
   </>
    
  )
}

export default Programs
