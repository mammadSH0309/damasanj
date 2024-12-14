import React, { lazy, Suspense, useEffect } from 'react'
import LoadingProgress from '../components/LoadingProgress'
import {Api} from '../query/sedasima/rasadOnline'
import useApiParams from '../store'

function LineChartAll({url , type ,   key , height , margin , param , marginRight , marginLeft , marginTop , marginBot , color}) {
 
 
  const {params , setParams} = useApiParams()

  
  const {data , isLoading ,  isFetching } = Api('lineChart' , url , param ? param : params )
 
  const LazyLine = lazy(()=> import('./Charts/LineChartMulti'))
if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
  return (
    <div>
      <Suspense fallback={<LoadingProgress/>} >
      <LazyLine height={height} 
      
      color={color}
      marginBot={marginBot}
      marginLeft={marginLeft} 
      marginRight={marginRight? marginRight : 50}  
      marginTop={marginTop?marginTop : 50}
      
        type={type} data={data}/>
      </Suspense>
    </div>
  )
}

export default LineChartAll
