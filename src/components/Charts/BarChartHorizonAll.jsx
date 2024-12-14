
import React, { lazy, Suspense } from 'react'
import BarRaceChart from './BarRaceChart'
import LoadingProgress from '../LoadingProgress'
import useApiParams from '../../store'
import {Api} from '../../query/sedasima/rasadOnline'

function BarChartHorizonAll({url , color , key , height ,  margin , marginRight ,  marginLeft , marginTop , marginBot}) {
  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , params)
  const LazyBarRace = lazy(()=> import('./BarRaceChart'))

if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
  return (
    <div>
      <Suspense fallback={<LoadingProgress/>}>
      <LazyBarRace data={data} marginRight={marginRight? marginRight : 50}  marginTop={marginTop?marginTop : 50} color={color}    height={height}/>
      </Suspense> 
    </div>
  )
}

export default BarChartHorizonAll
