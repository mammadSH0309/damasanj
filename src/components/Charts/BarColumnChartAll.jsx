import React, { lazy, Suspense} from 'react'
import LoadingProgress from '../LoadingProgress';
import useApiParams from '../../store';
import {Api} from '../../query/sedasima/rasadOnline';
function BarColumnChartAll({url , key , height , color , marginRight ,  param , 
  marginTop }) {
 
  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , param? param : params)
  const LazyBar = lazy(()=> import('./BarColumnChart'))

if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>

  return (
    <div>
      <Suspense>
      <LazyBar height={height} url={url} marginRight={marginRight? marginRight : 50}  marginTop={marginTop?marginTop : 50} color={color}  data={data} /> 
      </Suspense>
    </div>
  )
}

export default BarColumnChartAll
