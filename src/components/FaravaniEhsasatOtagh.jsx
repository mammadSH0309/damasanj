import { Grid } from '@mui/material'
import React, { useState } from 'react'

import BarChartMulti from './Charts/BarChartMulti'
import LoadingProgress from './LoadingProgress'
import useApiParams from '../store'
import { Api } from '../query/sedasima/rasadOnline'

function FaravaniEhsasatOtagh({key , url , param}) {
 
    
  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , param? param : params)


if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>
  return (
    <>
    
    <div className=''>
    <Grid container columns={12} className='items-center  h-[50px]'> 

<Grid lg={12} className='flex justify-start items-center p-5'>

</Grid > 
</Grid>
    <BarChartMulti  marginTop={20} marginRight={40} height={150} type={'column'}/>
    </div>
    </>
  )
}

export default FaravaniEhsasatOtagh
