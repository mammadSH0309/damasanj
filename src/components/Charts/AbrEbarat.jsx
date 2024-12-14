import React, { lazy, Suspense, useEffect } from 'react'

import LoadingProgress from '../LoadingProgress'

import useApiParams from '../../store'
import {Api} from '../../query/sedasima/rasadOnline'
function AbrEbarat({url , key , height }) {
   
  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , params)

const LazyWord = lazy(()=> import('../WordCloudForod'))

if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>
 

    
  return (
    <>

    <div>
        <Suspense fallback={<LoadingProgress/>}>
        <LazyWord data={data} height={height}  />
        </Suspense>
    </div>
    </>
  )
}

export default AbrEbarat
