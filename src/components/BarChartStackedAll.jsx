import { useQuery } from '@tanstack/react-query'
import React from 'react'
import BarChartMulti from './Charts/BarChartMulti'
import useApiParams from '../store'
import { Api } from '../query/sedasima/rasadOnline'
import LoadingProgress from './LoadingProgress'

function BarChartStackedAll({url ,  color , type ,  key , height , margin , marginRight , param , marginLeft , marginTop , marginBot}) {


  const {params , setParams} = useApiParams()
  const {data , isLoading ,  isFetching } = Api(key , url , param ? param : params )


if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
  return (
    <div>
    <BarChartMulti height={height} 
    color={color}
       marginRight={marginRight? marginRight : 50}  marginTop={marginTop?marginTop : 50}
      marginBot={marginBot}
      marginLeft={marginLeft}
      
        type={type} data={data}/>
    </div>
  )
}

export default BarChartStackedAll
